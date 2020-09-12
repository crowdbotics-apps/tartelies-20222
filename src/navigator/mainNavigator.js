import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed1100780Navigator from '../features/Feed1100780/navigator';
import Dashboard14100778Navigator from '../features/Dashboard14100778/navigator';
import BlankScreen0100777Navigator from '../features/BlankScreen0100777/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed1100780: { screen: Feed1100780Navigator },
Dashboard14100778: { screen: Dashboard14100778Navigator },
BlankScreen0100777: { screen: BlankScreen0100777Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
