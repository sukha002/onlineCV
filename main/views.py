from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    return render(request, "main/home.html")


def about(request):
    return render(about, "main/about.html")


def deploymentbook(request):
    return render(request, "main/deploymentbook.html")