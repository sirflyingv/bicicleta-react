import bikePic1 from './img/bicicleta1_details.png';
import bikePic2 from './img/bicicleta2_details.png';
import './App.css';
import Header from './components/navigation/header';
import Footer from './components/navigation/footer';
import BikeDetails from './components/content/bikeDetails/bikeDetails';

const bike1 = {
  name: 'Nimbus Stark',
  desc: 'A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade. ',
  pic: bikePic1,
  price: '4.999',
  features: {
    motor: 'Motor Elétrico',
    material: 'Fibra de Carbono',
    speed: '40km/h',
    nav: 'Rastreador',
  },
};

const bike2 = {
  name: 'Magic Migth',
  desc: 'A Magic Migth é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.',
  pic: bikePic2,
  price: '2.499',
  features: {
    motor: 'Motor Elétrico',
    material: 'Fibra de Carbono',
    speed: '40km/h',
    nav: 'Rastreador',
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <BikeDetails bike={bike1} />
      <BikeDetails bike={bike2} />

      <Footer />
    </div>
  );
}

export default App;
