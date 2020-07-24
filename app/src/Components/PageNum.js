import React from 'react';


class PageNum extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        let pageNum = this.props.currentPage
        
        return (
            <h3 className="page-nums"> {pageNum}/{this.props.maxPage} </h3>
        )
    }
}









export default PageNum