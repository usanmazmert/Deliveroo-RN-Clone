import { Text, View, Image, ScrollView } from 'react-native'
import React, { Component, useLayoutEffect, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcons from "react-native-vector-icons/Feather"
import FontistoIcons from "react-native-vector-icons/Fontisto"
import { TextInput } from 'react-native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity';

export function HomeScreen(){
    const [featuredCategories, setFeaturedCategories] = useState([])
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        client.fetch(`
            *[_type == "featured"] {
                ...,
            restaurants[]->{
                ...,
                dishes[]->
            }
            }
        `).then(data => setFeaturedCategories(data)).catch(error => console.log(error))
    }, [])
    return (
      <SafeAreaView className="bg-white">
        <View className="flex-row pb-3 mx-4 space-x-2 items-center">
            <Image source={{
                uri: "https://links.papareact.com/wru"
            }} className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs ">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location<Icon name="down" size={15} color="#00ccbb"/></Text>
            </View>
            <FeatherIcons className="flex-auto" name="user" color={"#00ccbb"} size={30} /> 
        </View>
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 p-3 items-center bg-gray-200">
               <FontistoIcons name="search" size={20}/>
               <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
            </View>
            <FeatherIcons name="settings" size={30} color={"#00ccbb"} />
        </View>
        <ScrollView className="pb-24 bg-gray-100" contentContainerStyle={{
            paddingBottom: 120
        }}>
            {/* Categories */}
            <Categories />

            {/*Featured Row*/}
            { 
                featuredCategories?.map((item, index) => (
                    <FeaturedRow key={item._id} title={item.name} description={item.short_description}
                    id={item._id} />
                ))
            }
        </ScrollView>
      </SafeAreaView>
    )
  }

export default HomeScreen