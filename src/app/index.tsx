import { ScrollView, Text, View } from "react-native";

import Header from "../components/header";
import Banner from "../components/banner";
import Search from "../components/search";
import {Section} from "../components/section";


import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className= 'bg-slate-200' showsVerticalScrollIndicator={false} 
    >
      <View className= 'w-full mt-4 px-4' style={{ marginTop: statusBarHeight + 8}}>
        <Header/>
        <Banner/>
        <Search/>
      </View>
      <Section
        name="Comidas em alta"
        size="text-lg"
        label='veja mais'
        action={ () => console.log("CLICOU EM VEJA MAIS ")}
      />
    </ScrollView>
  );
}
