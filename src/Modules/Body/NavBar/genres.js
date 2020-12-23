import React from 'react'
import { getGenres } from 'API/callAPI'


export default class Genres extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listGenres: [],
            display: 'none'
        }
    }

    // dropdown list khi hover vào
    setIsShown(isShow) {
        // khi hover vào chuyển giá trị display = block
        if (isShow) {
            this.setState(() => ({
                ...this.state,
                display: 'block'
            }))
            // khi hover ra chuyển giá trị display = none
        } else {
            this.setState(() => ({
                ...this.state,
                display: 'none'
            }))
        }
    }

    // gán lại giá trị cho listGenres
    componentDidMount() {
        getGenres().then(
            data => this.setState(() => ({
                ...this.state,
                listGenres: data.genres
            }))
        ).catch(err => console.log(err))
    }


    render() {
        return (
            <li className="dropdown" onMouseEnter={() => this.setIsShown(true)} onMouseLeave={() => this.setIsShown(false)}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Genres <b className="caret"></b></a>
                <ul className="dropdown-menu multi-column columns-3" style={{ display: this.state.display }}>
                    <li>
                        <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                {this.state.listGenres.length > 0 ? this.state.listGenres.map(gen =>
                                    <li><a href="#">{gen.name}</a></li>
                                ) : ''
                                }
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                {this.state.listGenres.length > 0 ? this.state.listGenres.map(gen =>
                                    <li><a href="#">{gen.name}</a></li>
                                ) : ''
                                }
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="multi-column-dropdown">
                                {this.state.listGenres.length > 0 ? this.state.listGenres.map(gen =>
                                    <li><a href="#">{gen.name}</a></li>
                                ) : ''
                                }
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </li>
                </ul>
            </li>
        )
    }
}