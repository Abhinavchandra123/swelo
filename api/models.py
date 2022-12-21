from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50,null=True,blank=True)
    brand = models.CharField(max_length=30,null=True,blank=True)
    dicr = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    png1 = models.ImageField(null=True, blank=True)
    png2 = models.ImageField(null=True, blank=True)
    png3 = models.ImageField(null=True, blank=True)
    video = models.FileField(null=True, blank=True)

class Mainpage(models.Model):
    banner = models.ImageField(null=True, blank=True)
    banner2 = models.ImageField(null=True, blank=True)
    video = models.FileField(null=True, blank=True)