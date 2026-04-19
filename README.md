# Biology Space School

MVP онлайн-школы по биологии с космической геймификацией: React + Tailwind на фронтенде, Node.js + Express + MongoDB на бэкенде.

## One-Click Deploy

После того как ты зальёшь проект в публичный GitHub-репозиторий, кнопка ниже развернёт его на Render в пару кликов.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/YOUR_GITHUB_USERNAME/biology-space-school)

## Что есть в MVP

- регистрация и логин через API
- дашборд с уровнем, XP и текущей миссией
- карта обучения в стиле планет и уровней
- экран урока с теорией, тестом и начислением XP
- достижения и ежедневные задания
- профиль пользователя

## Структура

- `client` — React + Tailwind
- `server` — Express API + MongoDB-модели
- `render.yaml` — one-click деплой на Render

## Запуск

```bash
cd /data/data/com.termux/files/home/biology-space-school
npm install
cp server/.env.example server/.env
npm run dev:server
npm run dev:client
```

## Переменные окружения

`server/.env`

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/biology-space-school
JWT_SECRET=super-secret-space-key
CLIENT_URL=http://localhost:5173
```

Если MongoDB недоступна, сервер использует встроенные seed-данные для демо-режима.

## Деплой на Render

1. Создай публичный репозиторий на GitHub и запушь туда эту папку.
2. В `README.md` замени `YOUR_GITHUB_USERNAME` на свой GitHub username.
3. Нажми кнопку `Deploy to Render`.
4. Render создаст два сервиса:
   - `biology-space-api` — backend на Express
   - `biology-space-web` — static frontend на React
5. После деплоя открой URL фронтенда и любуйся.

В этом MVP backend умеет работать без MongoDB и автоматически переключается в demo-mode, если `MONGODB_URI` не задан или база недоступна. Для persistent данных позже можно подключить MongoDB Atlas.

Примечание: в one-click варианте frontend по умолчанию обращается к `https://biology-space-api.onrender.com/api`. Это рабочее предположение, потому что Render выдаёт сервисам публичный `onrender.com` URL, включающий имя сервиса. Если Render назначит другой subdomain из-за конфликта имён, просто добавь переменную `VITE_API_URL` в настройках static site.
