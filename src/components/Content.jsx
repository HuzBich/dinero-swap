import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CurrencyChart from "./CurrencyChart";
import CurrencyExchanger from "./currencyExchanger";

const Content = ({currencies, ...props}) => {
    const [currencyConfig, setCurrencyConfig] = useState({'from': 0, 'to': 1, 'rate': 1});

    return (
        <div className="content">
            <Container>
                <Row>
                    <Col md="8">
                        <CurrencyChart
                            from={currencies[currencyConfig.from]}
                            to={currencies[currencyConfig.to]}
                            rate={currencyConfig.rate}
                        />
                    </Col>
                    <Col md="4">
                        <CurrencyExchanger
                            currencies={currencies}
                            setCurrencyConfig={setCurrencyConfig}
                            currencyConfig={currencyConfig}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;