from django.shortcuts import render
from discourse.discourse import Discourse
from django.http import HttpResponse
from gstudio_service.local_settings import DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
api = Discourse(DISCOURSE_URL, DISCOURSE_USERNAME, DISCOURSE_API_KEY)


def add_page(request):
	if request.POST:
		if request.POST.get("title") and request.POST.get("raw"):
			title = request.POST.get("title")
			raw = request.POST.get("raw")
			SAMPLE_JSON = {"title":title,"raw":raw}
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"title":"New Page Through API","raw":"New Page Description Through API"}
	return HttpResponse(api.add_page(SAMPLE_JSON,"page"))

def update_page(request):
	if request.POST:
		if request.POST.get("title") and request.POST.get("id"):
			title = request.POST.get("title")
			id = request.POST.get("id")
			SAMPLE_JSON = {"title":title,"id":id }
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"title":"New page title11","id":17,"category_id": 0}
	return HttpResponse(api.update_page(SAMPLE_JSON,"page"))

def delete_page(request):
	if request.POST:
		if request.POST.get("id"):
			id = request.POST.get("id")
			SAMPLE_JSON = {"id":id}
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"id":17,"category_id": 0}
	return HttpResponse(api.delete_page(SAMPLE_JSON,"page"))

def get_page(request):
	if request.GET:
		if request.GET.get("id"):
			id = request.GET.get("id")
			SAMPLE_JSON = {"id":id}
		else:
			return HttpResponse("Failed")
	else:
		SAMPLE_JSON = {"id":49,"category_id": 0}
	return HttpResponse(api.get_page(SAMPLE_JSON,"page"))