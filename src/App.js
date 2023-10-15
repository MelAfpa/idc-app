import logo from './uploads/banniere2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="#">Qui sommes nous ?</a>
        <a href="#">La Pension</a>
        <a href="#">Adopter</a>
        <a href="#">Parrainer</a>
        <a href="#">Bénévolat</a>
        <a href="#">Faire un don</a>
      </header>

      <section className='App-infos'>
        <h1>Refuge ouvert tous les jours de 14h à 18h sauf le dimanche !</h1>
        <a href="#"> Découvrez les actualités du moment</a>
        <p className='address'>Refuge Canin Un Cœur Sans Toit, Chemin du Clos Melon, Lieu dit « Maffron », 49700 Doué la Fontaine 
        </p>
        <p className='tel'>Téléphone : 06 15 29 09 56</p>
      </section>

      <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
