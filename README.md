# parcel-react-sample

react を学習する時の最小構成（学習コストが低い）のセット。sass や scss を使わずに postcss+css modules で十分な気がしてる。

- Docker, docker-compose
- TypeScript
- Parcel
- TSLint + Prettir
- react-router
- unstated-next
- css modules
- postcss

## run

```
~$ docker build -t parcel-react-sample .
~$ docker-compose up
~$ docker-compose run --service-port node bash
~# npm run start
```

access to `http://localhost:1234`
