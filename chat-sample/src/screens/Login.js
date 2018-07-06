import React, { Component, Fragment } from 'react';
// import { View } from 'react-native';
import { connect } from "react-redux";
//import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import SendBird from 'sendbird';
import { sendbirdLogin } from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            nickname: '',
            error: ''
        }

        console.log(this.props);
    }

    _userIdChanged = (event) => {
        const userId = event.target.value;
        this.setState({ userId });
    }

    _nicknameChanged = (event) => {
        const nickname = event.target.value;
        this.setState({ nickname });
    }

    _onButtonPress = () => {
        const { userId, nickname } = this.state;
        const sb = new SendBird({ 'appId': '89F499BE-8D99-4160-808F-585794AAF4C7' });
        sb.connect(userId, (user, error) => {
            if (error) {
                this.setState({ error });
            } else {
                sb.updateCurrentUserInfo(nickname, null, (user, error) => {
                    if (error) {
                        this.setState({ error });
                    } else {
                        this.setState({
                            userId: '',
                            nickname: '',
                            error: ''
                        }, () => {
                            this.props.history.push("/main");
                        });
                    }
                })
            }
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label>USER ID</label>
                    <input value={this.state.userId}
                        onChange={this._userIdChanged}
                    />
                </div>
                <div>
                    <label>NickName</label>
                    <input value={this.state.nickname}
                        onChange={this._nicknameChanged}
                    />
                </div>
                <button
                    onClick={this._onButtonPress}
                    style={{ width: '100px', height: '100px', background: '#ffffff' }}
                >Button</button>
            </Fragment>
        )
    }
}

const styles = {
    containerStyle: {
        marginTop: 10
    }
}

function mapStateToProps(state) {
    console.log(state);
    // const { error, user } = login;
    // return { error, user };
};

export default connect(mapStateToProps, { sendbirdLogin })(Login);

