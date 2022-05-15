import React from 'react';
import {Row} from "react-bootstrap";
import contactArtem from '../static/images/contact-artem.png'
import contactBogdan from '../static/images/contact-bogdan.png'
import emailIcon from '../static/images/email.png'

const Footer = () => {
    return (
        <Row className="footer">
            <div className="contacts">
                <div className="developer">
                    <img className="contact-name" src={contactArtem} alt=""/>
                    <div className="email">
                        <img className="email-icon" src={emailIcon} alt=""/>
                        <a href="mailto:artemiy.paolo@gmail.com">artemiy.paolo@gmail.com</a>
                    </div>
                </div>
                <div className="designer">
                    <img className="contact-name" src={contactBogdan} alt=""/>
                    <div className="email">
                        <img className="email-icon" src={emailIcon} alt=""/>
                        <a href="mailto:shevchuk.trade@gmail.com">shevchuk.trade@gmail.com</a>
                    </div>
                </div>
            </div>
        </Row>
    );
};

export default Footer;