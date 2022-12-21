from rest_framework import serializers
from .models import Product,Mainpage


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class HomeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mainpage
        fields = '__all__'