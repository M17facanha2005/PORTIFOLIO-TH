import { BsWhatsapp } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TbGps } from "react-icons/tb";

export const Contacts = () => {
  return <div className="contacts" id="section">
    <h1 className="title">Contato</h1>
    <div className="content">
      <div className="val">
        <BsWhatsapp size={40}/>
        <p>+55 85 99999-9999</p>
      </div>
      <div className="val">
        <FiMail size={40}/>
        <p>M17facanha@gmail.com</p>
      </div>
      <div className="val">
        <TbGps size={40}/>
        <p>Fortaleza, CE, Brasil</p>
      </div>
    </div>
  </div>
}