# GoNet Test Frontend

[![Typescript badge](https://badges.aleen42.com/src/typescript.svg)](#)
[![Docker badge](https://badges.aleen42.com/src/docker.svg)](#) [![Generic badge](https://img.shields.io/badge/build-passing-<COLOR>.svg)](#) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](#)

This is the API project for Sherpa Broker application

## Initialization

Create an `.env` file and add 4004 port and apollo server URL

```
PORT=4004
REACT_APP_APOLLO_SERVER_URL=http://localhost:4000/graphql
```

## Local Development

Make sure Docker is running and run:

```bash
$ docker-compose up --build 
```

## ToDo

- Add Tests

## License
[GNU-GPL](https://www.gnu.org/licenses/gpl-3.0.html)