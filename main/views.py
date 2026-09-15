from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, "main/home.html")


def about(request):
    text = "Hello, this text is returned in the Django view!"
    return HttpResponse(text)