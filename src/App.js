import logo from './uploads/banniere.png';
import './App.css';
// import './home/Home';
import { FaFacebook, FaCommentAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="App.js" className='home'><img src={logo} href="App.js" className="App-logo" alt="logo" /></a>
        <a href="#" className='team'>Qui sommes nous ?</a>
        <a href="#" className='pension'>La Pension</a>
        <a href="#" className='adoption'>Adopter</a>
        <a href="#" className='sponsor'>Parrainer</a>
        <a href="#" className='volunteer'>Bénévolat</a>
        <a href="#" className='donation'>Faire un don</a>
      </header>

      <section className='App-infos'>
        <h1>Refuge ouvert tous les jours de 14h à 18h sauf le dimanche !</h1>
        <a href="#"> Découvrez les actualités du moment</a>
        <p className='address'>Refuge Canin Un Cœur Sans Toit, Chemin du Clos Melon, Lieu dit « Maffron », 49700 Doué la Fontaine 
        </p>
        <p className='tel'>Téléphone : 06 15 29 09 56</p>
      </section>

      <section className='map'>
        <MapContainer center={[47.192, -0.249]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={[47.192, -0.249]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> */}
        </MapContainer>
        
      </section>

      <footer className='App-footer'>
        <a href="#" className='fb'><FaFacebook/></a>
        <a href="#" className='contact'><FaCommentAlt/></a>
        <a href="#" className='mentions'>Mentions légales</a>
      </footer>
    </div>
  );
}

export default App;
