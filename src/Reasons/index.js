import React from 'react';
import Points from '../Elements/Points';
import Br from '../Elements/Br';

const Point1 = <span>Вам не доверяют и<Br /> отказываются от покупки</span>;
const Point2 = <span>На сайте <Br />сложно купить</span>;
const Point3 = <span>Ваш сайт не находят <Br />в поисковой выдаче</span>;

export default () => (
  <Points
    subheader="Каждый день вы теряете клиентов, если:"
    name="Зачем"
    point1={Point1}
    point2={Point2}
    point3={Point3}
  />
);
