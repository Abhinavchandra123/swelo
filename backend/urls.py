from django.urls import path
from .views import * 
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('',adminlogin,name='adminlogin'),
    path('home/',home,name='hm'),
    path('product/',product,name='pd'),
    path('editproduct/<pk>/',editproduct,name='edpd'),
    path('logout/',logoutUser,name='lgo')
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)