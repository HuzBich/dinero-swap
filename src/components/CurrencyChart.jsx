import React from 'react';
import TradingViewWidget, {Themes} from "react-tradingview-widget";

const CurrencyChart = (props) => {
    return (
        <div className="currency-chart">
            <div className="chart-title">
                <h2>{props.from}/{props.to}</h2>
                <p className="rate">{props.rate}</p>
                <p className="date">{(new Date()).toUTCString()}</p>
            </div>
            <div className="chart-body">
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
        </div>
    );
};

export default CurrencyChart;