import React from 'react';
import classes from './FormInformationMessage.module.scss';

class FormInformationMessage extends React.Component {
    render() {
        let visibleClass = this.props.visible ? classes.show : classes.hide;
        let messageColor = this.props.messageType ? classes.successColor : classes.errorColor;
        return (
            <div className={visibleClass + " " + messageColor}>
                {this.props.text}
            </div>
        );
    }
}

export default FormInformationMessage;