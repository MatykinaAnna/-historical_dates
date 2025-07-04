import './App.css';

import EventComponent from './components/event/event';
import { interfaceEventComponent } from './shared/interface';
import ComponentSwiper from './components/swiper/Swiper';
import HistoricalСircle from './components/historicalСircle/historicalСircle'
import vector from './shared/icons/vector.png'
import { useEffect, useState } from 'react';

function App() {

  const array1: {
    id: number,
    bg: string
    events: interfaceEventComponent[]
  }[] = [
    {
      id: 1,
      bg: '1',
      events : [
        {
          year: '1769',
          description: '15 августа: Наполеон Бонапарт родился в Аяччо, Корсика'
        },
        {
          year: '1785',
          description: '28 октября: Наполеон заканчивает Военную школу в звании младшего лейтенанта артиллерии. 3 ноября: находится в Валенсии'
        },
        {
          year: '1793',
          description: '22 декабря: За его блестящее тактическое командование (хотя он и был подчинённым офицером, многие приписывали победу ему лично) во время осады Тулона Наполеон получает новое звание бригадного генерала'
        },
        {
          year: '1794',
          description: '9-20 августа: Наполеон заключён в тюрьму по подозрению в якобинстве и поддержке Робеспьера'
        },
      ]
    },
    {
      id: 2,
      bg: '',
      events : [
        {
          year: '1795',
          description: 'Октябрь: Вандемьерский мятеж, подавленный Наполеоном. Баррас помогает Наполеону добиться повышения до командующего войсками тыла. 2 ноября: создание Директории'
        },
        {
          year: '1796',
          description: '2 марта: Наполеон получает командование французской армией в Италии. 11 марта: начинается итальянская кампания против Австрии. 0 мая: Наполеон побеждает в битве при Лоди. 17 ноября: Наполеон побеждает в битве при Арколе.'
        },
        {
          year: '1797',
          description: '14 января: Наполеон побеждает в битве при Риволи. 17 октября: Кампо-Формийский мир с Австрией. 5 декабря: Наполеон возвращается в Париж героем'
        },
        {
          year: '1798',
          description: '19 мая: Наполеон начинает свою египетскую кампанию с армией в 38 тыс'
        },
      ]
    },
    {
      id: 3,
      bg: '',
      events : [
        {
          year: '1798',
          description: '19 мая: Наполеон начинает свою египетскую кампанию с армией в 38 тыс'
        },
        {
          year: '1798 2 июля',
          description: 'В заливе Марабу в ночь на 2 июля французы начали высадку, и в тот же день Александрия, атакованная дивизиями Клебера, Бона и Мену, была занята после незначительного сопротивления. Французский флот под руководством адмирала Брюейса остался около Александри'
        },
        {
          year: '1798 с 10 по 12 июля',
          description: 'С 10 по 12 июля французские войска (всего около 20 тысяч человек) находились у Романие. 13 июля они атаковали и разбили мамелюков у Шубрахита (Шебрейса). В этом сражении приняла участие накануне присоединившаяся к французам флотилия Перре. '
        },
        {
          year: '1798 21 июля',
          description: 'Французская армия, выступившая 21 июля в 2 часа утра, после 7-часового перехода атаковала противника. Мамлюки потерпели полное поражение. Раненый Мурад-бей только с 3 тысячами мамлюков бежал в верхний Египет, а Ибрагим с 1200 человек через Каир направился в Сирию, захватив египетского пашу Абу-бекра. Арабы рассеялись по пустыне'
        },
        {
          year: '1798 24 июля',
          description: 'Падение Каира'
        },
        {
          year: '1798 3 августа',
          description: 'Британский флот под командованием адмирала Нельсона уничтожает французский флот в битве при Абукире. Армия Наполеона отрезана от снабжения и связи'
        },
      ]
    },
    {
      id: 4,
      bg: '',
      events : [
        {
          year: '1799',
          description: '23 августа: Получив известие о беспорядках во Франции, Наполеон отказывается от командования в Египте и возвращается в Париж'
        },
        {
          year: '1799 9-10 ноября',
          description: 'В ходе переворота 18 брюмера Наполеон свергает Директорию'
        },
        {
          year: '1799 12 декабря',
          description: 'Наполеон избран первым консулом'
        },
        {
          year: '1801',
          description: '9 февраля: Подписание с Австрией Люневильского мира. 6 июля: Сражение в заливе Альхесирас. 15 июля: Конкордат 1801 года.'
        },
        {
          year: '1802',
          description: '2 августа: принята новая конституция, плебисцит подтверждает, что Наполеон является пожизненным первым консулом.'
        },
      ]
    }
  ]

  // const array: interfaceEventComponent[] = [
  //   {
  //     year: '2015',
  //     description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  //   },
  //   {
  //     year: '2016',
  //     description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
  //   },
  //   {
  //     year: '2017',
  //     description: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды'
  //   },
  //   {
  //     year: '2018',
  //     description: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11'
  //   }
  // ]

  const [array, setArray] = useState(array1[0].events)

  const toYear = (id: number) => {
    console.log(id)
    setArray(array1[id].events)
  }

  useEffect(()=>{
    //@ts-ignore
    document.getElementsByTagName('body')[0].classList.add(`bg${1}`)
  },[])

  return (
    <div className="App">
      <div id="bgBody"></div>
      <div className='frame'>
          <div></div>
          <div className='header'>
            <img src={vector} alt="vector" />
            <div>Исторические даты</div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>

      <div className='app_body'>
        <div className='wrapper'>
          <HistoricalСircle {...{
            height: 500,
            width: 600,
            cx: 300,
            cy: 250,
            r: 220,
            toYear: toYear,
            historyEvents: [
              {id: 1, name: 'Ранние года', yearStart: '1769', yearEnd: '1795'},
              {id: 2, name: 'Повышение', yearStart: '1795', yearEnd: '1798'},
              {id: 3, name: 'Египет', yearStart: '1798', yearEnd: '1798'},
              {id: 4, name: 'Консульство', yearStart: '1799', yearEnd: '1805'}
            ],
          }} />
        </div>
      </div>
      <ComponentSwiper {...{array: array}} />
    </div>
  );
}

export default App;
