# API NODE

## Purpose

1. Setup OAuth endpoints that will handle the Google OAuth flow and create a JWT for your application and further authentication on your REST endpoints.
2. Create an REST endpoint to add an album to a list stored in a persistent storage of your choice.
3. Create an REST endpoint that returns the list of your albums.
4. Protect the endpoints with an auth middleware which uses the JWT for authentication.

## Requirements

- Node 12.x
- [Google console dev credentials](https://console.developers.google.com/)
- Activate Google+ API
- Use the Google account for test

## Run Local Server

- Copy .env.example to .env and fill it

- Run

```bash
npm install
npm start
```

- Go to http://localhost:3000/login

- Copy the JWT

- POST http://localhost:3000/album

Header `x-access-token`: JWT

```json
{
  "artist": "Motörhead",
  "title": "Ace of Spades"
}
```

- GET http://localhost:3000/albums

Logged by browser or Header `x-access-token`: JWT

- Go to http://localhost:3000/logout

## How to dev

- Copy .env.example to .env and fill it

- Run

```bash
npm install
npm run dev
```

- Run tests

```bash
npm test
```

- Run tests and watch reload

```bash
npm test:watch
```

## TODO

- [x] Tests foundation
- [ ] Database: control initalization on main code
- [ ] Tests: API
- [ ] Lint
- [ ] Code formatter
- [ ] CI: add Github actions for each branch commit
- [ ] Dockerize app
- [ ] Database: move to PostgreSQL
- [ ] Tests: unity
- [ ] Center HTTP responses and codes
- [ ] Handle routes inside other domains
- [ ] Detach views (React) from logic
- [ ] Observability: Sentry
- [ ] Observability: logs
- [ ] Observability: APM
- [ ] Tests: stress
