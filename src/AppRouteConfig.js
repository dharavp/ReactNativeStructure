import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
    Splash,
    Home
} from 'screens';

const AppRouteConfig = createStackNavigator({
    Splash: { screen: Splash, navigationOptions: { gesturesEnabled: false } },
    Home: { screen: Home, navigationOptions: { gesturesEnabled: false } },
},
    {
        headerMode: 'none'
    })
export default AppRouteConfig;

