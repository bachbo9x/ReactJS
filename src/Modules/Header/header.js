import React from 'react'
import Login from 'Modules/Header/login'
import LogoBanner from 'Modules/Header/logoBanner'
import SearchHeader from 'Modules/Header/searchHeader'

export default class Header extends React.Component {
    render(){
        return(
            // Header
            <div class="header">
                <div class="container">
                    {/* <!--logoBanner.js--> */}
                    <LogoBanner/>
                    {/* <!--searchHeader.js--> */}
                    <SearchHeader/>                
                    {/* <!--login.js--> */}
                    <Login/>
                    {/* clear-fix boostrap */}
                    <div class="clearfix"> </div>
                </div>
            </div>
        )
    }
}