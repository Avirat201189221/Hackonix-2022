from django.db import models

# Create your models here.
class HackathonTeam(models.Model):
    team_name=models.CharField(max_length=12)
    # Team Leader
    leader_name= models.CharField(max_length=22, default="")
    leader_roll_no=models.CharField(max_length=9, default="")
    leader_thapar_email=models.CharField(max_length=50, default="")
    leader_phone_number=models.CharField(max_length=10, default="")

    # Teammate 1
    teammate1_name= models.CharField(max_length=22, default="")
    teammate1_roll_no=models.CharField(max_length=9, default="")
    teammate1_thapar_email=models.CharField(max_length=50, default="")

    # Teammate 2
    teammate2_name= models.CharField(max_length=22, default="")
    teammate2_roll_no=models.CharField(max_length=9, default="")
    teammate2_thapar_email=models.CharField(max_length=50, default="")

    # Teammate 3
    teammate3_name= models.CharField(max_length=22, default="")
    teammate3_roll_no=models.CharField(max_length=9, default="")
    teammate3_thapar_email=models.CharField(max_length=50, default="")

    # Teammate 4
    teammate4_name= models.CharField(max_length=22, default="")
    teammate4_roll_no=models.CharField(max_length=9, default="")
    teammate4_thapar_email=models.CharField(max_length=50, default="")
    
