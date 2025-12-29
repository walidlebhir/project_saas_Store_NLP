from django.urls import path 
from .AUthenticationView import registerFunction , Login , User_isAuh
from .views import CreatenewStore , CreateNewProduct , getStore 

urlpatterns = [
    path('register/' ,registerFunction , name="Register") , 
    path('login/' ,Login , name="login") , 
    path('auth/user' , User_isAuh , name="auth_user"), 
    path('/create/store' ,CreatenewStore,name="create_store") , 
    path('/get/store' , getStore,name="get_store")
]




