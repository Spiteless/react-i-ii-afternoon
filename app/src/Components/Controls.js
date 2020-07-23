import React from 'react';


class Contorls extends React.Component{
    constructor(){
        super();
        this.state={
            previous: "< Previous",
            next: "Next >",
            buttons: {
                edit: "Edit",
                delete: "Delete",
                New: "New",
            }
        }
    }

    render(){
        return (
        <div className="contianer-controls">
            <div className="nav-bottom">
                <div className="nav-inner">
                    <div
                        className="left side-button"
                        name="left"
                        > {this.state.previous} </div>
                    <div className="middle">
                        <div className="container-button">
                            <button> Edit </button>
                            <button> Delete </button>
                            <button> New </button>
                        </div>
                    </div>
                    <div
                        className="right side-button"
                        onClick={ (e) => console.log(e.target.name)}
                        name="right"> {this.state.next} </div>
                </div>
            </div>
        </div>
            
        )
    }
}









export default Contorls