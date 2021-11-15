import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

function Contact() {
    let [send, setSend] = useState(false)
    let [inputName, setInputName] = useState('')
    let [inputEmail, setInputEmail] = useState('')
    let [inputMessage, setInputMessage] = useState('')

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_yy9adpa', 'template_ddc25ak', form.current, 'user_hPsWBMusDYgodGhbmnK5f')
          .then((result) => {
                setSend(true)
                setInputName('')
                setInputEmail('')
                setInputMessage('')
          }, (error) => {
              console.log(error.text);
          });
      };

      function nameHandleChange(e) {
        setInputName(e.target.value)
      }
      function emailHandleChange(e) {
        setInputEmail(e.target.value)
      }
      function messageHandleChange(e) {
        setInputMessage(e.target.value)
      }

    return (
        <div className="Contact">
            <h2>contact</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="input">
                    <label>NOM / SOCIETE:</label>
                    <input type="text" name="user_name" value={inputName} onChange={nameHandleChange} placeholder="Entrer votre nom ici" />
                 </div>
                <div className="input">
                    <label>E-MAIL:</label>
                     <input type="email" name="user_email" value={inputEmail} onChange={emailHandleChange} required placeholder="Entrer votre email ici"/>
                </div>
                <div className="input">
                    <label>MESSAGE:</label>
                    <textarea name="message" value={inputMessage} onChange={messageHandleChange} placeholder="Entrer votre message ici"></textarea>
                </div>
                <button type="submit" value="Send">Envoyer</button>

                {(send) ? (
                    <div className="message">
                        <p>Merci de m'avoir contacté! Je vous envoie un mail au plus vite!</p>
                    </div>
                ): ''}
            </form>
        </div>
    )
}

export default Contact
