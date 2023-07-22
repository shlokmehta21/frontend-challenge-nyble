T = $(TAG)
REGISTRY = registry.gitlab.com/fincentify/registry

dev:
  yarn install
up:
	yarn run web:up

clean : 
	-rm -rf node_modules
	-rm config/secrets.sh
	-docker container rm fig_web
	-docker volume rm web_node_modules 