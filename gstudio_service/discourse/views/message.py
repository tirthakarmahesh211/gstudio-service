from django.shortcuts import render
from django.http import HttpResponse
from discourse.models.message import Message
import json

# Create your views here.
params = {}
def get_messages(request):
	params = {"before":40}
	# return HttpResponse(api.get_messages({"before":40},"message"))
	return HttpResponse(json.dumps(Message(**params).get_messages()), content_type="application/json")	

def get_private_messages(request):
	# return HttpResponse(api.get_private_messages({"username":"username"},"message"))
	return HttpResponse(json.dumps(Message(**params).get_private_messages()), content_type="application/json")	

def enable_private_messages(request):
	# return HttpResponse(api.enable_private_messages({"enable_private_messages":"true" },"message"))
	return HttpResponse(json.dumps(Message(**params).enable_private_messages()), content_type="application/json")	

def create_message(request):
	if request.POST:
		title = request.POST.get("title")
		raw = request.POST.get("raw")
		target_usernames = request.POST.get("target_usernames")
		archetype = "private_message"
		params = {"title":title,"raw":raw,"target_usernames":target_usernames,"archetype":archetype}

	else:
		params = {"title":"Test message vvv rrrrrrrrrggggggggggg pppp","raw": "private test messae mmmmmmmmmmmmmmm","target_usernames":"NewGroup10","archetype": "private_message"}
	return HttpResponse(json.dumps(Message(**params).create_message()), content_type="application/json")

def get_some_notifications(request):
	return HttpResponse(json.dumps(Message(**params).get_some_notifications()), content_type="application/json")

def reply_message(request):
	params = {"title": "reply message vvv rrrrrrrrrggggggggggg pppp","topic_id":108 }
	return HttpResponse(json.dumps(Message(**params).reply_message()), content_type="application/json")
	# return HttpResponse(reply_for_messages({"title":"Reply message","topic_id":18},"message"))

def update_message(request):
	if request.POST:
		id = request.POST.get("id")
		raw = request.POST.get("raw")
		params = {"post[raw]":raw}
	else:
		params = {"title":"Test message vvv rrrrrrrrrggggggggggg pppp","post[raw]":"Test messageeeerrrrrrrrrrrrrrrrrr"}
	return HttpResponse(json.dumps(Message(**params).update_message()), content_type="application/json")

def delete_message(request):
	if request.POST:
		title = request.POST.get("title")
		params = {"title":title}
	else:
		params = {"title":"Test message vvv rrrrrrrrrggggggggggg pppp"}
	return HttpResponse(json.dumps(Message(**params).delete_message()), content_type="application/json")