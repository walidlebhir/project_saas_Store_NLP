from django.shortcuts import render
from rest_framework.decorators import api_view  , permission_classes 
from rest_framework.response import Response 
from .permissions import IsStoreAdmin
from rest_framework import status
from clientApp.models import Store , Product
from .DataSerializer import ProductSerializers 
from rest_framework.exceptions import server_error , NotFound


# craete STore 
@api_view(['POST']) 
@permission_classes([IsStoreAdmin])
def CreatenewStore(request) : 
    # recuperation des donnes sur store et cree 
    name = request.data.get("name") 
    description = request.data.get("descriptionStore") 
    User_auth = request.user 
    if not name : 
        return Response({
            "message" : "data not valide "
        }, status=status.HTTP_404_NOT_FOUND)
    
    try : 
        newStore = Store(name=name , descriptionStore = description , owner = User_auth) 
        newStore.save() 
        return Response({
            "message" : "STore crate with succes " 
        } , status=status.HTTP_201_CREATED)
    
    except Exception as e : 
        # debug 
        print(f"Problemme {e}") 
        return Response({
            "message" : f"Problemme dans le server {e}"
        } , status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET']) 
@permission_classes([IsStoreAdmin]) 
def getStore(request) : 
    # recuperation de store de user conecter 
    userConect = request.user 
    try : 
        storeData = Store.objects.filter(owner = userConect) 
        if not storeData : 
            raise NotFound("Store n'existe pas ") 
        
        stores = {
            "name" : storeData.name , 
            "description" : storeData.descriptionStore  
        }

        return Response({
            "stores" : stores 
        } , status=status.HTTP_200_OK) 
    except Exception as e  : 
        raise server_error(f"problemme dans le server {e}")

# craete newProduct 
@api_view(['POST']) 
@permission_classes([IsStoreAdmin])
def CreateNewProduct(request) : 
    # recuperation des donnes de produits 
    name = request.data.get('name')
    Store_id = request.data.get('store_id')
    price = request.data.get('price')
    description = request.data.get('description') 
    category = request.data.get('category')
    stock = request.data.get('stock')
    image  = request.FILES.get('image') 
    userId = request.user 


    if not image or not name or not price or not Store_id : 
        return Response({
            "message" : "data not valide"
        })

    try : 
        # recuperation de store 
        store = Store.objects.get(id = Store_id)
        newProduct = Product(
            name = name ,
            store = store , 
            price = price , 
            stock = stock , 
            description = description , 
            category= category , 
            image = image , 
            userId = userId 
        )

        newProduct.save() 
        return Response({
            "message" : "Product create with succes "
        }, status=status.HTTP_201_CREATED)
    
    except Exception as e : 
        # debug 
        print(f"Problemme dans le server {e}") 
        return Response({
            "message " : f"problemme dans le server {e}" 
        } , status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsStoreAdmin])
def showALLproduct(request) : 
    user_Conecte = request.user 
    try : 
        # recuperation des donnes 
        DataProducts = Product.objects.filter(userId = user_Conecte) 
        serializerDataProduct = ProductSerializers(DataProducts , many =True) 
        return Response({
            "Products" : serializerDataProduct.data
        })
    except Exception as e : 
        # debug 
        print(f"problemme dans le server !!! {e}") 
        return Response({
            "message" :  f"problemme dans le server {e}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
@permission_classes([IsStoreAdmin])
def showOneProduct(request , pk) : 
    
    # creationn logic busnnes pour show one Product --> byid 
    try : 
        OneProduct = Product.objects.get(id=pk) 
        if not OneProduct : 
            return Response({
                "message" : "product not found "
            }, status=status.HTTP_404_NOT_FOUND) 
        
        serailizOneProduct = ProductSerializers(OneProduct) 
        return Response({
            "product" : serailizOneProduct.data
        })
    
    except Exception as e : 
        # debug 
        print(f"Problemme dans le serevr {e}") 
        return Response({
            "message" : f"Problemme dans le server {e}" 
        } , status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    


@api_view(['PATCH'])
def updateProduct(request , pk) : 
    # modefication des donnes d'une Produits 
    name = request.data.get('name') 
    price = request.data.get('price')
    description = request.data.get('description') 
    stock = request.data.get('stock') 

    try : 
        productUpdate = Product.objects.get(id=pk)
        if not productUpdate : 
            return Response({
                "message" : "Product ne trouve pas "
            }, status=status.HTTP_404_NOT_FOUND)
        
        productUpdate.name = name  
        productUpdate.description = description 
        productUpdate.price = price 
        productUpdate.stock = stock 
        productUpdate.save() 
        return Response({
            "message " : "produit modefie avec succes"
        } , status=status.HTTP_200_OK)

    except Exception as e : 
        # debug 
        print(f"probelemme dans le server {e}") 
        return Response({
            "message" : f"Problemme dans le server {e}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def deleteProduct(request , pk) : 
    try : 
        productDelete = Product.objects.get(id=pk) 
        productDelete.delete() 
        return Response({
            "message" : "produits est suprimer avec succes "
        })
    

    except Exception as e : 
        # debug 
        print(f"Problemme dans le server {e}") 
        return Response({
            "message " : f"Problemme dans le server {e}"
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
