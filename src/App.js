import logo from './uploads/banniere2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className='infos'>
        <h1>Refuge ouvert tous les jours de 14h à 18h sauf le dimanche !</h1>
        <h2>Découvrez les actualités du moment</h2>
        <button>Juste ici</button>
      </section>
      <footer className='home_footer'></footer>
    </div>
  );
}

export default App;
