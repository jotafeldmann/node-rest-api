default:
	make run

dev:
	npm run dev

install:
	npm i --production

.PHONY: install/dev
install/dev:
	npm i

.PHONY: env/file
env/file:
	cp .env.example .env

run:
	npm start

.PHONY: tests
tests:
	npm test


.PHONY: test/watch
    npm run test:watch