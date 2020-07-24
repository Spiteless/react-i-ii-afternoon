import React from 'react';
import PageNum from './PageNum'
import data from '../data';


class Display extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        let person = this.props.data

        let movies = person.favoriteMovies.map(el => (
                <li>{el}</li>
        ))

        return (
            <div className="container-display">
                <div className="container">
                    <PageNum
                        currentPage = {this.props.currentPage}
                        maxPage = {this.props.maxPage}
                        ></PageNum>
                    <div className="display">
                            <h1>{ person.name.first } { person.name.last }</h1>
                            <div className="display-info">
                            <div><span className="bold">From:</span> {person.city}, {person.country}</div>
                            <div><span className="bold">Job Title:</span> {person.title}</div>
                            <div><span className="bold">Job Employer:</span> {person.employer}</div>
                            </div>
                            <div className="display-movies">
                                <span className="bold">Favorite Movies:</span>
                                    <ol>
                                        { movies }
                                    </ol>
                            </div>
                    </div>    
                </div>
            </div>
        )
        
    }
}









export default Display