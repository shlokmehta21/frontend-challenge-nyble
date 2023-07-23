dev:
	yarn install

up:
	yarn start

clean: 
	-rm -rf node_modules
	-rm config/secrets.sh
	-docker container rm fig_web
	-docker volume rm web_node_modules 