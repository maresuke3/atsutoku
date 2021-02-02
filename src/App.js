//modules
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//components
import { Header } from './component/Header.js';
import { ShopCard } from './component/ShopCard.js';
import { Uniqlo } from './component/Uniqlo.js';
import { UniqloMen } from './component/UniqloMen.js';
import { UniqloWomen } from './component/UniqloWomen.js';
import { Gu } from './component/Gu.js';
import { GuMen } from './component/GuMen.js';
import { GuWomen } from './component/GuWomen.js';
import { Earth } from './component/Earth.js';
//static assets
import './component/css/reset.css';
import './App.css';
import uniqlo from './component/img/uniqlo.png';
import earth from './component/img/earth.jpg';
import gu from './component/img/gu.png';

//shop data
const dataArr = [
  {
    name: 'ユニクロ 野々市店',
    href: './uniqlo',
    src: uniqlo,
    lat: 36.536616,
    lang: 136.597825,
    distance: '1.2 km', //表示テスト用の値
  },
  {
    name: 'earth 金沢フォーラス店',
    href: './earth',
    src: earth,
    lat: 36.579148,
    lng: 136.649754,
    distance: '6.7 km', //表示テスト用の値
  },
  {
    name: 'GU イオンタウン金沢示野店',
    href: './gu',
    src: gu,
    lat: 36.581031,
    lng: 136.616088,
    distance: '8.3 km', //表示テスト用の値
  },
];

//App component
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/uniqlo"
          render={() => <Uniqlo men={UniqloMen} women={UniqloWomen} />}
        />
        <Route path="/earth" exact component={Earth} />
        <Route path="/gu" render={() => <Gu men={GuMen} women={GuWomen} />} />
      </Switch>
    </Router>
  );
};

//Home component
const Home = () => {
  const [data, setData] = useState(dataArr);

  return (
    <div className="inner">
      <div className="container">
        {data.map((data) => (
          <ShopCard
            key={data.name}
            name={data.name}
            link={data.href}
            img={data.src}
            distance={data.distance}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
