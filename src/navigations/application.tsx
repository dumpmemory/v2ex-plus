import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tabs from './tabs';
import { defaultTheme } from '@/theme/colors';
import { Login, Profile, Topic } from '@/screens';
import { navigationRef } from './root';

const Stack = createStackNavigator();

const ApplicationNavigations = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={defaultTheme} ref={navigationRef}>
        <Stack.Navigator initialRouteName="TabNavigator">
          <Stack.Screen
            name="TabNavigator"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="topic" component={Topic} />
          <Stack.Screen
            name="profile"
            component={Profile}
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{
              title: '登录',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
