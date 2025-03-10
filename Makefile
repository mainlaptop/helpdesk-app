git:
	git add .
	git commit -m "update"
	git push origin main

run:
	json-server --watch ./_data/db.json --port 4000
