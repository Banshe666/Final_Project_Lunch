from django.shortcuts import render
from .models import Product 


def index(request):
    products = Product.objects.all()
    return render(request, "main_webapp/index.html", {"products": products})