# Generated by Django 4.1.3 on 2023-08-05 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('junkpile', '0004_alter_appprojectimage_appproject_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='appprojectimage',
            name='cover',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='artworkimage',
            name='cover',
            field=models.BooleanField(default=False),
        ),
    ]
