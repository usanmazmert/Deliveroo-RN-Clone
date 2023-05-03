import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'
import client, { urlFor } from '../sanity';

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client.fetch(`
      *[_type == "category"]
    `).then(data => setCategories(data)).catch((error) => console.log(error));
  }, [])

  return (
    <ScrollView contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10
    }} horizontal showsHorizontalScrollIndicator={false}>
      {
        categories?.map((item, index) => (
          <CategoryCard key={item._id} title={item.name} imgUrl={urlFor(item.image).width(200).url()} />
        ))
      }
    </ScrollView>
  )
}