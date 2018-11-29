import requests

USER_GET1 =           (requests.get, "/users/{username}.json", 'user')
USER_GET2 =           (requests.get, "/admin/users/{id}.json", None)
USER_PUT =            (requests.put, "/users/{username}", 'user')

GROUP_GET =           (requests.get, "/groups/{name}.json", 'basic_group')
# GROUP_PUT =           (requests.put, "/admin/groups/{id}", 'basic_group')
GROUP_PUT =           (requests.put, "/groups/{id}.json", 'group')
GROUP_DELETE =        (requests.delete, "/admin/groups/{id}.json", None)
GROUP_ADD =           (requests.post, "/admin/groups", 'basic_group')
# GROUPS_GET =          (requests.get, "/admin/groups.json", None)
GROUPS_GET =          (requests.get, "/groups.json", None)
GROUP_OWNERS_ADD =    (requests.put, "/admin/groups/{id}/owners.json", None)
GROUP_OWNERS_REMOVE =    (requests.delete, "/admin/groups/{id}/owners.json", None)
#GROUP_USER_ADD =    (requests.put, "/admin/users/{id}/groups", None)
GROUP_USER_ADD =    (requests.put, "/groups/{group_id}/members.json", None)
GROUP_USER_REMOVE =    (requests.delete, "/groups/{group_id}/members.json", None)

PAGE_ADD = (requests.post, "/posts.json", None)
PAGE_UPDATE =(requests.put, "/t/{slug}/{id}.json", None)
PAGE_DELETE =(requests.delete, "/t/{id}.json", None)
PAGE_GET =(requests.get, "/t/{id}", None)
HEADERS = {"Content-Type": "multipart/form-data" }
PAGE_GET1 =(requests.get, "/t/{slug}.json", None)

MESSAGE_GET = (requests.get, "/posts.json", None)
MESSAGE_ADD = (requests.post, "/posts.json", None)
PRIVATE_MESSAGE_GET = (requests.get, "/topics/private-messages-sent/{username}.json", None)
ENABLE_PRIVATE_MESSAGE_PUT = (requests.put, "/admin/site_settings/enable_private_messages", None)
NOTIFICATION_GET = (requests.get, "/notifications.json", None)
MESSAGE_UPDATE = (requests.put, "/posts/{id}", None)
MESSAGE_DELETE = (requests.delete, "/posts/{id}", None)
REPLY_MESSAGE_PUT = (requests.put, "/posts/{id}", None)

UPLOAD_FILE = (requests.post, "/uploads.json", None)