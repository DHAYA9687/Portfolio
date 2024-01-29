import { IconButton } from "@material-ui/core";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import { Element } from "react-scroll";
import "./Contact.css";
function Contact() {
  return (
    <Element name="contact" className="Contact">
      <h1>Contact</h1>
      <div className="Contact__Container">
        <p>
          Email: <span>sekarsekar@5016@gmail.com</span>
        </p>
        <p>
          github username: <span>@DHAYA9687</span>
        </p>
        <div className="Contact__icons">
          <a href="https://github.com/DHAYA9687" target="_blank">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
          <a href="https://www.instagram.com/dhaya_sekar/" target="_blank">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
          <a href="https://www.facebook.com/dhaya.sekar.9" target="_blank">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
}

export default Contact;
