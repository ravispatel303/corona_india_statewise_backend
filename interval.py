import files as f
from apscheduler.schedulers.blocking import BlockingScheduler

def job():
	# runs the program after some interval
	def some_job():
	    f.main()
	    print("Decorated job")

	scheduler = BlockingScheduler()
	scheduler.add_job(some_job, 'interval', seconds=20)
	scheduler.start()