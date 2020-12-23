import React from 'react'

export default class AgileTvSeriesGrid extends React.Component {
    render() {
        return (
            <>
                <div className="col-md-6 agile_tv_series_grid_left">
                    <div className="w3ls_market_video_grid1">
                        <img src={"./images/h1-1.jpg"} alt=" " className="img-responsive" />
                        <a className="w3_play_icon" href="#small-dialog">
                            <span className="glyphicon glyphicon-play-circle" aria-hidden="true"></span>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 agile_tv_series_grid_right">
                    <p className="fexi_header">the conjuring 2</p>
                    <p className="fexi_header_para"><span className="conjuring_w3">Story Line<label>:</label></span> 720p,Bluray HD Free Movie Downloads, Watch Free Movies Online with high speed Free Movie Streaming | MyDownloadTube Lorraine and Ed Warren go to north London to help a single...</p>
                    <p className="fexi_header_para"><span>Date of Release<label>:</label></span> Jun 10, 2016 </p>
                    <p className="fexi_header_para">
                        <span>Genres<label>:</label> </span>
                        <a href="genres.html">Drama</a> |
                                <a href="genres.html">Adventure</a> |
                                <a href="genres.html">Family</a>
                    </p>
                    <p className="fexi_header_para fexi_header_para1"><span>Star Rating<label>:</label></span>
                        <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-star" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a>
                    </p>
                </div>
            </>
        )
    }
}