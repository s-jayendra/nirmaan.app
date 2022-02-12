import { h } from 'preact';
import Service from "./services";
import { services, constructions, responsibilities } from './data';

import style from './style.css';
import Construction from './construction';
import Responsibilities from './responsibilities';
import StopChasing from './stopchasing';
import LoginButton from "../../components/header/login";

const Home = () => (
  <>
		<div class={style.home} id="home">
      <section className={style.homeSection}>
        <div class={style.loginWrapper}>
          <h1>
            <mark>One-stop solution for all your construction requirements</mark>
          </h1>
          <div class={style.loginButton}>
            <LoginButton
              className={style.primary}
              text="Login"
              href={"https://myproject.nirmaan.app/"}
              target="_blank"
            />
            <div class={style.buttonSeparator}/>
            <LoginButton className={style.secondary} text="Contact Us" />
          </div>
        </div>
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
