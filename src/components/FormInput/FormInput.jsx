import React from 'react';
import classes from './FormInput.module.scss';

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.props.Handler(e.target.value);
    }
    render() {
        return (
            <div className={classes.container}>
                <span>{this.props.Label}</span>
                <input
                    type={this.props.Type}
                    onChange={this.onChangeHandler}
                    value={this.props.Data} 
                    className={this.props.IsValid?classes.borderSuccess:classes.borderError}
                    />
            </div>
        );
    }
}

export default FormInput;