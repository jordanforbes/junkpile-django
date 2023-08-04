from rest_framework import serializers
from .models import Artwork, AppProject

class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = '__all__'

class AppProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppProject
        fields = '__all__'
