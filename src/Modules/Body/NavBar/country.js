import React from 'react'

export default class Country extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // listGenres: []
            display: 'none'
        }
    }
    setIsShown(isShow) {
        if (isShow) {
            this.setState(() => ({
                ...this.state,
                display: 'block'
            }))
        } else {
            this.setState(() => ({
                ...this.state,
                display: 'none'
            }))
        }
    }
    render() {
        return (
            <li className="dropdown" onMouseEnter={() => this.setIsShown(true)} onMouseLeave={() => this.setIsShown(false)}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Country <b className="caret"></b></a>
                <ul className="dropdown-menu multi-column columns-3" style={{display: this.state.display}}>
                    <li>
                        <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genres.html">Asia</a></li>
                                <li><a href="genres.html">France</a></li>
                                <li><a href="genres.html">Taiwan</a></li>
                                <li><a href="genres.html">United States</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genres.html">China</a></li>
                                <li><a href="genres.html">HongCong</a></li>
                                <li><a href="genres.html">Japan</a></li>
                                <li><a href="genres.html">Thailand</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                <li><a href="genres.html">Euro</a></li>
                                <li><a href="genres.html">India</a></li>
                                <li><a href="genres.html">Korea</a></li>
                                <li><a href="genres.html">United Kingdom</a></li>
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </li>
                </ul>
            </li>
        )
    }
}