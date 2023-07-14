import React from "react";

import {
  useNavigation,
  ParamListBase,
  NavigationContainer,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Button, View } from "react-native";

type Routes = {
  moduleHome: undefined;
  moduleDetail: undefined;
};

const Navigator = createNativeStackNavigator<Routes>();

const ModuleHome = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigate = () => {
    navigate("moduleDetail");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button title="go to detail screen" onPress={handleNavigate} />
    </View>
  );
};

const ModuleDetail = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handleNavigate = () => {
    navigate("moduleHome");
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button title="go to module home" onPress={handleNavigate} />
    </View>
  );
};

/**
 * @returns JSX
 */
export function ModulesRoutes() {
  return (
    <Navigator.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Navigator.Screen name="moduleHome" component={ModuleHome} />
      <Navigator.Screen name="moduleDetail" component={ModuleDetail} />
    </Navigator.Navigator>
  );
}

function RootRoutes() {
  return (
    <NavigationContainer>
      <ModulesRoutes />
    </NavigationContainer>
  );
}

export default RootRoutes;

export type { Routes as ModuleRoutesType };
