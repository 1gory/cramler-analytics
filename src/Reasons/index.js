import React from 'react';
import Points from '../Elements/Points';
import Br from '../Elements/Br';
import img1 from '../icons/emoji/rock.png';
import img2 from '../icons/emoji/disappointed.png';
import img3 from '../icons/emoji/monocle.png';

const Point1 = <span>Вам не доверяют и<Br /> отказываются от покупки</span>;
const Point2 = <span>На сайте <Br />сложно купить</span>;
const Point3 = <span>Ваш сайт не находят <Br />в google и yandex</span>;

export default () => (
  <Points
    name="Оставьте заявку"
    subheader="Каждый день вы теряете клиентов, если:"
    point1={Point1}
    point2={Point2}
    point3={Point3}
    img1={img1}
    img2={img2}
    img3={img3}
  />
);
