from discourse.models.discourse import Discourse
from discourse.models.api import HEADERS, MESSAGE_ADD, NOTIFICATION_GET, REPLY_MESSAGE_PUT, PAGE_GET1, MESSAGE_GET
import requests
from discourse.utils import convert_page_title_to_slug

class Message(Discourse):

	global params
	
	params = {
    "title": "",
    "raw": "",
    "target_usernames": "",
	}

	def __init__(self,iterable=(),**kwargs):
		super().__init__()
		self.__dict__.update(params)
		self.__dict__.update(iterable, **kwargs)
		self.api_key = self._apiKey
		self.api_username = self._apiName

	@property
	def title(self):
	    return self._title

	@title.setter
	def title(self,d):
		if not d: raise Exception("page title cannot be empty")

	@property
	def raw(self):
	    return self._raw

	@raw.setter
	def raw(self, d):
	    if not d: raise Exception("page description cannot be empty")

	@property
	def target_usernames(self):
	    return self._target_usernames

	@target_usernames.setter
	def target_usernames(self, d):
	    if not d: raise Exception("target_usernames cannot be empty")

	def __len__(self):
		return len(self.__dict__)

	def dict(self):
		return self.__dict__

	def get_messages(self):
		url=str(self._main_url+MESSAGE_GET[1])
		response = requests.get(url,params=self.__dict__,headers=HEADERS)
		if response.status_code == 200:
			return response.json()

	# def get_message(self):
	# 	url=str(self._main_url+GROUP_GET[1]).format(name=self.__dict__.get("group[name]"))
	# 	response = requests.get(url,params=self.__dict__,headers=HEADERS)
	# 	if response.status_code == 200:
	# 		return response.json()

	def create_message(self):
		print(self.__dict__)
		self.title = self.__dict__.get("title")
		self.raw = self.__dict__.get("raw")
		self.target_usernames = self.__dict__.get("target_usernames")

		url=str(self._main_url+MESSAGE_ADD[1])
		print(url)
		response = requests.post(url,params=self.__dict__,headers=HEADERS)
		print(response)
		if response.status_code == 200:
			return response.json()

	def update_message(self):
		# url=str(self.main_url+PAGE_GET[1]).format(id=self.__dict__.get("id"))
		url=str(self.main_url+PAGE_GET1[1]).format(slug=convert_page_title_to_slug(title=self.__dict__.get("title")))
		response = requests.get(url,params=self.__dict__,headers=HEADERS)
		# print(response.json())
		if response.status_code == 200:
			json_data = response.json()
			ID = json_data["id"]
			url=str(self.main_url+PAGE_UPDATE[1]).format(slug=json_data["post_stream"]["posts"][0]["topic_slug"],id=json_data["post_stream"]["posts"][0]["topic_id"])
			if "new_page_title" in self.__dict__:
				self.__dict__.update({"title":self.__dict__.get("new_page_title")})
			requests.put(url,params=self.__dict__ ,headers=HEADERS)
			# if response.status_code == 200:
			# 	return response.json()
			if "post[raw]" in self.__dict__:
				url = str(self.main_url+MESSAGE_UPDATE[1]).format(id=json_data["post_stream"]["posts"][0]["id"])
				requests.put(url,params=self.__dict__ ,headers=HEADERS)
		return "Failed"

	def delete_message(self):
		url=str(self.main_url+PAGE_GET1[1]).format(slug=convert_page_title_to_slug(title=self.__dict__.get("title")))
		response = requests.get(url,params=params)
		if response.status_code == 200:
			json_data = response.json()
			ID = json_data["id"]
			url=str(self.main_url+PAGE_DELETE[1]).format(id=ID)
			response = requests.delete(url,params=self.__dict__ ,headers=HEADERS)
			if response.status_code == 200:
				return "success"
		return "Failed"

	def get_some_notifications(self):
		url=str(self.main_url+NOTIFICATION_GET[1])
		response = requests.get(url,params=self.__dict__ ,headers=HEADERS)
		if response.status_code == 200:
			return response.json()
		return "Failed"

	def reply_message(self):
		url=str(self.main_url+REPLY_MESSAGE_PUT[1])
		response = requests.put(url,params=self.__dict__ ,headers=HEADERS)
		if response.status_code == 200:
			return response.json()
		return "Failed"
