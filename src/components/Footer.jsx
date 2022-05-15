import React from 'react';
import {Row} from "react-bootstrap";
import contactArtem from '../static/images/contact-artem.png'
import contactBogdan from '../static/images/contact-bogdan.png'

const Footer = () => {
    return (
        <Row className="footer">
            <div className="contacts">
                <img src={contactArtem} alt=""/>
                <img src={contactBogdan} alt=""/>
            </div>
        </Row>
    );
};

export default Footer;