# Generated by Django 4.1.3 on 2022-12-09 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_brand_product_video_alter_product_image_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='mainpage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('banner', models.ImageField(blank=True, null=True, upload_to='')),
                ('banner2', models.ImageField(blank=True, null=True, upload_to='')),
                ('video', models.FileField(blank=True, null=True, upload_to='')),
            ],
        ),
    ]
