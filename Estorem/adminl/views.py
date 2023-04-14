from django.shortcuts import render,redirect

from .models import *
# from .forms import Prodform

def index(request):
    # products= Product.obj.all
    return render(request,'index.html')
# ,{'products':products})

# def invm(request):
#     return render(request,'inventm.html')

# def add_prod(request):
#     form =Prodform
#     context={'form'}

#     if request.method=='POST':
#         form=Prodform(request.POST)
#         if form.is_valid:
#             form.save()
#             return redirect("/")
        

        

#     return render(request,'html file',context)
    

# Create your views here.
