from django.shortcuts import render
from discourse.discourse import Discourse
from django.http import HttpResponse
from gstudio_service.local_settings import DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY

# Create your views here.
api = Discourse(DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY)

# Basic CRUD operation of Group
def get_groups(request):
	return HttpResponse(api.groups("group"))

def get_group(request):
	if request.GET:
		if request.GET.get("group_name"):
			group_name = request.GET.get("group_name")
			# SAMPLE_JSON = {"group_name":group_name}
		else:
			return HttpResponse("Failed")
	else:
		group_name= "staff"
	return HttpResponse(api.group(group_name,"group"))

def add_group(request):
	if request.POST:
		if request.POST.get("group_name"):
			group_name = request.POST.get("group_name")
			SAMPLE_JSON = {"group[name]":group_name,"group[public_admission]":"true"}
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"group[name]":"TestGroup","group[public_admission]":"true"}
	return HttpResponse(api.add_group(SAMPLE_JSON,"group"))	
	# return HttpResponse(api.add_group({"group[name]":"TestGroup","group[public_admission]":"true"},"group"))

def update_group(request):
	if request.POST:
		if request.POST.get("group_name"):
			group_name = request.POST.get("group_name")

		if request.POST.get("title"):
			title = request.POST.get("title")
			SAMPLE_JSON = {"group[name]":group_name,"group[title]":title}
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"group[name]":"TestGroup","group[title]":"Group Title"}
	return HttpResponse(api.update_group(SAMPLE_JSON,"group"))

def delete_group(request):
	if request.POST:
		if request.POST.get("group_name"):
			group_name = request.POST.get("group_name")
			SAMPLE_JSON = {"group[name]":group_name}
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"group[name]":"TestGroup"}
	return HttpResponse(api.delete_group(SAMPLE_JSON,"group"))