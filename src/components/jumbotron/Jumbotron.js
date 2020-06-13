import React from 'react';
import {title, container} from './Jumbotron.module.scss';

function Jumbotron ({}) {

    return (
        <div className={container}>
            <h1 className={title}>tesst</h1>
        </div>
    );
}

export default Jumbotron;