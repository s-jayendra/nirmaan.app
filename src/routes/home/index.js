import { h } from 'preact';
import Service from "./services";
import { services, constructions, responsibilities } from './data';

import style from './style.css';
import Construction from './construction';
import Responsibilities from './responsibilities';
import StopChasing from './stopchasing';
import FAQ from './faq';
import { GetInTouch } from '../../components/ui';

const Home = () => (
  <>
		<div class={style.home} id="home">
      <section className={style.homeSection}>
        <div class={style.loginWrapper}>
          <h1>
            Easy and reliable construction services
          </h1>
          <div class={style.loginButton}>
            <GetInTouch
              className="tertiary"
              linkText="Get In Touch"
              href="mailto:info@nirmaanapp.com"
            />
          </div>
        </div>
        <hr />
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
        <hr />
      </section>
    </div>
    <div class={style.stopChasing} id="stop-chasing">
      <section class={style.content}>
        <StopChasing />
        <hr />
      </section>
    </div>
    <div class={style.requirements} id="requirements">
      <section class={style.content}>
        <h1>Nirmaan takes care of all your construction requirements</h1>
        <div class={style.flexBox}>
          {
            responsibilities.map((item) => (<Responsibilities key={item.id} data={item} />))
          }
        </div>
        <hr />
      </section>
    </div>
    <div class={style.constructions} id="constructions">
      <section class={style.content}>
        <h1>Construction Has Never Been Easier</h1>
        <div class={style.flexBox}>
          {
            constructions.map((item, index) => (
              <Construction
                key={item.id}
                data={item}
                index={index + 1}
                len={constructions.length}
              />
            ))
          }
        </div>
        <hr />
      </section>
    </div>
    <div class={style.faq} id="faq">
      <section class={style.content}>
        <h1>Frequently Asked Questions</h1>
        <div class={style.flexBox}>
          <FAQ />
        </div>
        <hr />
      </section>
    </div>
	</>
);

export default Home;
