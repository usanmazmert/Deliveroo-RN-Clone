import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {useSelector} from "react-redux"
import { TouchableOpacity } from 'react-native-gesture-handler'

const BasketIcon = () => {
    const navigation = useNavigation()
    const items = useSelector(state => state.basket.items)
    const basketTotal = useSelector((state) => state.basket.items.reduce((total, item) => total+=item.price, 0))
  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity className="bg-[#00ccbb] p-4 w-[95%] mx-auto rounded-lg flex-row items-center" onPress={() => navigation.navigate("Basket")}>
            <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
                {items.length}
            </Text>
            <Text className="flex-1 text-white font-extrabold text-lg text-center ">View Basket</Text>
            <Text className="text-lg text-white font-extrabold">£{basketTotal}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default BasketIcon