import React from 'react'
import ItemTotal from 'Modules/Body/item'
import AgileTvSeriesGrid from 'Modules/Body/LatestTvSeries/agileTvSeriesGrid'

export default class LiSlides extends React.Component {
    render() {
        return (
            <>
                <li style={{listStyle:'none'}}>
                <div class="agile_tv_series_grid">
                    <AgileTvSeriesGrid />
                    <div class="clearfix"> </div>
                    <div class="agileinfo_flexislider_grids">
                        <div class="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                </li>
            </>
        )
    }
}