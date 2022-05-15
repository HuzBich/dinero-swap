import React, {useEffect, useState} from 'react';
import getCurrencyInfo from "../API/exchangerService";

const CurrencyRate = ({currency, ...props}) => {
    const [currencyRate, setCurrencyRate] = useState(1)
    useEffect(() => {
        (async function () {
            const currencyInfo = await getCurrencyInfo(currency);
            setCurrencyRate(currencyInfo.rates['UAH']);
        })()
    }, [])

    return (
        <div className="currency">
            <div className="currency-symbol">
                {currency}
            </div>
            <div className="currency-rate">
                {currencyRate.toFixed(2)} UAH
            </div>
        </div>
    );
};

export default CurrencyRate;