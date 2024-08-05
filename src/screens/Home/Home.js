import thuc_don from '../../assets/icons/thuc-don.png'
import { useState } from "react"
import { View, StyleSheet } from "react-native"
import Header from "./components/Header"
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils"
import OptionItem from "./components/OptionItem"


const Home = () => {

   return (
      <View style={styles.container}>
         <Header name="Hải James" />

         <View style={{ height: 390, backgroundColor: 'green' }}></View>

         <View style={styles.option}>
            <OptionItem
               name='KHUYẾN MÃI'
               image={thuc_don}
               onPress={() => console.log('Thực đơn')} />
            <OptionItem
               name='THỰC ĐƠN'
               image={thuc_don}
               onPress={() => console.log('Thực đơn')} />
            <OptionItem
               name='ĐƠN HÀNG GẦN ĐÂY'
               image={thuc_don}
               onPress={() => console.log('Thực đơn')} />
            <OptionItem
               name='CỬA HÀNG'
               image={thuc_don}
               onPress={() => console.log('Thực đơn')} />
         </View>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   option: {
      paddingVertical: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
   },
})