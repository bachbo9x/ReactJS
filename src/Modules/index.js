import React from 'react'
import Header from 'Modules/Header/header'
import Body from 'Modules/Body/body'
import Footer from 'Modules/Footer/footer'


export default class Index extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        )
    }
}