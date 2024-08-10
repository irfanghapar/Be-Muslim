import { Image, View, Text } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name ,focused }) => {
  return (
    <View>
      <Image 
        source={icon}
        resizeMode="contain"
        tintcolor={color}
        className="w-6 h-6"/>
            <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="today" options={{
          title:"",
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon 
            icon={icons.calendar}
            color= {color}
            name="Today"  
            focused={focused}
            />
          )
          }}/>
      </Tabs>
    </>
  )
}

export default TabsLayout