import React, {useEffect, useState} from 'react';
import TradingViewWidget, {Themes} from "react-tradingview-widget";
import Loader from "./UI/Loader/Loader";

const CurrencyChart = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        const chartBody = document.getElementsByClassName('chart-body')[0]
        const searchIframe = setInterval(() => {
            try {
                chartBody.getElementsByTagName('iframe')[0].onload = () => {
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 700)
                }
                clearInterval(searchIframe);
            } catch (e) {}
        }, 100)

    }, [props])
    return (
        <div className="currency-chart">
            <div className="chart-title">
                <h2>{props.from}/{props.to}</h2>
                <p className="rate">{props.rate}</p>
                <p className="date">{(new Date()).toUTCString()}</p>
            </div>
            <div hidden={isLoading} className="chart-body">
                <TradingViewWidget
                    symbol={props.from+props.to}
                    theme={Themes.LIGHT}
                    locale="en"
                    interval="D"
                    autosize
                    hide_top_toolbar
                    hide_legend
                    style="3"
                />
            </div>
            {
                isLoading
                ?
                <div className="loader">
                    <Loader/>
                </div>
                :
                <></>
            }

        </div>
    );
};

export default CurrencyChart;