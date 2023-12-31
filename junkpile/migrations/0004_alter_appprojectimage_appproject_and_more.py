# Generated by Django 4.1.3 on 2023-08-05 15:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('junkpile', '0003_remove_appproject_image_remove_artwork_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appprojectimage',
            name='appProject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='junkpile.appproject'),
        ),
        migrations.AlterField(
            model_name='artworkimage',
            name='artwork',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='junkpile.artwork'),
        ),
    ]
