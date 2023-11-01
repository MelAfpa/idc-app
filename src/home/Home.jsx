
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

import Header from '../header/Header';
import Footer from '../footer/Footer';

export const Home = function() {
    const markers = [
      {
        geocode: [47.1921, -0.2494],
        Popup: "Refuge canin Un Coeur Sans Toit"
      }
    ];
  
    const customIcon = new Icon({
      iconUrl: require("../uploads/shelterIcon.png"),
      iconSize: [38, 38], // Size of the icon
      // iconAnchor: [45, 45],
    });
  
  

   return (
    <div className="App">
      <Header></Header>

      <section className='App-infos'>
        <h1>Refuge ouvert tous les jours de 14h à 18h sauf le dimanche !</h1>
        <a href="#"> Découvrez les actualités du moment</a>
        <p className='address'>Refuge Canin Un Cœur Sans Toit, Chemin du Clos Melon, Lieu dit « Maffron », 49700 Doué la Fontaine 
        </p>
        <p className='tel'>Téléphone : 06 15 29 09 56</p>

        <MapContainer className='map' center={[47.1921, -0.2494]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         {markers.map(marker => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.Popup}</Popup>
          </Marker>
         ))}
        </MapContainer>
      </section>
{/* 
      <section className='map'>
        
        
      </section> */}

      <Footer></Footer>
      
    </div>
   ) 
}