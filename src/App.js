import React, { Component } from 'react';
import Routes from './Routes/routes';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Authorization'] = null;

class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentDidMount(){
    // this.initInterceptor();
  }

  initInterceptor(){
    axios.interceptors.request.use((config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    });
    axios.interceptors.response.use((response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    });
  }
  
  render() {
    return <Routes/>
  }
}

export default App;