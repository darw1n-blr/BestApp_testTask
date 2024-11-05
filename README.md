Чат-приложение на NestJS
========================

Это приложение реализует функциональность чата с использованием NestJS, PostgreSQL и Sequelize.

Установка
---------

1.  Склонируйте репозиторий:

        git clone <URL_РЕПОЗИТОРИЯ>
        cd <ИМЯ_ПАПКИ_С_ПРОЕКТОМ>

2.  Установите зависимости:

        npm install

3.  Настройте переменные окружения. Создайте файл `.env` в корне проекта с содержимым:

        POSTGRES_HOST=db
        POSTGRES_PORT=5432
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=123
        POSTGRES_DB=best-app-test-task
        PORT=9000


Запуск
------

1.  Убедитесь, что у вас установлен Docker и Docker Compose.
2.  Запустите приложение и базу данных с помощью Docker Compose:

        docker-compose up --build

3.  Приложение будет доступно по адресу `http://localhost:9000`.

Примеры тестирования с помощью curl
-----------------------------------

### Добавление пользователя

    curl -X POST http://localhost:9000/users/add \
    -H "Content-Type: application/json" \
    -d '{"username": "user1"}'

### Добавление чата

    curl -X POST http://localhost:9000/chats/add \
    -H "Content-Type: application/json" \
    -d '{"name": "Chat 1", "userIds": [1, 2]}'

### Добавление сообщения

    curl -X POST http://localhost:9000/messages/add \
    -H "Content-Type: application/json" \
    -d '{"chatId": 1, "userId": 1, "text": "Hello, World!"}'

### Получение сообщений чата

    curl -X GET http://localhost:9000/messages/chat/1