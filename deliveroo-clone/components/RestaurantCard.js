import { TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
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
}) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Restaurant", {
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
    })} className="bg-white mr-3 shadow">
        <Image source={{uri: urlFor(imgUrl).url()}} className="h-36 w-64 rounded-sm"/>
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <AntDesign name="star" color={"green"} size={22} style={{opacity: 0.5}} />
                <Text className="text-xs text-gray-500"><Text className="text-green-500">{rating}</Text> . {genre}</Text>
            </View>
            <View className="flex-row items-center space-x-1 mt-1">
                <SimpleLineIcons name="location-pin" style={{opacity: 0.4}} size={22} />
                <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard