from django.contrib import admin
from django.urls import path, include
from . import views 
from rest_framework import routers

urlpatterns = [
    path('products/',views.getProducts,name='products'),
    path('home/',views.getHome,name='home'),
    path('products/<str:pk>/',views.getProduct,name='product'),
]
