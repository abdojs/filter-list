/* eslint-disable array-callback-return */

import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import InputFilter from './components/InputFilter/InputFilter';

function App() {

  const [filteName, filteNameCards] = useState('')
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'kareem',
      age: 31,
      adrress: 'hadyk el aharm',
      phone: '01010987123',
      type: 'boy',
    },
    {
      id: 2,
      name: 'farah',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
      type: 'girl',
    },
    {
      id: 3,
      name: 'ahmed',
      age: 24,
      adrress: 'hadyk el aharm',
      phone: '01010987234',
      type: 'boy',
    },
    {
      id: 4,
      name: 'mariam',
      age: 20,
      adrress: 'fayesl',
      phone: '01010932123',
      type: 'girl',
    },
  ])

  //
  // delete card from array cards list with id number
  //
  function deleteCard(event, id) {
    // const deleteOberation = cards.filter((el, idx) => idx !== id);
    // setCards(deleteOberation);
    setCards((prevState) => {
      return prevState.filter((el) => el.id !== id);
    });
  }

  //
  // update state filterCard
  //
  const filterCard = (nameCard) => filteNameCards(nameCard)

  //
  // search name card form list cards
  //
  const renderCards = () => filteName.length === 0 ? cards : cards.filter(({ name }) => name.includes(filteName));

  return (
    <div className="App">
      <Header />
      <div className='container-filter-cards'>
        <div className='content-filter-input'>
          <InputFilter filterCard={filterCard} />
        </div>
        <div className='content-cards'>
          <Cards cards={renderCards()} deleteCard={deleteCard} />
        </div>
      </div>
    </div>
  );
}

export default App;
