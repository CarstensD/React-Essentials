import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescription = ['Array', 'Items', 'Davin'];

function genRandomItem(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescription[genRandomItem(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>REACT ESSENTIALS</h1>
      <h2>BY DAVIN CARSTENS</h2>
      <p>Concepts needed to know to build any application of your choice!</p>
    </header>
  );
}
