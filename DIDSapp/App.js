const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import StaffInfo from "./screens/StaffInfo";
import StaffFollowUpAfterGroup from "./screens/StaffFollowUpAfterGroup";
import StaffFollowUp from "./screens/StaffFollowUp";
import StaffRate from "./screens/StaffRate";
import SignInWrongDay from "./screens/SignInWrongDay";
import SignInNoReception from "./screens/SignInNoReception";
import RoleNotification from "./screens/RoleNotification";
//import Settings from "./components/Settings";
// import SignIn from "./components/SignIn";
// import SignIn1 from "./components/SignIn1";
// import News from "./components/News";
// import News1 from "./components/News1";
// import Helpline from "./components/Helpline";
// import Helpline1 from "./components/Helpline1";
// import NavigationBar4 from "./components/NavigationBar4";
import Settings from "./components/Settings";
import Settings11 from "./components/Settings11";
import SignIn2 from "./components/SignIn2";
import SignIn3 from "./components/SignIn11";
import News2 from "./components/News2";
import News3 from "./components/News3";
import Helpline3 from "./components/Helpline2";
import Helpline4 from "./components/Helpline3";
import Meetings from "./components/Meetings";
import MeetingsSelected from "./components/MeetingsSelected";
import InitialNotifications from "./screens/InitialNotifications";
import RoleSelect from "./screens/RoleSelect";
import LanuageSelect from "./screens/LanuageSelect";
import CreateProfile from "./screens/CreateProfile";
import CreateAccount from "./screens/CreateAccount";
import ResetPassword from "./screens/ResetPassword";
import ForgotPassword from "./screens/ForgotPassword";
import FrameComponent from "./components/MeetingHeader";
import MeetingInfo from "./screens/MeetingInfo";
import Meetings1 from "./screens/Meetings";
import Login from "./screens/Login";
import LoadingScreen from "./screens/LoadingScreen";
import FrameComponent1 from "./components/AccountHeader";
import Account from "./screens/Account";
import FrameComponent4 from "./components/NotificationSetHead";
import Notifications from "./screens/Notifications";
import FrameComponent2 from "./components/RoleChangeSetHeader";
import RequestRoleChange from "./screens/RequestRoleChange";
import FrameComponent3 from "./components/ChangePasswordHeader";
import ChangePassword from "./screens/ChangePassword";
import FrameComponent5 from "./components/SignInQuestionsHeader";
import FrameComponent6 from "./components/SignInRateHeader";
import SignInRate from "./screens/SignInRate";
import SignInQuestions from "./screens/SignInQuestions";
import SignInConfidentiality from "./screens/SignInConfidentiality";
import Helpline2 from "./screens/Helpline2";
import SignInMain from "./screens/SignInMain";
import Settings2 from "./screens/Settings2";
import InfoScreen from "./screens/InfoScreen";
import StatePlaceholder from "./components/StatePlaceholder";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { SwitchProvider } from './components/SwitchContext';
import { TextInputProvider } from './components/TextInputContext';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';

//firebase
// import { initializeApp } from '@react-native-firebase/app';
// import firebaseConfig from './firebase'; // Adjust the path based on your project structure
// import './firebase'; // Import the Firebase configuration
// // Initialize Firebase
// initializeApp(firebaseConfig);



import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Meetings />,
    <Helpline3 />,
    <News2 />,
    <SignIn2 />,
    <Settings />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <MeetingsSelected />,
    <Helpline4 />,
    <News3 />,
    <SignIn3 />,
    <Settings11 />,
  ]);
  return (
    
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              backgroundColor: "#000",
              width: "100%",
              height: 64,
              flexDirection: "row",
              justifyContent: "space-between", // Spread items evenly
              paddingHorizontal: 16, // Add padding for better spacings
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Meetings1"
        component={Meetings1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Helpline2"
        component={Helpline2}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="InfoScreen"
        component={InfoScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SignInMain"
        component={SignInMain}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings2"
        component={Settings2}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {

  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "PTSans": require("./assets/fonts/PTSans-Regular.ttf"),
    "PTSans-Regular": require("./assets/fonts/PTSans-Regular.ttf"),
    "PTSans-Bold": require("./assets/fonts/PTSans-Bold.ttf"),
    "PTSans-Caption": require("./assets/fonts/PTSans-Caption.ttf"),
    "PTSans-CaptionBold": require("./assets/fonts/PTSans-CaptionBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "SFProDisplay-UltralightItalic": require("./assets/fonts/SFProDisplay-UltralightItalic.otf"),
    "Source Sans Pro": require("./assets/fonts/SourceSansPro-It.otf"),

  });

  


  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 2000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <SwitchProvider>
    <TextInputProvider>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffInfo"
                component={StaffInfo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffFollowUpAfterGroup"
                component={StaffFollowUpAfterGroup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffFollowUp"
                component={StaffFollowUp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffRate"
                component={StaffRate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignInWrongDay"
                component={SignInWrongDay}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignInNoReception"
                component={SignInNoReception}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RoleNotification"
                component={RoleNotification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="InitialNotifications"
                component={InitialNotifications}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RoleSelect"
                component={RoleSelect}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LanuageSelect"
                component={LanuageSelect}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="CreateProfile"
                component={CreateProfile}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForgotPassword"
                component={ForgotPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MeetingInfo"
                component={MeetingInfo}
                options={{ headerShown: false 
                }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoadingScreen"
                component={LoadingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Account"
                component={Account}
                options={(props) => ({
                  headerShown: true,
                  header: () => <FrameComponent1 />,
                })}
              />
              <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={(props) => ({
                  headerShown: true,
                  header: () => <FrameComponent4 />,
                })}
              />
              <Stack.Screen
                name="RequestRoleChange"
                component={RequestRoleChange}
                options={(props) => ({
                  headerShown: true,
                  header: () => <FrameComponent2 />,
                })}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePassword}
                options={(props) => ({
                  headerShown: true,
                  header: () => <FrameComponent3 />,
                })}
              />
              <Stack.Screen
                name="SignInRate"
                component={SignInRate}
                options={(props) => ({
                  headerShown: false,
                  header: () => <FrameComponent6 />,
                })}
              />
              <Stack.Screen
                name="SignInQuestions"
                component={SignInQuestions}
                options={(props) => ({
                  headerShown: false,
                  header: () => <FrameComponent5 />,
                })}
              />
              <Stack.Screen
                name="SignInConfidentiality"
                component={SignInConfidentiality}
              />
            </Stack.Navigator>
          ) : (
            <LoadingScreen />
          )}
        </NavigationContainer>
      </ApplicationProvider>
      </TextInputProvider>
      </SwitchProvider>
    </>
  );
};

AppRegistry.registerComponent(appName, () => App);

export default App;

