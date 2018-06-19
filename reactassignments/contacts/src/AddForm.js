import React, { Component } from "react";
import {connect} from "react-redux";
import {addPidgeon} from "./redux/"



class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                nickname: " ",
                imgUrl: " "
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { value, name } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                 ...prevState.inputs,
                [name]: value
            }
            }
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addPidgeon (this.state.inputs)
    }
    //create state
    // handle change and handlesubmit

    //connect action create to the form
    render() {
        const { inputs: { nickname, imgUrl } } = this.state;
        console.log(this.state.inputs)
        return (
            <form onSubmit= {this.handleSubmit}>
                <input name="nickname"value={nickname} type="text"
                onChange={this.handleChange} placeholder="enter nickname" />

                <input name="imgUrl" type="text" value={imgUrl} 
                onChange={this.handleChange} placeholder="Image URL" />

                <button>Submit</button>
            </form>
        )
    }
}

export default connect(null, { addPidgeon })(AddForm);