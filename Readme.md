npm install expo-cli --global
expo init "Name of app"
install android studio, install sdk in sdk manager, install virtual machine in avd manager. download playstore and android OS, First boot is usually the longest.
open android emulator, VSCode npm start then click the run on android or ios on expo webpage.
Debug in android ctrl + m, Debug in IOS command + d
React native debugger go to release page. https://github.com/jhen0409/react-native-debugger
Android Ctrl + t === IOS Command + t (React Native Debugger)

safe install kapag nagkaerror sa expo (expo install "package-name")

1. expo init "Name of app"
2. go to folder thenb npm start
3. npm install --save redux react-redux react-navigation exporeact-navigation-header-buttons
4. expo install react-native-gesture-handler react-native-reanimated
5. npm install --save react-navigation-stack
   import { createStackNavigator } from 'react-navigation-stack';
   npm install --save react-navigation-tabs
   import { createTabsNavigator } from 'react-navigation-tabs';
   npm install --save react-navigation-drawer
   import { createDrawerNavigator } from 'react-navigation-drawer';
6. npm install --save react-native-screens
   import { useScreens } from 'react-native-screens'
7. npm install --save react-navigation-header-buttons
8. npm install --save @expo/vector-icons
9. npm install --save react-navigation-material-bottom-tabs
10. npm install --save redux react-redux
11. npm install --save expo-font
12. npm install --save-dev redux-devtools-extension
