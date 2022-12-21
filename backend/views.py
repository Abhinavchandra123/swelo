from django.shortcuts import render, redirect
from api.models import Product, Mainpage
from django.contrib import messages
from django.contrib.auth import authenticate , login, logout
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required(login_url='login')
def home(request):
    home=Mainpage.objects.get(id=1)
    if request.method == 'POST':
        data=request.FILES
        if request.POST['button'] == 'banner':
            banner=data.get('banner')
            if banner==None:
                messages.error(request, 'Banner field is empty', extra_tags='alert-warning')
            else:
                home.banner=banner
                home.save()
        elif request.POST['button'] == 'banner2':
            banner2=data.get('banner2')
            if banner2==None:
                messages.error(request, 'Image field is empty', extra_tags='alert-warning')
            else:
                home.banner2=banner2
                home.save()
        elif request.POST['button'] == 'video':
            video=data.get('video')
            if video==None:
                messages.error(request, 'Video field is empty', extra_tags='alert-warning')
            else:
                home.video=video
                home.save()
        return redirect('hm')
    context={'home':home}
    return render(request,"dashboard.html",context)


@login_required(login_url='login')
def editproduct(request,pk):
    product=Product.objects.get(id=pk)
    if request.method == 'POST':
        data=request.POST
        file=request.FILES
        print(data['button'])
        if data['button']=='image':
            if file.get('image')==None:
                messages.error(request, 'Image field is empty', extra_tags='alert-warning')
            else:
                product.image=file['image']
                product.save()
        elif data['button']=='video':
            if file.get('video')==None:
                messages.error(request, 'Video field is empty', extra_tags='alert-warning')
            else:
                product.video=file['video']
                product.save()
        elif data['button']=='slider1':
            if file.get('slider1')==None:
                messages.error(request, 'Slider1 field is empty', extra_tags='alert-warning')
            else:
                product.png1=file['slider1']
                product.save()
        elif data['button']=='slider2':

            if file.get('slider2')==None:
                messages.error(request, 'Slider2 field is empty', extra_tags='alert-warning')
            else:
                product.png2=file['slider2']
                product.save()
        elif data['button']=='slider3':
            if file.get('slider3')==None:
                messages.error(request, 'Slider3 field is empty', extra_tags='alert-warning')
            else:
                product.png3=file['slider3']
                product.save()
        return redirect('edpd',pk)
    contxt={'product':product}
    return render(request,'editproducts.html',contxt)

@login_required(login_url='login')
def product(request):
    products=Product.objects.all()
    context={'products':products}
    return render(request,'products.html',context)

def adminlogin(request):
    if request.method=="POST":
        uname=request.POST['uname']
        pwd=request.POST['pwd']
        user=authenticate(request,username=uname,password=pwd)
        print(user,"hhh")
        if user:
            if user.is_staff==1:
                login(request,user)
                return redirect('hm')
        messages.error(request, 'Incorrect username or Password', extra_tags='text-danger')
    return render(request,'sign-in.html')


# logout button
def logoutUser(request):
    logout(request)
    return redirect('adminlogin')