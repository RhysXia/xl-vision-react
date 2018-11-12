import * as React from 'react'
import Header from '../header'
import { BrowserRouter as Router } from 'react-router-dom'
import Aside from '../aside'
import Content from '../content'
import Footer from '../footer'
import { hot } from 'react-hot-loader'

import './index.scss'

class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Router>
                    <div className={'layout-main'}>
                        <Aside/>
                        <Content/>
                    </div>
                </Router>
                <Footer/>
            </div>
        )
    }
}

export default Layout
