import os
import sys
import torch
import clip
from PIL import Image
import chromadb
from chromadb.config import Settings
import django

# =================== Django setup ===================
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # store/
sys.path.append(BASE_DIR)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "store.settings")
django.setup()

from clientApp.models import Product

# =================== CLIP setup ===================
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

# =================== ChromaDB setup ===================
CHROMA_PATH = os.path.join(BASE_DIR, "chroma_db")  # dossier en dehors de clientApp
os.makedirs(CHROMA_PATH, exist_ok=True)

CHROMA_CLIENT = chromadb.PersistentClient(settings=Settings(persist_directory=CHROMA_PATH))
CHROMA_COLLECTION = CHROMA_CLIENT.get_or_create_collection("products_vectors")

# =================== Utils ===================
def get_image_embedding(image_path):
    image = Image.open(image_path).convert("RGB")
    image = preprocess(image).unsqueeze(0).to(device)
    with torch.no_grad():
        embedding = model.encode_image(image)
    return embedding.cpu().numpy()[0]

# =================== Generate embeddings ===================
def generate_embeddings():
    for product in Product.objects.all():
        if not product.image:
            continue

        product_id = str(product.id)

        # Vérifier si déjà indexé
        try:
            existing = CHROMA_COLLECTION.get(ids=[product_id]).get("ids", [])
            if product_id in existing:
                print(f"⏭️ Déjà indexé : {product.name}")
                continue
        except Exception:
            pass

        embedding = get_image_embedding(product.image.path)
        CHROMA_COLLECTION.add(
            ids=[product_id],
            embeddings=[embedding.tolist()],
            metadatas=[{
                "name": product.name,
                "price": product.price,
                "category": product.category,
                "description": product.description or "",
                "image_url": product.image.url
            }]
        )
        print(f"✅ Embedding ajouté : {product.name} ({product.category})")

    print("\n🎉 Génération terminée avec succès")

# =================== Main ===================
if __name__ == "__main__":
    generate_embeddings()
