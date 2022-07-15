from django.db import models

# Create your models here.
class HackathonTeam(models.Model):
    team_name=models.CharField(max_length=12, blank=False)
    # Team Leader
    leader_name= models.CharField(max_length=22, blank=False)
    leader_roll_no=models.CharField(max_length=9, blank=False)
    leader_thapar_email=models.CharField(max_length=50, blank=False)
    leader_phone_number=models.CharField(max_length=12, blank=False)

    # Teammate 1
    teammate1_name= models.CharField(max_length=22, blank=False)
    teammate1_roll_no=models.CharField(max_length=9, blank=False)
    teammate1_thapar_email=models.CharField(max_length=50,blank=False)

    # Teammate 2
    teammate2_name= models.CharField(max_length=22, default="", null=True, blank=True)
    teammate2_roll_no=models.CharField(max_length=9, default="", null=True, blank=True)
    teammate2_thapar_email=models.CharField(max_length=50, default="", null=True, blank=True)

    # Teammate 3
    teammate3_name= models.CharField(max_length=22, default="", null=True, blank=True)
    teammate3_roll_no=models.CharField(max_length=9, default="", null=True, blank=True)
    teammate3_thapar_email=models.CharField(max_length=50, default="", null=True, blank=True)

    # Teammate 4
    teammate4_name= models.CharField(max_length=22, default="", null=True, blank=True)
    teammate4_roll_no=models.CharField(max_length=9, default="", null=True, blank=True)
    teammate4_thapar_email=models.CharField(max_length=50, default="", null=True, blank=True)
    
