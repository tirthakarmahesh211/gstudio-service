from django.shortcuts import render
from discourse.discourse import *
from django.http import HttpResponse
from gstudio_service.settings import *

# Create your views here.
api = Discourse(DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY)

# Basic CRUD operation of Group
def get_groups(request):
	return HttpResponse(api.groups("group"))

def get_group(request):
	return HttpResponse(api.group("staff","group"))

def add_group(request):
	return HttpResponse(api.add_group({"group[name]":"TestGroup1","group[public_admission]":"false"},"group"))

def update_group(request):
	return HttpResponse(api.update_group({"group[name]":"TestGroup","group[title]":"Group Title"},"group"))

def delete_group(request):
	return HttpResponse(api.delete_group({"group[name]":"TestGroup"},"group"))

# Basic CRUD operation of Pages

def add_page(request):
	return HttpResponse(api.add_page({"title":"New Page Through API","raw":"New Page Description Through API"},"page"))

def update_page(request):
	return HttpResponse(api.update_page({"title":"New Page","id":24,"category_id": 0},"page"))

def delete_page(request):
	return HttpResponse(api.delete_page({"id":24},"page"))

def get_page(request):
	return HttpResponse(api.get_page({"id":24},"page"))

# Basic CRUD operation of Messages

def get_message(request):
	return HttpResponse(api.get_message({"before":40},"message"))

# def create_message(request):
# 	return HttpResponse(api.create_message({"before":40},"message"))




# Basic CRUD operation for files
def upload_file(request):
	return HttpResponse(api.upload_file({'files[]': {"file":open('/home/siddhu/Desktop/nroer.jpg','rb') },"type":"composer" },"files"))

