import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App.js';

// import Card from './Card';
// class CardList extends React.Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Card
//                     title="Зимние ботинки"
//                     price={99}
//                     description="Такие только у нас"
//                     imgLink="https://shop/winter_boots.jpg"
//                 />
//                 <Card
//                     title="Пляжные тапки"
//                     price={23}
//                     description="Надеюсь, пригодятся"
//                     imgLink="https://shop/slippers.jpg"
//                 />
//                 <Card
//                     title="Праздничные туфли"
//                     price={85}
//                     description="Теперь и в чёрном цвете"
//                     imgLink="https://shop/shoes.jpg"
//                 />
//             </React.Fragment>
//         );
//     }
// }

// export default CardList;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
