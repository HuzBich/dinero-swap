import React from 'react';
import logo from '../static/images/logo.png'
import CurrencyRate from "./CurrencyRate";
import {Row, Col} from "react-bootstrap";

const Header = (props) => {
    return (
        <Row className="header">
            <Col md="3">
                <a href="/">
                    <img className="logo" src={logo} alt=""/>
                </a>
            </Col>
            <Col className="exchange-rate">
            {
                props.currencies.map((currency, index) => {
                    if (currency !== 'UAH')
                        return (<CurrencyRate currency={currency} id={index}/>)
                })
            }
            </Col>
        </Row>
    );
};

export default Header;