import React from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Main from '../routes/Main/MainPresenter';
import Product from '../routes/Product/ProductPresenter';
import Contact from '../routes/Contact/ContactPresenter';

const Router: React.FunctionComponent = () => (
    <HashRouter>
        <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/blanket" component={Product} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </>
    </HashRouter>
)

export default Router;