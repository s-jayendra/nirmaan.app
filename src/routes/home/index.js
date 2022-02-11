import { h } from 'preact';
import Card from "../../components/card";
import Service from "./service";

import style from './style.css';

const data = [
  {
    id: "paint_and_pop",
    title: "Paint and Pop",
    description: `Painting services for all kinds of surfaces, POP and gypsum works for partitions and ceilings.`,
    imagePath: "../../assets/nirmaan_paintandpop.png",
    startsAt: "Starting at Rs 13/SQFT",
  },
  {
    id: "civil_finishes",
    title: "Civil Finishes",
    description: `All kinds of masonry works and services, tile laying, stone flooring, brick wall building.`,
    imagePath: "../../assets/nirmaan_paintandpop.png",
    startsAt: "Starting at Rs 13/SQFT",
  },
  {
    id: "light_fabrication",
    title: "Light Fabrication",
    description: `on-site fabrication of custom structures, sheds upto 18 mm of steel plates.`,
    imagePath: "../../assets/nirmaan_paintandpop.png",
    startsAt: "Starting at Rs 13/SQFT",
  },
  {
    id: "lv_electrical",
    title: "LV Electrical",
    description: `All low-voltage electrical services including point wiring, DB panel supply and installation, network cabling.`,
    imagePath: "../../assets/nirmaan_paintandpop.png",
    startsAt: "Starting at Rs 13/SQFT",
  },
]

const Home = () => (
  <>
		<div class={style.home} id="home">
        <section class={style.content}>
          <h1>
            One-stop solution for all your construction requirements
          </h1>
            <img
              class={style.image}
              src="../../assets/nirmaan-banner.webp"
              alt="One-stop solution for all your construction requirements"
            />
        </section>
      </div>
      <div class={style.ourServices} id="our-services">
        <section class={style.content}>
          {
            data.map(item => ( <Service key={item.id} data={item} />))
          }
        </section>
      </div>
      <div class={style.constructions} id="constructions">
        <section class={style.content}>
          {
            data.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          }
        </section>
      </div>
      <div class={style.requirements} id="requirements">
        <section class={style.content}>
          {
            data.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          }
        </section>
      </div>
      <div class={style.stopChasing} id="stop-chasing">
        <section class={style.content}>
          {
            data.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            ))
          }
        </section>
      </div>
	</>
);

export default Home;
