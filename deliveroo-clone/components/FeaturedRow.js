import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from "react-native-vector-icons/AntDesign"
import { ScrollView } from 'react-native'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({title, description, id}) => {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type == "featured" && _id == $id] {
                ...,
            restaurants[]->{
                ...,
                dishes[]->,
                type-> {
                  name
                }
            }
            }[0]
    `, {id}).then(data => setRestaurants(data?.restaurants)).catch(error => console.log(error))
  }, [])

  return (
    <View className="mb-4">
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="text-lg font-bold">{title}</Text>
            <AntDesign name="arrowright" size={20} color="#00ccbb" />
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>
        <ScrollView horizontal className="pt-4" showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 15,
        }}>
            {restaurants?.map((item, index) => {
              return (
                <RestaurantCard key={index} id={item._id} imgUrl={item.image}
                title={item.name}
                rating={item.rating}
                genre={item.type?.name}
                address={item.address}
                short_description={item.short_description}
                dishes={item.dishes}
                long={item.long}
                lat={item.lat} />
              )
            })}

        </ScrollView>
    </View>
  )
}

export default FeaturedRow