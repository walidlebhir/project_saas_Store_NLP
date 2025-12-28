from django.urls import path 
from .views import Products , ShowProduct 
from .SearchSementique import image_search , search_text



urlpatterns = [
    path('product/' , Products , name="product") , 
    path('show/product/<str:pk>', ShowProduct , name="showProduct"), 
    path('search/images' ,image_search , name="searchImage"), 
    path('searchtext/' , search_text , name="searchtext" ) 
]
