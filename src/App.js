import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Home from './components/Screens/Home';
import Quiz from './components/Screens/Quiz';
import Results from './components/Screens/Results';
import store from './redux';

library.add(faCheckCircle);
library.add(faTimesCircle);

const AppNavigator = createStackNavigator(
    {
        Home: Home,
        Quiz: Quiz,
        Results: Results
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
);
const AppContainer = createAppContainer(AppNavigator);

export default () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);
