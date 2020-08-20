from flask import Flask
from flask_cors import CORS
import files as ff
import interval as intv
import webscraping as wb
app = Flask(__name__, static_folder='./build', static_url_path='/')
cors = CORS(app)

@app.route('/')
def index():
	ff.main()
	return app.send_static_file('index.html')

@app.route('/flask/runner')
def runs_infinite():
	r  = intv.job()
	# r=1
	# r = ff.main()
	# print(f'{r} jjjjj')
	return r

@app.route('/flask/data')
def json_data():
	data = ff.main()
	# data = wb.scraping()
	return data

@app.route('/flask/time')
def list_time():
	ff.main()
	times = wb.time_json()
	return times

if __name__ == '__main__':
	app.run()