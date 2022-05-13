import React, {useEffect, useRef} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SwitchButton from '../static/images/switch.png';
import getCurrencyInfo from "../services/exchanger-service";

const Content = ({currencies}) => {
    const inputAmountFrom = useRef();
    const inputAmountTo = useRef();
    const selectCurrencyFrom = useRef();
    const selectCurrencyTo = useRef();

    useEffect(() => {
        (async function () {
            await exchangeFromHandler()
        })();
    }, [])

    const exchangeFromHandler = async (event) => {
        const currencyInfo = await getCurrencyInfo(currencies[selectCurrencyFrom.current.value]);
        const toCurrency = currencies[selectCurrencyTo.current.value];
        const amountCurrencyTo = currencyInfo.rates[toCurrency] * inputAmountFrom.current.value;
        inputAmountTo.current.value = amountCurrencyTo.toFixed(2);
    }

    const exchangeToHandler = async (event) => {
        const currencyInfo = await getCurrencyInfo(currencies[selectCurrencyTo.current.value]);
        const fromCurrency = currencies[selectCurrencyFrom.current.value];
        const amountCurrencyFrom = currencyInfo.rates[fromCurrency] * inputAmountTo.current.value;
        inputAmountFrom.current.value = amountCurrencyFrom.toFixed(2);
    }

    const swapButtonHandler = () => {
        let temporary = inputAmountFrom.current.value;
        inputAmountFrom.current.value = inputAmountTo.current.value;
        inputAmountTo.current.value = temporary;

        temporary = selectCurrencyFrom.current.value;
        selectCurrencyFrom.current.value = selectCurrencyTo.current.value;
        selectCurrencyTo.current.value = temporary;
    }

    return (
        <div className="content">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="currency-chart">


                        </div>
                    </Col>
                    <Col md="4">
                        <div className="currency-swap">
                            <div className="head">
                                <h2>SWAP</h2>
                                <p>Trade currencies at an instant</p>
                            </div>
                            <div className="form">
                                <select name="" ref={selectCurrencyFrom} onChange={exchangeFromHandler}>
                                {
                                    currencies.map((currency, index) => <option value={index}>{currency}</option>)
                                }
                                </select>
                                <input type="number" className="currency-input" ref={inputAmountFrom} defaultValue="1" onChange={exchangeFromHandler}/>
                                <input type="image" className="currency-switch" src={SwitchButton} onClick={swapButtonHandler} alt='switch'/>
                                <select name="" ref={selectCurrencyTo} defaultValue="1" onChange={exchangeFromHandler}>
                                {
                                    currencies.map((currency, index) => <option id={index} value={index}>{currency}</option>)
                                }
                                </select>
                                <input type="number" className="currency-input" ref={inputAmountTo} defaultValue="1" onChange={exchangeToHandler}/>
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