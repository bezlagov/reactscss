import React from 'react';
import classes from './FormButton.module.scss';

class FormButton extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSubmitHandler(e) {
        this.props.formSubmit(e.target.value);
    }

    render() {
        return (
            <div>
                <input 
                className={classes.button}
                type="submit" 
                onClick={this.onSubmitHandler} 
                value="Submit" />
            </div>
        );
    }
}

export default FormButton;