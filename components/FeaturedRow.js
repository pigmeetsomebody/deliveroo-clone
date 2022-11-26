import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

const FeaturedRow = ({ id, title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="tetxt-xs text-gray-500 px-4">{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false}>
        {/* ResturantCards */}
        {restaurants?.map((resturant) =>
          <ResturantCard
            key={resturant.id}
            id={resturant.id}
            imgUrl={resturant.imgUrl}
            title={resturant.name}
            rating={resturant.rating}
            genre={resturant.genre}
            address={resturant.address}
            short_description={resturant.name}
            dishes={resturant.dishes}
            long={20}
            lat={0}
          />
        )}
        
      </ScrollView>
    </View>
  )
}

export default FeaturedRow;