import {View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Search(){
    return (
        <View className='bg-transparent w-full h-14 flex-row  border border-slate-500 rounded-full items-center gap-2 px-4'>
            <Feather name='search' size={24} color='#64748b' className=''/>
            <TextInput placeholder='Procuro sua comida...'
            className= 'w-ful h-full flex-1 bg-transparent'/>
        </View>
    )
}