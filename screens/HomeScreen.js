import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    AdjustmentsHorizontalIcon,
    AdjustmentsVerticalIcon,
    ChevronDownIcon,
    UserIcon,
    SearchIcon
} from "react-native-heroicons/outline"
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import axios from 'axios'


const HomeScreen = () => {

    const navigation = useNavigation();
    //const [featureCategories, setFeatureCategories] = useState([]);
    const [featureCategories, setFeatureCategories] = useState([]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    // 第一次启动组件的时候拉取，之后便不再拉取
    useEffect(() => {
        axios.get("http://192.168.1.4:3000", {
        method: 'GET',
       })
       .then((response) => setFeatureCategories(response.data))
    }, []);
    console.log(featureCategories);
  return (
    <SafeAreaView className="bg-white pt-5">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image source={{
                uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
            <Text className="font-bold text-xl">Current Location
                <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
            </View>
            <UserIcon size={20} color="#00CCBB" />
        </View>
        {/* Search */}
        <View className="flex-row space-x-2 items-cente p-3">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <TextInput placeholder='Restaurants and cuisines' keyboardType='default'/>
            </View>
            <AdjustmentsVerticalIcon color="#00CCBB"/>
        </View>
        {/* Body */}
        <ScrollView>
            { /* Category */ }
            <Categories />
            {/* {featureCategories.map((category) => {
                <FeaturedRow 
                id="123"
                title="Featured"
                description="Paid placements from our partners"
                featureCategory="featured"
                />
            })} */}
            { /* Feature Row */ }
            
            {featureCategories?.map((category) =>
                <FeaturedRow
                    key={category.id}
                    id={category.id}
                    title={category.name}
                    description={category.description}
                    restaurants={category.restaurants}
                />
            )}
            
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;