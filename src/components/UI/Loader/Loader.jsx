import React from 'react';
import cl from './Loader.module.scss';
import loaderGif from '../../../static/images/loader.gif';

const Loader = () => {
    return (
        <div className={cl.loader}>
            <img className={cl.spinner} src={loaderGif} alt="Loading"/>
        </div>
    );
};

export default Loader;