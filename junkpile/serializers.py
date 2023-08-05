from rest_framework import serializers
from .models import Artwork, ArtworkImage, AppProject, AppProjectImage

class ArtworkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtworkImage
        fields = ['artwork', 'image', 'caption', 'cover']

class AppProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProjectImage
        fields =['appProject','image','caption', 'cover']

class ArtworkSerializer(serializers.ModelSerializer):
    images = ArtworkImageSerializer(many=True)
    class Meta:
        model = Artwork
        fields = ['id','title', 'medium','year','description','images']

class AppProjectSerializer(serializers.ModelSerializer):
    images = AppProjectImageSerializer(many=True)
    class Meta:
        model = AppProject
        fields = ['id', 'title', 'description', 'images']


