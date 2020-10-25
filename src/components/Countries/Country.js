import React, { Component } from 'react';

import css from './country.module.css';

class Country extends Component {
    render() {
        const { country } = this.props;
        return (
            <div className={css.content}>
                <img src={country.flag} className={css.flag} />
                {country.pt}
            </div>
        );
    }
}

export default Country;