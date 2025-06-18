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
            height: 500,
            width: 600,
            cx: 300,
            cy: 250,
            r: 250,
            historyEvents: [
              {id: 1, name: 'Наука', yearStart: '1000', yearEnd: '1050'},
              {id: 2, name: 'История', yearStart: '1050', yearEnd: '1100'},
              {id: 3, name: 'Культура', yearStart: '1150', yearEnd: '1200'},
              {id: 4, name: 'Война', yearStart: '1250', yearEnd: '1300'},
              {id: 5, name: 'Мир', yearStart: '1350', yearEnd: '1400'},
              {id: 6, name: 'Религия', yearStart: '1450', yearEnd: '1500'},
            ]
          }} />
        </div>
      </div>
      <ComponentSwiper {...{array: array}} />
    </div>
  );
}

export default App;
