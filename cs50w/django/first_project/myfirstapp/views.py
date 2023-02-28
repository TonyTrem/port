from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
     return render(request, "myfirstapp/index.html")

def spot(request):
    return HttpResponse("Hello, Spot!")

def dominic(request):
    return HttpResponse("Hello, Dominic!")

def greet(request, name):
    return render(request, "myfirstapp/greet.html", {
        "name": name.capitalize()
    })