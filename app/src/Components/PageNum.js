import React from 'react';


class PageNum extends React.Component{
    constructor(){
        super();
        this.state={
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        //e.target is the element that the event call came from
        //e.target.name is the name of that target element
        //[e.target.name]: e.target.value means:
        //      HTML prop name: value of HTML element
        this.setState({
            [e.target.name]: e.target.value
        })

    render(){
        let pageNum = this.props.currentPage + 1
        
        return (
            <h3 className="page-nums"> {pageNum}/{this.props.maxPage} </h3>
        )
    }
}









export default PageNum