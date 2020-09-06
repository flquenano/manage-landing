import React, { useState } from "react";

const FooterSubscribe = () => {
  const [isEmail, setIsEmail] = useState(true);
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(email.toLowerCase());
    setIsEmail(result);
  };

  const warning = (
    <p className="footer__subscribe-form-warning">
      Please insert a valid email
    </p>
  );
  return (
    <form
      action="POST"
      className="footer__subscribe-form js-form"
      onSubmit={submit}
    >
      <input
        type="text"
        aria-label="subscribe-email"
        placeholder="Updates in your inbox…"
        className={`footer__subscribe-form-txtbox  ${
          !isEmail && " footer__subscribe-form-txtbox-warning"
        }`}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="footer__subscribe-form-btn btn bg-br">Go</button>
      {!isEmail && warning}
    </form>
  );
};

export default FooterSubscribe;
