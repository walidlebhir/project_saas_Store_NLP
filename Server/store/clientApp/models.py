from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here. --> class database 
class User(AbstractUser):
    class Role(models.TextChoices):
        CLIENT = 'client', 'Client'
        STORE_ADMIN = 'store_admin', 'Store Admin'
    role = models.CharField(max_length=20, choices=Role.choices , default=Role.CLIENT)
    fullname = models.TextField(max_length=50 , blank=False , null=False) 


class Store(models.Model):
    name = models.CharField(max_length=255)
    descriptionStore = models.TextField(null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="stores")

class categorychoise(models.TextChoices) : 
    ELECTRONIQUE = 'electronique', 'Électronique'
    VETEMENT = 'vetement', 'Vêtement'
    MAISON = 'maison', 'Maison'
    SPORT = 'sport', 'Sport'
    AUTRE = 'autre', 'Autre'

class Product(models.Model):
    name = models.CharField(max_length=255)
    store = models.ForeignKey(Store, on_delete=models.CASCADE, related_name="products")
    userId = models.ForeignKey(User ,on_delete=models.CASCADE , related_name="users" )
    price = models.FloatField()
    stock = models.IntegerField()
    description = models.TextField(blank=True , null=True) 
    category = models.CharField(max_length=50, choices=categorychoise.choices , default=categorychoise.AUTRE)
    image = models.ImageField(upload_to="products/")

class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    total_price = models.FloatField()
    status = models.CharField(max_length=20, default="en cours")
    created_at = models.DateTimeField(auto_now_add=True)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.FloatField()
