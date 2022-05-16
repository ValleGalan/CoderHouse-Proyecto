import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Categorias from './components/categoria/Categorias'

export default function Routes() {
    return (
        <Switch>
            <Route path="/categoria" component={Categorias} />
        </Switch>
    )
}