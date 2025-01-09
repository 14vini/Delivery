import { Pressable, Text, Image} from 'react-native'
import { RestaurantProps } from '..'

export default function RestaurantItem({item} : {item: RestaurantProps}){
    return (
        <Pressable className='flex items-center justify-center'
        onPress={() => console.log("CLICOU NO RESTAURANTE " + item.name)}
        >
            <Image source={{uri: item.image}}
            className=' w-20 h-20 rounded-full'/>
            <Text className='text-sm mt-2 w-20 text-center leading-4 text-black' numberOfLines={2}>{item.name}</Text>
        </Pressable>
    )
}