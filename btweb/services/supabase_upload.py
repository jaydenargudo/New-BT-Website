from .supabase_client import supabase
import os

BUCKET_NAME = "media"

def upload_image_to_supabase(file, file_path):
    data = file.read()
    supabase.storage.from_(BUCKET_NAME).upload(file_path, data, {"content-type": file.content_type})
    public_url = supabase.storage.from_(BUCKET_NAME).get_public_url(file_path)
    return public_url['publicURL']