from django.shortcuts import render
import requests
from gstudio_service.settings import HOSTNAME
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

# Create your views here.
@csrf_exempt
def create_or_update_page(request):
	if request.GET:
		group_id = request.GET.get("group_id")
		lan = request.GET.get("lan")
		name = request.GET.get("name")
		content_org = request.GET.get("content_org")
		alt_name = request.GET.get("alt_name")
		api_call = request.GET.get("api_call")
		created_by = request.GET.get("created_by")
		node_id = request.GET.get("node_id")
	elif request.POST:
		group_id = request.POST.get("group_id")
		lan = request.POST.get("lan")
		name = request.POST.get("name")
		content_org = request.POST.get("content_org")
		alt_name = request.POST.get("alt_name")
		api_call = request.POST.get("api_call")
		created_by = request.POST.get("created_by")
		node_id = request.POST.get("node_id")		

	URL = HOSTNAME + group_id + "/course/save_course_page/"
	response = requests.post(URL,data={"lan":lan,"name":name,"content_org":content_org,"alt_name":alt_name,"api_call":api_call,"created_by":created_by,"node_id":node_id})
	return HttpResponse(response,content_type="application/json")

@csrf_exempt
def get_pages(request):
	if request.GET:
		group_id = request.GET.get("group_id")

	elif request.POST:
		group_id = request.POST.get("group_id")

	URL = HOSTNAME + group_id + "/course/activities/"
	response = requests.post(URL,data={})
	return HttpResponse(response,content_type="application/json")