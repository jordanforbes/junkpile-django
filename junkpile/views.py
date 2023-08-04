from django.shortcuts import render
from django.http import JsonResponse
from .models import Artwork, AppProject

def get_artwork(req):
    artwork = Artwork.objects.all()
    data = [{
        'title': a.title,
        'image': a.image.url,
        'description': a.description,
        'medium': a.medium,
        'year': a.year
    } for a in artwork]
    return JsonResponse(data, safe=False)

def get_app_projects(req):
    app_projects = AppProject.objects.all()
    data = [{
        'title': p.title,
        'image': p.image.url,
        'description': p.description,
        'technologies': p.technologies,
        'year': p.year
    } for p in app_projects]
    return JsonResponse(data, safe=False)
