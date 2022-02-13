import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

import style from "./style.css";
import { getEmailBody } from "./util";

const Form = (props) => {

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    }
  }, []);

  const [state, setState] = useState({
    name: '',
    email: '',
    mobile: '',
    query: '',
  });

  const [message, setMessage] = useState("");


  const updateForm = (e) => {
    const { id, value } = e.target;
    setState({
      ...state,
      [id]: value,
    })
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const emailBody = getEmailBody(state);
    const email = document.createElement('a');
    email.setAttribute("href", `mailto:info@nirmaan.app?subject=New Query&body=${emailBody}`);
    email.click();
    setTimeout(() => {
      props.toggleEmailForm();
    }, 1000);
  }

  const onCloseClick = (e) => {
    e.preventDefault();
    props.toggleEmailForm();
  }

  return (
    <div class={style.formWrapper}>
      {
        message
        ? <p class={style.successMessage}>{message}</p>
        : (<form class={style.form} onSubmit={sendEmail}>
            <div class={style.inputGroup}>
              <label>Your Name:</label>
                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  id="name"
                  required
                  value={state.name}
                  onChange={updateForm}
                />
              
            </div>
            <div class={style.inputGroup}>
              <label>Email ID:</label>
                <input
                  type="email"
                  placeholder="e.g. me@example.com"
                  required
                  value={state.email}
                  id="email"
                  onChange={updateForm}
                />
            </div>
            <div class={style.inputGroup}>
              <label>Mobile: </label>
                <input
                  type="phone"
                  placeholder="Enter 10-digit mobile number"
                  maxLength={10}
                  id="mobile"
                  required
                  value={state.mobile}
                  onChange={updateForm}
                />
            </div>
            <div class={style.inputGroup}>
              <label>Your Query: </label>
                <textarea
                  placeholder="Type your message here..."
                  id="query"
                  required
                  value={state.query}
                  onChange={updateForm}
                />
            </div>
            <div class={style.buttonGroup}>
              <button type="submit" class={style.submitBtn}>Send Your Query</button>
              <button class={style.closeBtn} onClick={onCloseClick}>Close</button>
            </div>
          </form>)
      }
    </div>
  );
};

export default Form;
