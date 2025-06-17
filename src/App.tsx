import './App.css';

import EventComponent from './components/event/event';
import { interfaceEventComponent } from './shared/interface';
import ComponentSwiper from './components/swiper/Swiper';

function App() {

  const array: interfaceEventComponent[] = [
    {
      year: '2015',
      description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
    },
    {
      year: '2016',
      description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
    },
    {
      year: '2017',
      description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
    },
    {
      year: '2018',
      description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
    }
  ]

  return (
    <div className="App">
      <ComponentSwiper {...{array: array}} />
    </div>
  );
}

export default App;
