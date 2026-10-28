# Spotusfy: Spotify Party

Group listening sessions for Spotify. One person starts a session, friends join by QR code or invite link, and everyone searches for songs and adds them to one shared queue.

Senior capstone project, Spring 2020.

> Built by hand in 2020, before AI coding tools. Left as the team wrote it. Spotify's API has changed since then, so the login flow may need updating to run today.

## Features

- Log in with Spotify
- Create a session, or join one with a QR code or invite link
- Search Spotify's catalog and add tracks to a shared queue
- Live session page showing what's playing and what's next
- Leave a session at any time

## Tech

- **Nuxt.js** (Vue 2) with Vuex and BootstrapVue
- **Spotify Web API** (`spotify-web-api-js` / `spotify-web-api-node`)
- **Firebase** for shared session and queue state
- **Docker** / docker-compose for the dev environment

## Project layout

```
pages/index.vue           landing and Spotify login
pages/callback.vue        Spotify auth callback
pages/home/               start or join a session
pages/session/_id.vue     the live session
components/SessionButtons invite (QR), join, search, leave
model/Session.js          session model
model/Queue.js            shared queue model
plugins/firebase.js       Firebase setup
```

## Team

Terry Phillips ([@Blackkingsman](https://github.com/Blackkingsman)), Evan Bigbie, Keith Hand, Logan Thurm, Griffin Jones, Trung Le, Upasna Dadabhai

## Dev setup

You need Docker with docker-compose.

```bash
docker-compose build     # build the local image
docker-compose up -d     # start; the app is served on port 80
```

Useful commands:

- `docker-compose up --build -d`: rebuild (reinstalling dependencies if needed) and start in the background
- `docker-compose down`: stop the environment
- `docker-compose exec web sh`: open a shell in the app container
- `docker-compose exec web npm install`: install dependencies from package.json
- `docker-compose logs -f --tail 20 web`: follow the app logs
- `docker-compose run web npm run lint-fix`: run ESLint with fixes

Without Docker: `npm install`, then `npm run dev`.

See the [Nuxt.js docs](https://nuxtjs.org) for how the framework works.
