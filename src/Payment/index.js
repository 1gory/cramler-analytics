import React from 'react';
import Points from '../Elements/Points';
import img1 from '../icons/payments/bank.svg';
import img2 from '../icons/payments/sber.svg';
import img3 from '../icons/payments/cash.svg';

const Point1 = <span>Расчетный счет</span>;
const Point2 = <span>Перевод на карту</span>;
const Point3 = <span>Электронные кошельки</span>;

export default () => (
  <Points
    name="Оплата"
    point1={Point1}
    point2={Point2}
    point3={Point3}
    img1={img1}
    img2={img2}
    img3={img3}
  />
);
