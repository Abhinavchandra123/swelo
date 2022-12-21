from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product, Mainpage
from .serializers import ProductSerializer, HomeSerializer
from .products import products
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes =[
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload/',

        '/api/products/<id>/reviews/',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>/',
    ]
    return JsonResponse(routes,safe=False)

# @api_view(['GET'])
# def getProducts(request):
    
#     return Response(products)
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)
# @api_view(['GET'])
# def getProduct(request,pk):
#     product = None
#     for i in products:
#         if i['_id'] == pk:
#             product=i
#             break
#     return Response(product)
@api_view(['GET'])
def getProduct(request,pk):
    products = Product.objects.get(id=pk)
    serializer = ProductSerializer(products, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getHome(request):
    home = Mainpage.objects.get(id=1)
    serializer = HomeSerializer(home, many=False)
    return Response(serializer.data)