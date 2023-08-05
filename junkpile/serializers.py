from rest_framework import serializers
from .models import Artwork, ArtworkImage, AppProject, AppProjectImage

class ArtworkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtworkImage
        fields = ['artwork', 'image', 'caption']

class AppProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProjectImage
        fields =['appProject','image','caption']

class ArtworkSerializer(serializers.ModelSerializer):
    artwork_images = ArtworkImageSerializer(many=True)
    class Meta:
        model = Artwork
        fields = ['id','title', 'medium','year','description','artwork_images']

class AppProjectSerializer(serializers.ModelSerializer):
    app_project_images = AppProjectImageSerializer(many=True)
    class Meta:
        model = AppProject
        fields = ['id', 'title', 'description', 'app_project_images']


