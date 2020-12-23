import React from 'react'
import { Link } from 'react-router-dom'

export default class ItemTotal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Link to='/single'>
                    <a href="single.html" className="hvr-shutter-out-horizontal"><img src={this.props.img} title="album-name" className="img-responsive" alt=" " />
                        <div className="w3l-action-icon"><i className="fa fa-play-circle" aria-hidden="true"></i></div>
                    </a>
                    <div className="mid-1 agileits_w3layouts_mid_1_home">
                        <div className="w3l-movie-text">
                            <h6><a href="single.html">God’s Compass</a></h6>
                        </div>
                        <div className="mid-2 agile_mid_2_home">
                            <p>2016</p>
                            <div className="block-stars">
                                <ul className="w3l-ratings">
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="ribben">
                        <p>NEW</p>
                    </div>
                </Link>
            </>
        )
    }
}