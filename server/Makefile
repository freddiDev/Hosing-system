ifneq (,$(wildcard ./.env))
	include .env
	export
	ENV_FILE_PARAM = --env-file .env
endif

build:
	sudo docker compose up --build 

up:
	sudo docker compose up

down:
	sudo docker compose down

down-V:
	sudo docker compose down -v
