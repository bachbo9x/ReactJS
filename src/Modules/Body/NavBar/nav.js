import React from 'react'
import Toggle from 'Modules/Body/NavBar/toggleNavigation'
import Genres from 'Modules/Body/NavBar/genres'
import Country from 'Modules/Body/NavBar/country'
import { Link } from 'react-router-dom'

// Tạo Login cho Header
export default class Nav extends React.Component {
    // reload lại trang khi ấn vào Home 
    reLoad = () => {
        window.location.reload()
    }

    render() {
        // Trả về đoạn mã html
        return (
            <div className="movies_nav">
                <div className="container">
                    <nav className="navbar navbar-default">
                        {/* toggle navbar for mobile */}
                        <Toggle />
                        {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
                        <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
                            <nav>
                                <ul className="nav navbar-nav">
                                    <li className="active" onClick={()=>this.reLoad()}><Link to='/'>Home</Link></li>
                                    <Genres/>
                                    <li><a href="series.html">tv - series</a></li>
                                    <li><a href="news.html">news</a></li>
                                    <Country/>
                                    <li><a href="short-codes.html">Short Codes</a></li>
                                    <li><a href="list.html">A - z list</a></li>
                                </ul>
                            </nav>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}