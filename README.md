# Next.js Project

## Описание

Это проект на Next.js, настроенный для разработки и продакшн-сборки с Docker.

## Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/AntonAAMain/slider.git
cd slider
```

2. Установите зависимости:

```bash
npm install
# или
yarn
```

## Запуск в режиме разработки

```bash
npm run dev
# или
yarn dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Продакшн сборка

```bash
npm run build
npm start
```

## Docker

### Сборка образа

```bash
docker build -t nextjs-app .
```

### Запуск контейнера

```bash
docker run -p 3000:3000 nextjs-app
```

## Скрипты

- `dev` — запуск в режиме разработки
- `build` — сборка продакшн версии
- `start` — запуск продакшн сервера

## Требования

- Node.js 18+
- npm или yarn
- Docker (для контейнеризации)
