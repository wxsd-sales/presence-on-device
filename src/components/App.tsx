import React, { Component } from 'react';
import Webex from 'webex';
import moment from 'moment';
import axios from 'axios';
import { Button, Icon, Spinner, Avatar } from '@momentum-ui/react';
import Content from './Content';
import { v4 as uuidv4 } from 'uuid';
import AuthModal from './AuthModal';
import { io } from "socket.io-client";
import queryString from 'querystring';
import { storeToken } from '../utils';
import { client_id, client_secret, auth_url, server_url } from '../constants';

declare type Props = null;

export default class App extends Component {
  state: any;
  webex: any;
  props: any;
  token: string;
  socket: any;
  loginState: string;

  constructor(props: Props) {
    super(props);
    this.loginState = uuidv4();
    this.socket = io(server_url);
    this.token = "";
    this.state = {
      isWebexConnected: false,
      isTokenValid: false
    };
  }

  async componentDidMount() {
    if (localStorage.getItem('webex_token')) {
      await this.validateToken();
      await this.connect(localStorage.getItem('webex_token'));

    } else {
      this.socket.emit('register', this.loginState);

      this.socket.on('token', async (token) => {
        this.setState({ isTokenValid: true });
        storeToken(token);
        await this.connect(token.access_token);
      });
    }
  }

  async connect(token: string): Promise<void> {
    try {
      this.webex = new Webex({ credentials: token });
      // await this.webex.internal.device.register();
      await this.webex.internal.mercury.connect();

      this.setState({ isWebexConnected: true });
    } catch (error) {
      console.log(error);
    }
  }


  async requestForFreshToken() {
    const refresh_token = localStorage.getItem('refresh_token');

    try {
      const { data } = await axios.post(auth_url, queryString.stringify({
        grant_type: "refresh_token",
        client_id: client_id,
        client_secret: client_secret,
        refresh_token
      }),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        });

      storeToken(data);
    } catch (error) {
      console.log(error);
    }

  };

  async validateToken() {
    if ((moment(localStorage.getItem('expiration_date')).diff(moment.utc()) < 0)) {
      await this.requestForFreshToken();
    } else {
      this.setState({ isTokenValid: true });
    }
  }


  render(): JSX.Element {
    return <div>
      {!this.state.isTokenValid ?
        <AuthModal loginState={this.loginState} /> :
        <div className="app">
          {this.state.isWebexConnected ? <Content webex={this.webex} /> : <Spinner />}
        </div>}
    </div>
  }
}