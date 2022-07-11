import React from 'react';
import './App.css'
import {Header} from './components/layout/Header';
import {TodoMain} from "./components/todo/TodoMain";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faCheckSquare, faCoffee)

export const App = () => {

    return (
        <>
            <Header/>
            <section>
                <TodoMain/>
            </section>

        </>
    );
}

