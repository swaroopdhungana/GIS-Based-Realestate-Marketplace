# Generated by Django 4.1.5 on 2023-03-02 08:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_profile_f_name_profile_l_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='latitude',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='longitude',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
