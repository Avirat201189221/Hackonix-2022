# Generated by Django 4.0.2 on 2022-09-04 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_alter_hackathonteam_teammate1_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hackathonteam',
            name='team_name',
            field=models.CharField(blank=True, default='', max_length=12, null=True),
        ),
    ]
