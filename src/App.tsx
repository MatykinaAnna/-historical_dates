import './App.css';

import EventComponent from './components/event/event';
import { interfaceEventComponent } from './shared/interface';
import ComponentSwiper from './components/swiper/Swiper';
import HistoricalСircle from './components/historicalСircle/historicalСircle'

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
      <div className='app_body'>
        <div className='wrapper'>
          <HistoricalСircle {...{
            height: 600,
            width: 600,
            cx: 300,
            cy: 300,
            r: 200,
            historyEvents: [
              {id: 1, name: 'Наука'},
              {id: 2, name: 'История'},
              {id: 3, name: 'Культура'},
              {id: 4, name: 'Война'},
              {id: 5, name: 'Культура'},
              {id: 6, name: 'Культура'},
            ]
          }} />
        </div>
      </div>
      <ComponentSwiper {...{array: array}} />
    </div>
  );
}

export default App;
