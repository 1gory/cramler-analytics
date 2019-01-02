import React from 'react';
import Points from '../Elements/Points';
import Br from '../Elements/Br';

const Point1 = <span>Мы вам позвоним<Br /> и обсудим ваш сайт</span>;
const Point2 = <span>Составим подробный<Br /> отчет и отправим его вам</span>;
const Point3 = <span>Созвонимся в скайпе<Br /> и проконсультируем по отчету</span>;

export default () => (
  <Points
    name="Оставьте заявку"
    point1={Point1}
    point2={Point2}
    point3={Point3}
  />
);
