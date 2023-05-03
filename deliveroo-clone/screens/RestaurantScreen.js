import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import DishRow from '../components/DishRow';
import React, {useLayoutEffect, useEffect} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import FA5 from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import BasketIcon from '../components/BasketIcon';
import {useDispatch} from "react-redux";
import { setRestaurant } from '../reducers/restaurantSlice';

const RestaurantScreen = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation();
    const {params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }} = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        dispatch(setRestaurant({id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat}))
    }, [])
    


  return (
    <>
        <BasketIcon/>
        <ScrollView>
            <View className="relative">
                <Image className="w-full h-56 bg-gray-300 p-4" source={{
                    uri: urlFor(imgUrl).url()
                }} />
                <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-14 left-7 p-2 px-2.5 bg-gray-100 rounded-full">
                    <FA5 name="arrow-left" color="#00ccbb" size={15}/>
                </TouchableOpacity>
            </View>

            <View className="bg-white">
                
                <View className="px-4 pt-4">
                    <Text>{title}</Text>
                    <View className="flex-row space-x-2 my-1">
                        <View className="flex-row items-center space-x-1">
                            <AntDesign name="star" color="green" opacity={0.5} size={22}/>
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> . {genre}
                            </Text>
                        </View>

                        <View className="flex-row items-center space-x-1">
                            <SimpleLineIcons name="location-pin" style={{opacity: 0.4}} size={22} />
                            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                    <AntDesign name="questioncircleo" opacity={0.6} size={18}/>
                    <Text className="pl-2 flex-1 text-md font-bold">
                        Have a food allergy?
                    </Text>
                    <AntDesign name="right" color="#00ccbb" size={18}/>

                </TouchableOpacity>
            </View>

            <View className="pb-28">
                <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

                {/** DishRows */}

                {dishes?.map((dish) => (
                    <DishRow 
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image} />
                ))}
            </View>
        </ScrollView>
    </>
  )
}

export default RestaurantScreen