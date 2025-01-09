import {Pressable, Text, Image, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { foodProps } from '..'; 

export default function CardHorizontalFood ({food}: {food: foodProps}){
    return(
        <Pressable className='flex flez-col rounded-xl'>
            <Image source={{uri: food.image }}
                    className='w-44 h-36 rounded-xl'/>
             <View className='flex flex-row bg-neutral-900/90 gap-1 rounded-full absolute top-2 right-3 px-2 py-1 items-center justify-center'>
                    <Ionicons name="star" size={14} color="#ca8a04"/>
                    <Text className='text-white text-sm'>{food.rating}</Text>
            </View>
            <Text className='text-green-700 font-medium text-lg'> R$ {food.price} </Text>
            <Text className='text-black mt-1'> {food.name} </Text>
            <Text className='text-neutral-600 text-sm'> {food.time} - R$ {food.delivery} </Text>
   </Pressable>
  );
}