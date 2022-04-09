import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../Screens/Feed";
import CreatePost from "../Screens/CreatePost";

const Tab = createBottomTabNavigator();

 const BottomTabNavigator = ()=>
{

 return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'book'
                : 'book-outline';
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'black',
        }}
      >
      
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
  );
}
export default BottomTabNavigator