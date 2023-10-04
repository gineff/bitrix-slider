# Case Lab WEB

### Bitrix Slider

Slider для Bitrix компонентов

##### Использование

__npm install__ установка зависимостей
__npm run build__ сборка 

Скопировать файлы из папки /dist в папку шаблона компонента
Подключить библиотеку __React__ и файлы пакета в шаблоне __template.php__

$this->addExternalJS("https://unpkg.com/react@18/umd/react.development.js");
$this->addExternalJS("https://unpkg.com/react-dom@18/umd/react-dom.development.js");
$this->addExternalJS("/local/components/gineff/news.list/templates/slider/slider.js");
$this->addExternalCSS("/local/components/gineff/news.list/templates/slider/slider.css");

Добавить класс slide в элементы слайдера
Обернуть слайды div элементом .bitrix-slider

[Пример использования](https://github.com/gineff/bitrix-news.list-template)
