import React from 'react';
import { View, Alert } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store';
import AppRouteConfig from './AppRouteConfig';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { setJSExceptionHandler } from 'react-native-exception-handler';

const errorHandler = (e, isFatal) => {
    if (isFatal) {
        let errorMessage = e.name + " " + e.message;
        try {
            Alert.alert(
                'Unexpected error occurred',
                `
        Error: ${(isFatal) ? 'Fatal:' : ''} ${errorMessage}

        We have reported this to our team ! Please close the app and start again!
        `,
                [{
                    text: 'Close',
                    onPress: () => {

                    }
                }]
            );
        } catch (error) {
            alert(error)
        }

    } else {
        console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
};
setJSExceptionHandler(errorHandler, true);
// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

//make reduxify navigator - v2.0 and pass to mapStateToProps
const App = reduxifyNavigator(AppRouteConfig, "root");

const mapStateToProps = (state) => ({
    state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(App);

//create store
const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
);

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}