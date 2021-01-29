# NODE REST API

## Purpose
Node Rest basic scaffold.

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
