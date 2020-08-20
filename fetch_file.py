# fetches the latest 2 files from dataset directory: recent date and previous date files in csv format
# file function returns list of 2 files
import glob
import os

def file():
	files_path = os.path.join('./dataset/', '*')
	files = sorted(
    glob.iglob(files_path), key=os.path.getctime, reverse=True) 
	return files[:2]