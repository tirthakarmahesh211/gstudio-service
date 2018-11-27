

def convert_page_title_to_slug(**kwargs):
	title = kwargs.get("title")
	title = title.replace(" ","-")
	return title
