import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SwitchButton from '../static/images/switch.png';
import getCurrencyInfo from "../services/exchanger-service";
import CurrencyChart from "./CurrencyChart";

const Content = ({currencies}) => {
    const [selectCurrencyFrom, setCurrencyFrom] = useState(0);
    const [selectCurrencyTo, setCurrencyTo] = useState(1);
    const [currencyAmountFrom, setAmountFrom] = useState(1);
    const [currencyAmountTo, setAmountTo] = useState(1);
    const [currencyConfig, setCurrencyConfig] = useState({'from': 0, 'to': 1, 'rate': 1});
    
    useEffect(() => {
        (async function (){
            const currencyInfo = await getCurrencyInfo(currencies[selectCurrencyFrom]);
            const rate = currencyInfo.rates[currencies[selectCurrencyTo]];
            setCurrencyConfig({from: selectCurrencyFrom, to: selectCurrencyTo, rate: rate});
            setAmountTo(Number((currencyAmountFrom * rate).toFixed(2)))
        })()
    }, [selectCurrencyFrom, selectCurrencyTo])

    const amountFromHandler = (event) => {
        setAmountFrom(event.target.value)
        setAmountTo(Number((event.target.value * currencyConfig.rate).toFixed(2)))
    }
    const amountToHandler = (event) => {
        setAmountTo(event.target.value)
        setAmountFrom(Number((event.target.value / currencyConfig.rate).toFixed(2)))
    }

    const swapButtonHandler = (event) => {
        event.target.classList.add("active");
        setTimeout(() => event.target.classList.remove("active"), 500)

        let temporary = currencyAmountTo;
        setAmountTo(currencyAmountFrom);
        setAmountFrom(temporary);

        temporary = selectCurrencyTo;
        setCurrencyTo(selectCurrencyFrom);
        setCurrencyFrom(temporary);
    }

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
                        <div className="currency-swap">
                            <div className="head">
                                <h2>SWAP</h2>
                                <p>Trade currencies at an instant</p>
                            </div>
                            <div className="form">
                                <select
                                    name="" value={selectCurrencyFrom}
                                    onChange={event => {
                                        if (event.target.value != selectCurrencyTo) setCurrencyFrom(Number(event.target.value))
                                    }}
                                >
                                {
                                    currencies.map((currency, index) => <option value={index}>{currency}</option>)
                                }
                                </select>
                                <input
                                    type="number" className="currency-input" value={currencyAmountFrom}
                                    onChange={amountFromHandler}
                                />
                                <input type="image" className="currency-switch" src={SwitchButton} onClick={swapButtonHandler} alt='switch'/>
                                <select
                                    name="" value={selectCurrencyTo}
                                    onChange={event => {
                                        if (event.target.value != selectCurrencyFrom) setCurrencyTo(Number(event.target.value))
                                    }}
                                >
                                {
                                    currencies.map((currency, index) => <option id={index} value={index}>{currency}</option>)
                                }
                                </select>
                                <input
                                    type="number" className="currency-input" value={currencyAmountTo}
                                    onChange={amountToHandler}
                                />
                                <input type="submit" className="trade-button" value="Trade"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;