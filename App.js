import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';

export default class App extends React.Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAVK9WamUc-GsDgB6CvxmZwSvZhQ49mpes",
      authDomain: "udemy-course-aa12e.firebaseapp.com",
      databaseURL: "https://udemy-course-aa12e.firebaseio.com",
      projectId: "udemy-course-aa12e",
      storageBucket: "udemy-course-aa12e.appspot.com",
      messagingSenderId: "632946631493"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store} >
        <LoginForm />
      </Provider>
    );
  }
}


