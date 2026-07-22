# Backend — Yerevan Web Studio

Node.js + Express + PostgreSQL. Принимает все 5 форм с сайта (агентство,
ресторан, барбершоп, автосервис, недвижимость) и сохраняет их в одну
таблицу `submissions`. Есть встроенная админка `/admin` для просмотра
заявок и выгрузки в CSV — база не нужна, всё через браузер.

## Локальный запуск (для проверки)

```bash
cd backend
npm install
cp .env.example .env
# пропиши DATABASE_URL от своей Postgres (Render, Supabase, Neon — любая)
npm start
```

Сервер поднимется на `http://localhost:4000`. Таблица в БД создаётся
автоматически при первом запуске — ничего вручную накатывать не надо.

Проверка: `curl http://localhost:4000/api/health` → `{"ok":true}`

## Деплой на Render (чтобы бэкенд работал всегда, без твоего компьютера)

### 1. База данных
1. В Render: **New → PostgreSQL**. Любое имя, регион — Frankfurt (ближе к Армении).
2. После создания скопируй **Internal Database URL** (если backend тоже
   будет на Render) — так быстрее и бесплатный трафик между сервисами.

### 2. Backend
1. Залей проект (весь репозиторий, вместе с папкой `backend`) на GitHub.
2. В Render: **New → Web Service**, подключи репозиторий.
3. **Root Directory:** `backend`
4. **Build Command:** `npm install`
5. **Start Command:** `npm start`
6. Environment → добавь переменные:
   - `DATABASE_URL` — тот самый Internal Database URL из шага 1
   - `ADMIN_KEY` — придумай длинный пароль для своей админки
   - `FRONTEND_ORIGIN` — домен, где будет жить фронтенд
     (например `https://yerevanwebstudio.com`, через запятую можно
     несколько)
7. Deploy. После билда получишь адрес вида
   `https://yerevan-web-studio-api.onrender.com`

### 3. Чтобы бэкенд не "засыпал"
Бесплатный план Render усыпляет сервис после 15 минут без запросов —
первый запрос после сна ждёт ~30-50 секунд. Если это неприемлемо для
живого сайта, два варианта:

- Перейти на платный план **Starter** (~$7/мес) — сервис всегда активен.
- Остаться на free-плане и настроить "пинг" каждые 10 минут через
  бесплатный [UptimeRobot](https://uptimerobot.com) на
  `https://твой-backend.onrender.com/api/health` — не даёт сервису уснуть.

Для сайта, который приносит заявки бизнесу, я рекомендую платный план —
дешевле потерянного клиента, который не дождался ответа сайта.

### 4. Подключить фронтенд
В настройках хостинга фронтенда (Vercel/Netlify/Render Static Site)
добавь переменную окружения:

```
VITE_API_URL=https://yerevan-web-studio-api.onrender.com
```

и пересобери фронтенд. Всё, формы начнут реально отправлять данные.

## Как смотреть заявки

Открой `https://твой-backend.onrender.com/admin`, введи `ADMIN_KEY`,
который ты задал в переменных окружения. Увидишь все заявки со всех
5 форм сайта, с фильтром по типу формы и кнопкой экспорта в CSV.

## API

- `POST /api/submissions` — публичный, принимает форму
- `GET /api/submissions` — требует заголовок `x-admin-key`
- `DELETE /api/submissions/:id` — требует `x-admin-key`
- `GET /api/submissions/export.csv` — требует `x-admin-key`
- `GET /api/health` — проверка живости
