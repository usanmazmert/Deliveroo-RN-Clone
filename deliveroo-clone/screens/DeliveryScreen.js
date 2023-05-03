import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Progress from "react-native-progress"
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from '@react-navigation/native'
import { selectRestaurant } from '../reducers/restaurantSlice'
import MapView, {Marker} from 'react-native-maps'
import { useSelector } from 'react-redux'

const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00ccbb] flex-1">
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between items-center p-5">
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="close" size={20}  color="white"/>
                </TouchableOpacity>
                <Text className="font-light text-white text-lg">Order Help</Text>
            </View>

            <View className="bg-white mx-5 my-2 rounded-md p-6 space-y-1 z-50 shadow-md">
                <View className="flex-row justify-between">
                    <View>
                        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                        <Text className="text-3xl font-bold">45-55 Minutes</Text>
                    </View>
                    <Image source={{uri: "https://links.papareact.com/fls"}} className="h-20 w-20"/>
                </View>

                <Progress.Bar size={20} color={"#00ccbb"} indeterminate={true}/>

                <Text>Your order at {restaurant.title} is being prepared</Text>
            </View>
        </SafeAreaView>

        <MapView
            initialRegion={{
                latitude: restaurant.lat,
                longitude: restaurant.long,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            }}
            mapType='mutedStandart'
            style={{
                height: 392,
                width: "100%",
            }}
            className="-mt-10 mx-auto"
        >
            <Marker coordinate={{
                latitude: restaurant.lat,
                longitude: restaurant.long
            }}
            title={restaurant.title}
            description={restaurant.short_description}
            identifier={"origin"}
            pinColor="#00ccbb"
            />
        </MapView>

        <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
            <Image source={{uri: "https://links.papareact.com/fls"}} className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"/>
            <View className="flex-1">
                <Text className="text-lg">
                    Mert Ali Usanmaz
                </Text>
                <Text className="text-gray-400">Your Rider</Text>
            </View>

            <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
        </SafeAreaView>
    </View>

  )
}

export default DeliveryScreen