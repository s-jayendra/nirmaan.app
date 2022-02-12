import { h } from 'preact';
import Service from "./services";
import { services, constructions, responsibilities, manpower } from './data';

import style from './style.css';
import Construction from './construction';
import Responsibilities from './responsibilities';
import StopChasing from './stopchasing';

const Home = () => (
  <>
		<div class={style.home} id="home">
      <section className={style.homeSection}>
        <h1>
          <mark>One-stop solution for all your construction requirements</mark>
        </h1>
      </section>
    </div>
    <div class={style.ourServices} id="our-services">
      <section class={style.content}>
        <h1>Our Services</h1>
        <div class={style.flexBox}>
          {
            services.map(item => ( <Service key={item.id} data={item} />))
          }
        </div>
      </section>
    </div>
    <div class={style.constructions} id="constructions">
      <section class={style.content}>
        <h1>Construction Has Never Been Easier</h1>
        <div class={style.flexBox}>
          {
            constructions.map((item, index) => (<Construction key={item.id} data={item} index={index + 1} />))
          }
        </div>
      </section>
    </div>
    <div class={style.constructions} id="requirements">
      <section class={style.content}>
        <h1>We Take Care</h1>
        <h2>Nirmaan takes care of all your construction requirements</h2>
        <div class={style.flexBox}>
          {
            responsibilities.map((item) => (<Responsibilities key={item.id} data={item} />))
          }
        </div>
      </section>
    </div>
    <div class={style.stopChasing} id="stop-chasing">
      <section class={style.content}>
        <h1>
          Stop Chasing
        </h1>
        <StopChasing />
      </section>
    </div>
	</>
);

export default Home;
