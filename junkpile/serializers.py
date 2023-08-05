from rest_framework import serializers
from .models import Artwork, ArtworkImage, AppProject, AppProjectImage


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = ['id','title', 'medium','year','description','artwork_images']

class ArtworkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtworkImage
        fields = '__all__'

class AppProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProject
        fields = ['id', 'title', 'description', 'app_project_images']

class AppProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProjectImage
        fields = '__all__'
