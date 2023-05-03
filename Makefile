up-postgres-daemon:
	docker-compose -f docker-compose.yml up -d
up-postgres:
	docker-compose -f docker-compose.yml up

down-postgres:
	docker-compose -f docker-compose.yml down
logs-postgres:
	docker-compose -f docker-compose.yml logs