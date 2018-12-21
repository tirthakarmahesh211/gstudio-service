from django.shortcuts import render
from django.http import HttpResponse
from discourse.models.page import Page
import json

def add_page(request):
	if request.POST:
		if request.POST.get("title") and request.POST.get("raw"):
			title = request.POST.get("title")
			raw = request.POST.get("raw")
			params = {"title":title,"raw":raw}
		else:
			return HttpResponse("Failed")
	else:
		params = {"title":"New Page Through APIIIIIIIIIIIIIIIII","raw":"New Page Description Through API"}
	return HttpResponse(json.dumps(Page(**params).add_page()), content_type="application/json")

def update_page(request):
	if request.POST:
		if request.POST.get("title") and request.POST.get("id"):
			title = request.POST.get("title")
			new_page_title = request.POST.get("new_page_title")
			id = request.POST.get("id")
			params = {"title":title,"id":id }
		else:
			return HttpResponse("Failed")
	else:
		params = {"title":"new page title11","new_page_title":"new page title22"}
	return HttpResponse(json.dumps(Page(**params).update_page()), content_type="application/json")	

def delete_page(request):
	if request.POST:
		title = request.POST.get("title")
		params = {"title":title,"category_id": 0}
	else:
		params = {"title":"test message vvv rrrrrrrrrrrr pppp","category_id": 0}
	return HttpResponse(json.dumps(Page(**params).delete_page()), content_type="application/json")	

def get_page(request):
	if request.GET:
		if request.GET.get("id"):
			id = request.GET.get("id")
			params = {"id":id}
		else:
			return HttpResponse("Failed")
	else:
		params = {"title":"Test message vvv rrrrrrrrrrrr pppp"}
	return HttpResponse(json.dumps(Page(**params).get_page()), content_type="application/json")	