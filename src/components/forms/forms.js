
import { Component } from "react";
import { PropTypes } from "prop-types"; 


export class Forms extends Component{
   
   hendelSubmit = (e) => {
    e.preventDefault();
    const target = e.currentTarget
     console.log(target.elements.password.value, target.elements.login.value)
   }
    render(){
        return(
            <>
            <form onSubmit={this.hendelSubmit}>
                <input type="text" name="login"/>
                <input type="text" name="password"/>
                <button type="submit">
                    Submit
                </button>
            </form>
            </>
        )
    }
} 

Forms.propTypes = {
    onSubmit: PropTypes.func
}