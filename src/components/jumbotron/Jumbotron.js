import React from 'react';
import PropTypes from 'prop-types';
import {title, container} from './Jumbotron.module.scss';

function Jumbotron ({children}) {

    return (
        <div className={container}>
            <h1 className={title}>{children}</h1>
        </div>
    );
}

export default Jumbotron;