import React from 'react';
import FormButton from '../FormButton/FormButton';
import FormInformationMessage from '../FormInformationMessage/FormInformationMessage';
import FormInput from '../FormInput/FormInput';
import classes from './FormPanel.module.scss';

class FormPanel extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitFormHandler = this.onSubmitFormHandler.bind(this);
        this.onChangeLogin = this.onChangeLogin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.showSuccessMessage = this.showSuccessMessage.bind(this);

        this.state = {
            loginData: "",
            passData: "",
            informationMessage: "temp message",
            visible: false,
            messageType: true,
            isLoginValid: true,
            isPasswordValid: true
        };
    }
    onChangeLogin(loginData) {
        this.setState({ loginData: loginData });
        this.setState({ isLoginValid: loginData.length > 0 ? true : false });
    }

    onChangePassword(passData) {
        this.setState({ passData: passData });
        this.setState({ isPasswordValid: passData.length > 0 ? true : false });
    }

    onSubmitFormHandler() {
        if (this.state.loginData.length <= 0) {
            this.setState({ isLoginValid: false });
            this.showErrorMessage(true);
            return;
        }

        if (this.state.passData.length <= 0) {
            this.setState({ isPasswordValid: false });
            this.showErrorMessage(false);
            return;
        }
        this.showSuccessMessage();
    }

    showErrorMessage(isLoginError) {
        this.setState({
            informationMessage: isLoginError ? "Login is empty" : "Password is empty",
            visible: true,
            messageType: false,
        });
    }

    showSuccessMessage() {
        this.setState({
            informationMessage: "Login succeeded",
            visible: true,
            messageType: true,
        });
    }



    render() {
        return (
            <div className={classes.popup}>
                <h2>{this.props.TitleData}</h2>
                <FormInput
                    Handler={this.onChangeLogin}
                    Data={this.state.loginData}
                    Label="Login"
                    IsValid={this.state.isLoginValid} />
                <FormInput
                    Handler={this.onChangePassword}
                    Data={this.state.passData}
                    Label="Password"
                    Type="password"
                    IsValid={this.state.isPasswordValid} />
                <FormInformationMessage
                    text={this.state.informationMessage}
                    visible={this.state.visible}
                    messageType={this.state.messageType}
                />
                <FormButton formSubmit={this.onSubmitFormHandler} />
            </div>
        );
    }
}

export default FormPanel;