from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status 
from .models import Product 
from .Serializer import ProductSerialiser

# Create your views here.


@api_view(['GET'])
def Products(request) : 
    
    try : 
        dataProduct  = Product.objects.all() 
        DataProduct = ProductSerialiser(dataProduct , many=True) 
        return Response(
            {"Product" : DataProduct.data} 
        )
    except Exception as e : 
        print(e) 
        return Response(
            {"message" : f"Peoblemme dans le server {e} "}, 
        )


@api_view(['GET']) 
def ShowProduct(request , pk) : 
    try : 
        OneProduct = Product.objects.get(id =pk) 
        if not OneProduct: 
            return Response(
                {"message": "produits n'existe pas "}
            )

        objet_serilize = ProductSerialiser(OneProduct ) 
        return Response({"product" : objet_serilize.data}) 
    except Exception as e  : 
        # dbeug 
        print(f"Problemme dans le server {e}")
        return Response(
            {"message" : f"Problemme dans le server {e}"}, 
        )

