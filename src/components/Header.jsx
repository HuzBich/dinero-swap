import React from 'react';
import logo from '../static/images/logo.png'
import CurrencyRate from "./CurrencyRate";
import {Row, Col} from "react-bootstrap";

const Header = () => {
    return (
        <Row className="header">
            <Col md="3">
                <a href="/">
                    <img className="logo" src={logo} alt=""/>
                </a>
            </Col>
            <Col className="exchange-rate">
                <CurrencyRate currency="USD" />
                <CurrencyRate currency="EUR" />
                <CurrencyRate currency="PLN" />
            </Col>
        </Row>
    );
};

export default Header;