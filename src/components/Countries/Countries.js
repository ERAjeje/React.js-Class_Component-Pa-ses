import React, { Component } from 'react';
import Country from "./Country";
import css from './countries.module.css';

class Countries extends Component {
    render() {
        const { countries } = this.props;
        return (
            <div className={css.boxContent}>
                <ul className={css.ulContainer}>
                    {countries.map(country => {
                        return (
                            <li className={css.liContainer}>
                                <Country country={country} key={country.id} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Countries;