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
        let handleChange = this.props.handleChange
        return (
        <div className="contianer-controls">
            <div className="nav-bottom">
                <div className="nav-inner">
                    <button
                        className="left side-button"
                        onClick={ handleChange }
                        name="left"
                        value={-1}> {this.state.previous} </button>
                    <div className="middle">
                        <div className="container-button">
                            <button className="btn-ctrl"> Edit </button>
                            <button className="btn-ctrl"> Delete </button>
                            <button className="btn-ctrl"> New </button>
                        </div>
                    </div>
                    <button
                        className="right side-button"
                        onClick={ handleChange }
                        name="right"
                        value={1}> {this.state.next} </button>
                </div>
            </div>
        </div>
            
        )
    }
}









export default Contorls