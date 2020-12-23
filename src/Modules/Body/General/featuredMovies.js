import React from 'react'
import NavTab from 'Modules/Body/General/navTab'

export default class FeaturedMovies extends React.Component {
    render() {
        return (
            <div className="general">
                <h4 className="latest-text w3_latest_text">Featured Movies</h4>
                <div className="container">
                    <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
                        <NavTab />
                        
                    </div>
                </div>
            </div>
        )
    }
}