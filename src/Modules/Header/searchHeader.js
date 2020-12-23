import React from 'react'
import { Link } from 'react-router-dom'

export default class SearchHeader extends React.Component {
    render(){
        return(
            <div className = "w3_search">
                <form action="#" method="post">
                    <input type="text" name = "Search" placeholder="Search" required="" />
                    {/* <input type="submit" value="Go" /> */}
                    <Link to="/body"><input type="submit" value="Go" /></Link>
                </form>
            </div>
        )
    }
}