// 1. импорт сторонних файлов в компонент
import './App.css';

// 2. сам компонент - функция, возвращающая шаблон верстки
function App() {
  return (
    <div className="App">
      <header>
        <h1>Hi! I'm Alex</h1>
      </header>
      
      <main>
        <div class="about_me">
          <div>I'm Junior fullstack developer</div>
          <img src="./media/meme1713282789478.jpeg" alt="my photo" />
        </div>
      </main>
     
     <footer>
      <div class="footer_contacts">
        <h2>Contacts</h2>
        <div class="tel">
          <a href="tel:+4915116563486">
            <img src="./media/tel.ico" alt="tel" /></a>
            <div>+49 1511 656 34 86</div>
        </div>
        <div class="email">
          <a href="mailto:mrzygomatic@gmail.com">
            <img src="./media/mail.png" alt="email" /></a>
            <div>mrzygomatic@gmail.com</div>
        </div>
      </div>
     </footer>
    </div>
  );
}

// экспорт компонента для связи с другими компонентами
export default App;