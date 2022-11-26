import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Money } from 'react-format'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline';
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemWithItemId } from '../features/basketSlice';
// npm i react-currency-fomatter
const DishRow = ({
    id,
    name,
    description,
    price,
    image
}) => {
    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const addItemsToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}));
    }
    const removeItemsFromBasket = () => {
        if (items.length > 0) {
            dispatch(removeFromBasket({id}));
        }
    }
    //const items = useSelector((state) => state.basket.items);
    const items = useSelector((state) => state.basket.items.filter((item) => item.id === id));

  return (
    <>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)} className={`bg-white border p-4 border-gray-200 ${isPressed
     && "border-b-0"}`}>
        <View className="flex-row">
            <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">
                {name}
            </Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
                ${price}
            </Text>
            </View>
        <View>
            <Image source={{uri: image}}
                className="h-20 w-20 bg-gray-300 p-4"
                style={{
                    borderWidth: 1,
                    borderColor: "#F3F3F4",
                }}></Image>
        </View>
        </View>
    </TouchableOpacity>
    {isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity onPress={removeItemsFromBasket}>
                    <MinusCircleIcon color={items.length > 0 ? "#00CCBB" : "gray"} size={40}></MinusCircleIcon>
                </TouchableOpacity>
                <Text>{items.length}</Text>
                <TouchableOpacity onPress={addItemsToBasket}>
                    <PlusCircleIcon color={"#00CCBB"} size={40}></PlusCircleIcon>
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  );
}

export default DishRow;