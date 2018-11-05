from django.shortcuts import render
from django.http import HttpResponse
from discourse.models.group import Group

# Create your views here.

import json

# Basic CRUD operation of Group
params = {}

def get_groups(request):
	return HttpResponse(json.dumps(Group(**params).get_groups()), content_type="application/json")

def get_group(request):
	if request.GET:
		group_name = request.GET.get("group_name")
		params = {"group_name":group_name}
	else:
		params= {"group[name]":"NEW_GROUP"}
	return HttpResponse(json.dumps(Group(**params).get_group()), content_type="application/json")

def add_group(request):
	if request.POST:
		group_name = request.POST.get("group_name")
		group_title = request.POST.get("group_title")
		params = {"group[name]":group_name,"group[public_admission]":"true","group[title]":group_title}
	else:
		params = {"group[name]":"NewGroup10","group[public_admission]":"true","group[automatic]": 'false',}
	return HttpResponse(json.dumps(Group(**params).add_group()), content_type="application/json")	

def update_group(request):
	if request.POST:
		print(request.POST)
		if request.POST.get("group_name"):
			group_name = request.POST.get("group_name")

		if request.POST.get("title"):
			title = request.POST.get("title")
			SAMPLE_JSON = {"group[name]":group_name,"group[title]":title}
		else:
			return HttpResponse("Failed")
	else:
		params = {"new_group_name":"NEW_GROUP","group[name]":"TestGroup","group[title]":"Group Titleee"}
	return HttpResponse(json.dumps(Group(**params).update_group()), content_type="application/json")	

def delete_group(request):
	if request.POST:
		if request.POST.get("group_name"):
			group_name = request.POST.get("group_name")
			SAMPLE_JSON = {"group[name]":group_name}
		else:
			return HttpResponse("Failed")
	else:
		params = {"group[name]":"TestGroup1"}
	return HttpResponse(json.dumps(Group(**params).delete_group()), content_type="application/json")	