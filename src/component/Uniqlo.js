// modules
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// components
import { ShopCard } from './ShopCard.js'
// static assets
import uniqlo from './img/uniqlo.png'

export const Uniqlo = (props) => {
    const { men, women } = props
    return (
        <Router>
            <Switch>
                <Route path="/uniqlo" exact component={Select} />
                <Route path="/uniqlo/men" component={men} />
                <Route path="/uniqlo/women" component={women} />
            </Switch>
        </Router>
    )
}

const Select = () => {
    const dataArr = [
        {
            name: 'MENS',
            href: './uniqlo/men',
            src: uniqlo
        },
        {
            name: 'WOMENS',
            href: './uniqlo/women',
            src: uniqlo
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
