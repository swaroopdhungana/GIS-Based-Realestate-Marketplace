# Generated by Django 4.1.5 on 2023-02-25 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_remove_profile_seller_listing_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='f_name',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='l_name',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
