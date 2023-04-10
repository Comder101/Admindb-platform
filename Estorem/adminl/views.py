from django.shortcuts import render

def index(request):
    return render(request,'adminl.html')

def invm(request):
    return render(request,'inventm.html')
    

# Create your views here.
