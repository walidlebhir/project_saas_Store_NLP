import os
from PIL import Image
import torch, clip, chromadb
from chromadb.config import Settings
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import Product

# =================== CLIP setup ===================
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

# =================== ChromaDB setup ===================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # store/
CHROMA_PATH = os.path.join(BASE_DIR, "chroma_db")  # le même que dans embeddingSystem.py

CHROMA_CLIENT = chromadb.PersistentClient(settings=Settings(persist_directory=CHROMA_PATH))
CHROMA_COLLECTION = CHROMA_CLIENT.get_or_create_collection("products_vectors")

# =================== Utils ===================
def get_image_embedding(image):
    image = image.convert("RGB")
    image = preprocess(image).unsqueeze(0).to(device)
    with torch.no_grad():
        embedding = model.encode_image(image)
    return embedding.cpu().numpy()[0]

def get_text_embedding(text):
    tokens = clip.tokenize([text]).to(device)
    with torch.no_grad():
        embedding = model.encode_text(tokens).cpu().numpy()[0]
    return embedding

# =================== Recherche Image ===================
@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def image_search(request):
    if "image" not in request.FILES:
        return Response({"error": "Aucune image reçue"}, status=400)

    category = request.data.get("category")
    limit = int(request.data.get("limit", 10))

    uploaded_image = request.FILES["image"]
    image = Image.open(uploaded_image)
    query_embedding = get_image_embedding(image)

    where_filter = {"category": category} if category else None
    results = CHROMA_COLLECTION.query(
        query_embeddings=[query_embedding.tolist()],
        n_results=limit,
        where=where_filter
    )

    raw_ids = results.get("ids", [[]])[0]
    raw_distances = results.get("distances", [[]])[0]

    product_ids = [pid for pid in raw_ids if pid != "0"]
    distances = [dist for pid, dist in zip(raw_ids, raw_distances) if pid != "0"]

    products = Product.objects.filter(id__in=product_ids, stock__gt=0)
    product_map = {str(p.id): p for p in products}

    response = []
    for pid, dist in zip(product_ids, distances):
        p = product_map.get(str(pid))
        if p:
            response.append({
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "stock": p.stock,
                "image_url": p.image.url,
                "category": p.category,
                "distance": dist
            })
    return Response(response)

# =================== Recherche Texte ===================
@api_view(['POST'])
def search_text(request):
    prompt = request.data.get("prompt_search")
    category = request.data.get("category")
    limit = int(request.data.get("limit", 10))

    if not prompt:
        return Response({"message": "prompt_search n'est pas envoyé"}, status=400)

    query_embedding = get_text_embedding(prompt)
    where_filter = {"category": category} if category else None

    results = CHROMA_COLLECTION.query(
        query_embeddings=[query_embedding.tolist()],
        n_results=limit,
        where=where_filter
    )

    raw_ids = results.get("ids", [[]])[0]
    raw_distances = results.get("distances", [[]])[0]

    # Associer id ↔ distance (en supprimant les ids invalides)
    id_distance_pairs = [
        (pid, dist)
        for pid, dist in zip(raw_ids, raw_distances)
        if pid != "0"
    ]

    # 🔥 TRI PAR DISTANCE (plus proche → plus loin)
    id_distance_pairs.sort(key=lambda x: x[1])

    product_ids = [pid for pid, _ in id_distance_pairs]

    products = Product.objects.filter(id__in=product_ids, stock__gt=0)
    product_map = {str(p.id): p for p in products}

    response = []
    for pid, dist in id_distance_pairs:
        p = product_map.get(str(pid))
        if p:
            response.append({
                "id": p.id,
                "name": p.name,
                "price": p.price,
                "stock": p.stock,
                "image_url": p.image.url,
                "category": p.category,
                "distance": dist
            })

    return Response(response)



# fonction pour embidding audio 
def Embidding_Audio(audio_file) : 
    pass 

# recherche Par audio 
@api_view(['POST']) 
def search_audio(request) : 
    pass