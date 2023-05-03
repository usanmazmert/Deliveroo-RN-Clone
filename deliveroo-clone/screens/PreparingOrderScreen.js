import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Progress from "react-native-progress"

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => navigation.navigate("Delivery"), 4000)
  }, [])

  return (
    <SafeAreaView className="bg-[#00ccbb] w-full items-center justify-center h-full space-y-1">
        <Animatable.Image
            source={require("../assets/image_processing20190821-17803-12pij7c.gif")}
            animation="slideInUp"
            iterationCount={1}
            className="h-80 w-80"/>

            <Animatable.Text
                animation={"slideInUp"}
                iterationCount={1}
                className="text-lg">
                Waiting for Restaurant to accept your order!
            </Animatable.Text>

            <Progress.Circle size={60} indeterminate={true} color="white"/>

    </SafeAreaView>
  )
}

export default PreparingOrderScreen