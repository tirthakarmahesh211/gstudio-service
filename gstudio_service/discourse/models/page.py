from discourse.models.discourse import Discourse
from discourse.models.api import PAGE_GET, PAGE_DELETE, PAGE_ADD, PAGE_UPDATE, HEADERS, PAGE_GET1, GROUP_GET
import requests
from discourse.utils import convert_page_title_to_slug
class Page(Discourse):

	global params
	
	params = {

    "title": "",
    "raw": "",
    "category": 0,

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
	def title(self, d):
		if not d: raise Exception("page title cannot be empty")

	@property
	def raw(self):
	    return self._raw

	@raw.setter
	def raw(self, d):
	    if not d: raise Exception("page description cannot be empty")

	def __len__(self):
		return len(self.__dict__)

	def dict(self):
		return self.__dict__

	def get_page(self):
		url=str(self.main_url+PAGE_GET1[1]).format(slug=convert_page_title_to_slug(title=self.__dict__.get("title")))
		response = requests.get(url,params=self.__dict__,headers=HEADERS)
		# print(response.json())
		if response.status_code == 200:
			json_data = response.json()
			ID = json_data["id"]
			url=str(self._main_url+PAGE_GET[1]).format(slug=convert_page_title_to_slug(title=self.__dict__.get("title")),id=self.__dict__.get("id"))
			print(url)
			response = requests.get(url,params=self.__dict__,headers=HEADERS)
			print(response)
		if response.status_code == 200:
			return response.json()

	def add_page(self):
		self.title = self.__dict__.get("title")
		self.raw = self.__dict__.get("raw")
		url=str(self._main_url+PAGE_ADD[1])
		response = requests.post(url,params=self.__dict__,headers=HEADERS)
		if response.status_code == 200:
			return response.json()

	def update_page(self):
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
			response = requests.put(url,params=self.__dict__ ,headers=HEADERS)
			# print(response.json())
			if response.status_code == 200:
				return response.json()
		return "Failed"

	def delete_page(self):
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


