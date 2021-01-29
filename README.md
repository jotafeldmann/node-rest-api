# Node REST API

## Purpose

REST API scaffold for Node.

## Requirements

- [Node 12.x](https://nodejs.org/en/download/)
- [Google console dev credentials](https://console.developers.google.com/)
- Activate Google+ API
- Use the Google account for test

## API

- [Express](https://expressjs.com/)

## Setup

Copy the `.env.example` to `.env` (NEVER COMMIT the .env file or sensitive data)

```bash
make env/file
```

Local

```bash
make install
```

## How to run

Local

```bash
make
```

## How to dev

- Install

```bash
make install/dev
```

- Run as developer mode (watch and reload)

We use [Nodemon](https://nodemon.io/) for this.

```bash
make dev
```

- Run tests (watch and reload)

```bash
make tests/watch
```

- Run tests once

```bash
make tests
```

Please check the [Makefile](./Makefile) for more options.

## Run Local Server

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
