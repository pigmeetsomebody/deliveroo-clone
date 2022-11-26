import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon, TagIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';
import { removeFromBasket } from '../features/basketSlice';

const Restaurant = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {
        params: {
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,

        }
    } = useRoute();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat,
        }));
    }, [])
  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View className="relative">
        <Image className="w-full h-56 bg-gray-300 p-4" source={{uri: imgUrl}}/>
        <TouchableOpacity 
        className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full" 
        onPress={navigation.goBack}
        >
            <ArrowLeftIcon size={20} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color='green' opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <TagIcon color='gray' opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">
                        {address}
                    </Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                <Text className="pl-2 flex-1 text-md font-bold">
                    Have a food allergy?
                </Text>
                <ChevronRightIcon color="#00CCBB" />
            </TouchableOpacity>
        </View>
      </View>

      <View className="pb-36">
        <Text className="px-4 pt-6 mb-4 font-bold text-xl">Menu</Text>
        {/* Dishes */}
        {dishes.map(dish => 
            <DishRow
                key={dish.id}
                id={dish.id}
                name={dish.title}
                image={dish.picture}
                price={dish.price}
                description={dish.description}>
            </DishRow>
        )}
      </View>
    </ScrollView>
    </>
  )
}

export default Restaurant;