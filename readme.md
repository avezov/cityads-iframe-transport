## Установка
```
<script src="https://unpkg.com/cityads-iframe-transport/dist/client.js"></script>
```
или
``` 
npm install cityads-iframe-transport
```

## Инициализация
```
var CA = new CATransport()
```

## Отправка событий

### Ресайз окна
Необходимо выполнять для корректировки высоты iframe при изменении содержания страницы
```
CA.resize()
```

### Установка заголовка страницы
```
CA.sendEvent('setTitle', 'Новый заголвок')
```

### Смена url 
```
CA.sendEvent('setPath', '/new/path')
```

## Приём событий

### Первоначальное состояние
```
CA.on('initialData', (data) => {
  console.log('Некие стартовые настроечки', data)
})
```

### Смена языка интерфейса
```
CA.on('changeLanguage', (lang) => {
  console.log('Пользователь сменил язык', lang)
})
```

### Смена URL
```
CA.on('changePathname', (path) => {
  console.log('Сменился url', path)
})
```