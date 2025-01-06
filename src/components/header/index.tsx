import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Ionicons, Feather} from '@expo/vector-icons';


const Header = () => {
  return (
    <View className= 'flex-row w-full items-center justify-between'>
        <Pressable className= 'bg-white w-10 h-10 rounded-full flex items-center justify-center'>
            <Ionicons name="menu" size={20} color="#121212" />
        </Pressable>

        <View className= 'flex flex-col items-center justify-center'>
            <Text className= 'text-slate-700 text-sm font-bold'>Localização</Text> 
            <View className= 'flex flex-row items-center justify-center gap-1'>
                <Feather name="map-pin" size={14} color="#ff0000"/>
                <Text className='text-lg font-bold'>Garça-SP</Text>
            </View>
        </View>

        <Pressable className= 'bg-white w-10 h-10 rounded-full flex items-center justify-center'>
            <Feather name="bell" size={20} color="#121212" />
        </Pressable>
    </View>
  )
}

export default Header