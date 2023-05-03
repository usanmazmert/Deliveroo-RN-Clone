import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import FA5 from "react-native-vector-icons/FontAwesome5"
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket } from '../reducers/basketSlice'

const DishRow = ({id, name, description, price, image}) => {

    const [isPressed, setIsPressed] = useState(false);
    const dispatch = useDispatch();
    const items = useSelector(store => store.basket.items.filter(item => item.id === id));
    const addItemToBasket = () => {
        dispatch(addToBasket({id, name, description, price, image}));
    }

    const removeItemFromBasket = () => {
        if(!items.length > 0)return;
        
        dispatch(removeFromBasket({id}));
    }
  return (
    <>
        <TouchableOpacity className={`bg-white border p-4 border-gray-200 ${isPressed && "border-b-0"}`} onPress={() => setIsPressed(!isPressed)}>
            <View className="flex-row">
                <View className="flex-1 pr-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <Text className="text-gray-400 mt-2">
                        £{price}
                    </Text>
                </View>
                <View>
                    <Image 
                    style={{
                        borderWidth: 1,
                        borderColor: "#F3F3F4"
                    }} 
                    source={{
                        uri: urlFor(image).url()
                    }}
                    className="h-20 w-20 bg-gray-300 p-4" />
                </View>
            </View>
        </TouchableOpacity>
        {
            isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">
                        <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
                            <FA5 name="minus-circle" color={items.length > 0 ? "#00ccbb" : "gray"} size={25}/>
                        </TouchableOpacity>
                        <Text>{items?.length}</Text>
                        <TouchableOpacity onPress={addItemToBasket}>
                            <FA5 name="plus-circle" color="#00ccbb" size={25}/>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    </>
  )
}

export default DishRow