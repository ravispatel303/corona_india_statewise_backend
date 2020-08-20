
# finds the recent data(ie. New Cases, New Deaths, etc) from latest and previous day's dataset
# stores the recentData in react app

import pandas as panda
import webscraping as w
import fetch_file as ff
import csv
from pprint import pprint 
import json
from pprint import pprint

def main():
	# retrives json and time from webscraping file
	# json_data = w.scraping()
	# date = w.time()
	# print(f'debug date:{date}')
	# # saves the json data in dataset directory with date.csv format
	# df = panda.read_json (json_data)
	# if ',' in date[0]:
	# 	trimDate = str(date[0]).strip().replace(',','').replace('\t','')	
	# 	print(str(date[0]).strip().replace(',',''))
	# # f = f'./dataset/{date[0]}.csv'
	# f = f'./dataset/{trimDate}.csv'
	# print(f'debug f:{f}')
	# df.to_csv (f, index = None)

	diff_dict = {}
	diff_dataset = []

	# retrieves recent and previous date path from fetch_file file
	recentFile, pastFile = ff.file()
	rlist, plist =[], []
	print(recentFile, pastFile)

	# stores the content in 2 list: recent date -> rlist, previous date -> plist
	# note: dont use zip(rcsv, pcsv) because there can be many states in new file, same with "with open ...."
	with open(recentFile,  errors='ignore') as rfile:
		rcsv = csv.reader(rfile, delimiter=',')
		for rd in rcsv:
			rlist.append(rd)

	with open(pastFile,  errors='ignore') as pfile:
		pcsv = csv.reader(pfile, delimiter=',')	
		for pd in pcsv:
			plist.append(pd)

		pindex = 0
		for index, rdata in enumerate(rlist):
			pdata = plist[pindex]
			# print(f'Past: {index}, {pdata}')
			# print(f'Recent: {index}, {rdata}')
			# eliminating header
			if index == 0:
				pindex += 1

			else:
				# compares state
				if str(rdata[0]) == str(pdata[0]):
					diff_dict.update({
						'States': str(rdata[0]),
						'New Cases': int(rdata[1]) - int(pdata[1]),
						'New Deaths': int(rdata[3]) - int(pdata[3])
						})
					pindex += 1
					# print(f'1: {int(rdata[1])}, 2: {int(pdata[1])}')
					# print(f'New Cases {int(rdata[1]) - int(pdata[1])} ,New Deaths {int(rdata[3]) - int(pdata[3])}')

				# new state added in recent data 
				else:
					diff_dict.update({
						'States': str(rdata[0]),
						'New Cases': int(rdata[1]),
						'New Deaths': int(rdata[3])
						})
					# print(f'{rdata[0]} , {pdata[0]} else')
				
				diff_dict.update({
					'Total Cases': int(rdata[1]),
					'Total Recovered': int(rdata[2]),
					'Total Deaths': int(rdata[3])
					})
				diff_dataset.append(diff_dict.copy())
				diff_dict.clear()

	json_diff_dataset = json.JSONEncoder().encode(diff_dataset)

	# stores the recentdata.json file in src directory(react-app)
	with open('./src/recentdata.json', 'w') as outfile:
	    outfile.writelines(json_diff_dataset)
	return json_diff_dataset

if __name__ == '__main__':
	main()
