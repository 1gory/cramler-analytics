import React from 'react';
import Points from '../Elements/Points';
import Br from '../Elements/Br';
import img1 from '../icons/care/call.svg';
import img2 from '../icons/care/report.svg';
import img3 from '../icons/care/skype.svg';

const Point1 = <span>Мы позвоним вам<Br /> и обсудим ваш сайт</span>;
const Point2 = <span>Составим подробный<Br /> отчет и отправим его вам</span>;
const Point3 = <span>Созвонимся в скайпе<Br /> и поясним всё по отчету</span>;

export default () => (
  <Points
    name="Оставьте заявку"
    point1={Point1}
    point2={Point2}
    point3={Point3}
    img1={img1}
    img2={img2}
    img3={img3}
  />
);
