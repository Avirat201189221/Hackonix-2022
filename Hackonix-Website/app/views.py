from django.shortcuts import render, redirect
from app.models import HackathonTeam

# Create your views here.
def index(request):

    return render(request,"index.html")

def register(request):
    if request.method=="POST":
        teamName=request.POST.get("teamname")

        leaderName=request.POST.get("leadername")
        leaderRollNo=request.POST.get("leaderrollno")
        leaderEmail=request.POST.get("leaderemail")
        leaderPhoneNumber=request.POST.get("leaderpno")

        teammate1Name=request.POST.get("teammate1name")
        teammate1RollNo=request.POST.get("teammate1rollno")
        teammate1Email=request.POST.get("teammate1email")

        teammate2Name=request.POST.get("teammate2name")
        teammate2RollNo=request.POST.get("teammate2rollno")
        teammate2Email=request.POST.get("teammate2email")

        teammate3Name=request.POST.get("teammate3name")
        teammate3RollNo=request.POST.get("teammate3rollno")
        teammate3Email=request.POST.get("teammate3email")

        teammate4Name=request.POST.get("teammate4name")
        teammate4RollNo=request.POST.get("teammate4rollno")
        teammate4Email=request.POST.get("teammate4email")

        team=HackathonTeam(team_name=teamName,leader_name=leaderName,leader_roll_no=leaderRollNo,leader_phone_number=leaderPhoneNumber,teammate1_name=teammate1Name,teammate1_roll_no=teammate1RollNo,teammate1_thapar_email=teammate1Email,teammate2_name=teammate2Name,teammate2_roll_no=teammate2RollNo,teammate2_thapar_email=teammate2Email,teammate3_name=teammate3Name,teammate3_roll_no=teammate3RollNo,teammate3_thapar_email=teammate3Email,teammate4_name=teammate4Name,teammate4_roll_no=teammate4RollNo,teammate4_thapar_email=teammate4Email)
        team.save()
        return render(request,"register-success.html")
    return render(request,"register.html")

# def success(request):

#     return render(request,"register-success.html")