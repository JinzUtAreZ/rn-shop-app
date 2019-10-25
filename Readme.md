npm install expo-cli --global
expo init "Name of app"
install android studio, install sdk in sdk manager, install virtual machine in avd manager. download playstore and android OS, First boot is usually the longest.
open android emulator, VSCode npm start then click the run on android or ios on expo webpage.
Debug in android ctrl + m, Debug in IOS command + d
React native debugger go to release page. https://github.com/jhen0409/react-native-debugger
Android Ctrl + t === IOS Command + t (React Native Debugger)

safe install kapag nagkaerror sa expo (expo install "package-name")

1. expo init "Name of app"
2. go to folder then npm start
   default package.json
3.

{
"main": "node_modules/expo/AppEntry.js",
"scripts": {
"start": "expo start",
"android": "expo start --android",
"ios": "expo start --ios",
"web": "expo start --web",
"eject": "expo eject"
},
"dependencies": {
"expo": "^35.0.0",
"react": "16.8.3",
"react-dom": "16.8.3",
"react-native": "https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz",
"react-native-web": "^0.11.7"
},
"devDependencies": {
"babel-preset-expo": "^7.1.0"
},
"private": true
}

4. npm install --save redux react-redux redux-thunk
5. npm install --save react-navigation react-navigation-drawer react-navigation-header-buttons react-navigation-stack
6. expo install react-native-screens react-native-gesture-handler react-native-reanimated
7. npm install --save moment expo-linear-gradient

validate.js formix (3rd party libraries worth reading)
https://firebase.google.com/docs/reference/rest/auth#section-create-email-password (firebase document authentication)

setTimeOut issue
To sort this out you need to hard code the value, increase the value of the variable MAX_TIMER_DURATION_MS. Here are the steps:

Go to node_modules/react-native/Libraries/Core/Timer/JSTimers.js

Look for the variable MAX_TIMER_DURATION_MS

Change 60 _ 1000 to 10000 _ 1000

Save the changes and re-build your app.

This worked for me.
