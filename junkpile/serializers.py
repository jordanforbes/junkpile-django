from rest_framework import serializers
from .models import Artwork, ArtworkImage, AppProject, AppProjectImage


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = '__all__'

class ArtworkImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtworkImage
        fields = '__all__'

class AppProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProject
        fields = '__all__'

class AppProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProjectImage
        fields = '__all__'
