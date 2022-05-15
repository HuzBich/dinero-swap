import React, {useEffect, useState} from 'react';
import SwitchButton from "../static/images/switch.png";
import getCurrencyInfo from "../API/exchangerService";

const CurrencyExchanger = ({currencies, setCurrencyConfig, currencyConfig, ...props}) => {
    const [selectCurrencyFrom, setCurrencyFrom] = useState(0);
    const [selectCurrencyTo, setCurrencyTo] = useState(1);
    const [currencyAmountFrom, setAmountFrom] = useState(1);
    const [currencyAmountTo, setAmountTo] = useState(1);

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
        setTimeout(() => {
            event.target.classList.remove("active")
            let temporary = currencyAmountTo;
            setAmountTo(currencyAmountFrom);
            setAmountFrom(temporary);

            temporary = selectCurrencyTo;
            setCurrencyTo(selectCurrencyFrom);
            setCurrencyFrom(temporary);
        }, 500)
    }

    return (
        <div className="currency-swap">
            <div className="head">
                <h2>SWAP</h2>
                <p>Trade currencies at an instant</p>
            </div>
            <div className="form">
                <select
                    name="" value={selectCurrencyFrom}
                    onChange={event => setCurrencyFrom(Number(event.target.value))}
                >
                {
                    currencies.map((currency, index) => {
                        if (index !== selectCurrencyTo)
                            return (<option key={index} value={index}>{currency}</option>);
                    })
                }
                </select>
                <input type="number" className="currency-input"
                       value={currencyAmountFrom} onChange={amountFromHandler}/>

                <input type="image" className="currency-switch"
                       src={SwitchButton} onClick={swapButtonHandler} alt='switch'/>

                <select
                    name="" value={selectCurrencyTo}
                    onChange={event => setCurrencyTo(Number(event.target.value))}
                >
                {
                    currencies.map((currency, index) => {
                        if (index !== selectCurrencyFrom)
                            return (<option key={index} value={index}>{currency}</option>);
                    })
                }
                </select>
                <input type="number" className="currency-input"
                       value={currencyAmountTo} onChange={amountToHandler}/>

                <input type="submit" className="trade-button" value="Trade"/>
            </div>
        </div>
    );
};

export default CurrencyExchanger;