import React from 'react';
import Points from '../Elements/Points';
// import Br from '../Elements/Br';

const Point1 = <span>Расчетный счет</span>;
const Point2 = <span>Перевод на карту</span>;
const Point3 = <span>Электронные кошельки</span>;

export default () => (
  <Points
    name="Оплата"
    point1={Point1}
    point2={Point2}
    point3={Point3}
  />
);
