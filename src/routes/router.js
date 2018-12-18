import React from 'react';
//import {createStackNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation';

import Page1 from '../components/page1';
import Page2 from '../components/page2';

/*const stackNav = createStackNavigator({
    Home:Page1,
    About:Page2
})*/

const stackNav = createBottomTabNavigator({
    Home:Page1,
    About:Page2
})


export default stackNav;
