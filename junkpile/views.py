from rest_framework.generics import ListAPIView, RetrieveAPIView
from django.shortcuts import render
from django.http import JsonResponse
from .models import Artwork, AppProject
from .serializers import ArtworkSerializer, ArtworkImageSerializer, AppProjectSerializer, AppProjectImageSerializer

class ArtworkListView(ListAPIView):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer

class ArtworkDetailView(RetrieveAPIView):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer
class AppProjectListView(ListAPIView):
    queryset = AppProject.objects.all()
    serializer_class = AppProjectSerializer

class AppProjectDetailView(RetrieveAPIView):
    queryset = AppProject.objects.all()
    serializer_class = AppProjectSerializer

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
