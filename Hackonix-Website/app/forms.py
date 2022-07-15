from django import forms
from app.models import HackathonTeam

class  TeamForm(forms.ModelForm):
    class Meta:
        model=HackathonTeam
        fields=['team_name','leader_name','leader_roll_no','leader_thapar_email','leader_phone_number','teammate1_name',"teammate1_roll_no","teammate1_thapar_email",'teammate2_name',"teammate2_roll_no","teammate2_thapar_email",'teammate3_name',"teammate3_roll_no","teammate3_thapar_email",'teammate4_name',"teammate4_roll_no","teammate4_thapar_email"]