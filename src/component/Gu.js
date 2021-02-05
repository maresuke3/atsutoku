// modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
// components
import { ShopCard } from './ShopCard.js'
// static assets
import gu from './img/gu.png'

export const Gu = (props) => {
    const { men, women } = props
    return (
        <Router>
            <Switch>
                <Route path="/gu" exact component={Select} />
                <Route path="/gu/men" component={men} />
                <Route path="/gu/women" component={women} />
            </Switch>
        </Router>
    )
}

Gu.PropTypes = {
    men: PropTypes.any,
    women: PropTypes.any
}

const Select = () => {
    const dataArr = [
        {
            name: 'MENS',
            href: './gu/men',
            src: gu
        },
        {
            name: 'WOMENS',
            href: './gu/women',
            src: gu
        }
    ]
    return (
        <div className="inner">
            <div className="container">
                {dataArr.map((data) => (
                    <ShopCard
                        key={data.name}
                        name={data.name}
                        link={data.href}
                        img={data.src}
                    />
                ))}
            </div>
        </div>
    )
}
