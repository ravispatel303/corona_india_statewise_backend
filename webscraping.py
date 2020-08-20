# fetches time and table from website
# time function returns list of data and timelist
# scraping function returns data from the table in json format

import requests
from bs4 import BeautifulSoup
import json
from pprint import pprint
import re

 
res = requests.get('https://www.mohfw.gov.in/');
soup = BeautifulSoup(res.text, 'html.parser')

# print(soup)

def time():
	# retriving data and time
	time = soup.find_all('div', class_='status-update')
	timedata = time[0].span.contents[0]
	print(f'debug timedate: {timedata}')
	timelist = timedata.split(' ')

	# fetches date ie. 10 April in string format
	date = ' '.join(timelist[3:5])

	# fetches time ie. 17:00 in string format
	time = timelist[-3]

	# stores time.json file in src directory(react-app)
	# time.json file output -> {"time": "11 April 2020, 17:00"}
	datetime = f'{date} 2020, {time}'
	timedict = {'time': datetime}
	json_time_dataset = json.JSONEncoder().encode(timedict)
	print(json_time_dataset)
	
	with open('./src/time.json', 'w') as outfile:
		outfile.writelines(json_time_dataset)

	return [date, time]

def time_json():
	# retriving data and time
	time = soup.find_all('div', class_='status-update')
	timedata = time[0].span.contents[0]
	timelist = timedata.split(' ')

	# fetches date ie. 10 April in string format
	date = ' '.join(timelist[3:5])

	# fetches time ie. 17:00 in string format
	time = timelist[-3]

	# stores time.json file in src directory(react-app)
	# time.json file output -> {"time": "11 April 2020, 17:00"}
	datetime = f'{date} 2020, {time}'
	timedict = {'time': datetime}
	json_time_dataset = json.JSONEncoder().encode(timedict)
	
	return json_time_dataset

def scraping():
	table = {}
	dataset = []
	# fetches tbody(body from table)
	body = soup.tbody
	# print(body)
	# list of tr's in tbody
	tr = body.find_all('tr')

	# enumerating tr
	for i, row in enumerate(tr):
		row_content = row.find_all('td')

		# pprint(row_content)
	# till last 3rd row
		if i <= len(tr)-7:
			# it will take only digits
			# print(" ".join(re.findall("[a-zA-Z]+", row_content[1].contents[0])))
			# print(int(''.join(list(filter(str.isdigit, row_content[5].contents[0])))))
			# print(int(list(filter(str.isdigit, row_content[5].strong.contents[0]))))
			table.update({
				'States': " ".join(re.findall("[a-zA-Z]+", row_content[1].contents[0])),
				'Total Cases': int(''.join(list(filter(str.isdigit, row_content[5].contents[0])))),
				'Total Recovered': int(''.join(list(filter(str.isdigit, row_content[3].contents[0])))),
				'Total Deaths': int(''.join(list(filter(str.isdigit, row_content[4].contents[0]))))
				})
			# pprint(table)
			dataset.append(table.copy())
			table.clear()
      
	# last 2nd row -> total row
		elif i == len(tr)-6:
			# print(" ".join(re.findall("[a-zA-Z]+", row_content[1].strong.span.contents[0])))
			# print(row_content[1].strong.span.contents[0])
			
			# print(row_content)
			# print(int(row_content[2].strong.contents[0]))
			# print(int(row_content[3].strong.contents[0]))
			# print(int(row_content[4].strong.contents[0]))
			# print(int(''.join(list(filter(str.isdigit, row_content[5].strong.contents[0])))))
			table.update({
				'States': 'Total',
				#'Total Cases': int(row_content[1].strong.contents[0].replace('#','')),
				'Total Cases': int(''.join(list(filter(str.isdigit, row_content[5].strong.contents[0])))),
				'Total Recovered': int(''.join(list(filter(str.isdigit, row_content[3].strong.contents[0])))),
				'Total Deaths': int(''.join(list(filter(str.isdigit, row_content[4].strong.contents[0]))))
				})			
			dataset.append(table.copy())
			table.clear()
			
	# pprint(dataset)
	json_dataset = json.JSONEncoder().encode(dataset)
	return json_dataset