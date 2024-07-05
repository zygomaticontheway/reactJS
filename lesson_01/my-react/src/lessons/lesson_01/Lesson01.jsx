// импортируем стили из соседнего файла
import './lesson01.css'

export default function Lesson01() {

  // описание всего приложения в глобальном объекте document
  // это и есть DOM (Document Object Model)
  // console.dir(document);

  // создаем переменную со значением в теле функции до return
  const heading = 'Урок 01'
  const classContainer = 'lesson1-container'


  return (
    <div className={classContainer}>
      <h4>{heading}</h4>
      <p>Особенности компонента:</p>
      <ul>
        <li>Имеет расширение JSX</li>
        <li>Называется с большой буквы</li>
        <li>Компонент это функция</li>
        <li>Возвращает верстку</li>
        <li>Использует import / export</li>
        <li>Не отобразится на странице, если не импортирован</li>
      </ul>
    </div>
  );
}
