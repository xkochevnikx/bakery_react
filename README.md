# Страница хлебопекарни
Сервис призван познакомить посетителя с концепцией пекарни, основным ассортиментом и даёт возможность сделать заказ. <br/>
Доступ к CRUD функционалу товаров доступен только администратору после регистрации. <br/>


## О приложении
### Технологии
- React
- React Router DOM
- Json-server
- Axios
- Firebase Authentication

### Интерфейс
Веб-приложение, c оптимизацией для мобильных устройств

### Функционал
- В хедере находиться навигация по страницам и бургер меню. <br/>
- На странице товаров можно озкомиться с краткой информацией о них. Реализована фильтрация по категориям, пагинация и поиск. При нажатии на подробное описание мы переходим на страницу товара и открывается доступ к добавлению его в корзину. <br/>
- В корзине покупателю доступен перечень наименований, их итоговая стоимость а так же возможность редактировать их колличество. <br/>
- В админ панели после авторизации администратора login: xkochevnikx@protonmail.com, password: 1234567 открывается доступ к CRUD функционалу товаров.


### Демонстрация интерфейса

![Alt-описание изображения](/путь/к/изображению)

### Установка
Для установки и запуска проекта, необходим [NodeJS](https://nodejs.org) v8+.

### Установка зависимостей
Для установки зависимостей, выполните команду:
```sh
$ npm i
```

### Запуск Development сервера
Чтобы запустить сервер для разработки, выполните команду:
```sh
npm start
```

### Запуск сервера
Чтобы выполнить запуск json-server, выполните команду: 
```sh
json-server -w db.json -p 8000
```


## Команда проекта

- [Святослав Деев](https://github.com/xkochevnikx) — Front-End Engineer


