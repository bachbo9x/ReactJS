import React from 'react'
import ItemTotal from 'Modules/Body/item'

export default class NavTab extends React.Component {
    render() {
        return (
            <>
                <ul id="myTab" className="nav nav-tabs" role="tablist">
                    <li role="presentation" className="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Featured</a></li>
                    <li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile" aria-expanded="false">Top viewed</a></li>
                    <li role="presentation"><a href="#rating" id="rating-tab" role="tab" data-toggle="tab" aria-controls="rating" aria-expanded="true">Top Rating</a></li>
                    <li role="presentation"><a href="#imdb" role="tab" id="imdb-tab" data-toggle="tab" aria-controls="imdb" aria-expanded="false">Recently Added</a></li>
                </ul>
                <div id="myTabContent" class="tab-content">
                    <div role="tabpanel" class="tab-pane fade active in" id="home" aria-labelledby="home-tab">
                        <div className="w3_agile_featured_movies">
                            <div className="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div className="col-md-2 w3l-movie-gride-agile">
                                <ItemTotal img='./images/m3.jpg'/>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
                        <div className="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div className="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div className="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div className="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div className="col-md-2 w3l-movie-gride-agile">
                            <ItemTotal img='./images/m3.jpg'/>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </>
        )
    }
}