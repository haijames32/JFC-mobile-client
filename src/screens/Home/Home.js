import thuc_don from '../../assets/icons/thuc-don.png'
import { useState } from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import Header from "./components/Header"
import { myColors, WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils"
import OptionItem from "./components/OptionItem"
import Slider from './components/Slider'
import { FlashList } from '@shopify/flash-list'
import Product from '../../items/Product'
import { useNavigation } from '@react-navigation/native'


const Home = () => {
   const navigation = useNavigation()

   const data = [
      { id: 1, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 2, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 3, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 4, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 5, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 6, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 7, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 8, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
      { id: 9, name: '2 Miếng gà giòn', price: 33000, image: 'https://ik.imagekit.io/haijames32/fried-chicken.png' },
   ]

   const data2 = [
      { image: require('../../assets/images/banner-1.png') },
      { image: require('../../assets/images/banner-2.png') },
      { image: require('../../assets/images/banner-3.png') },
      { image: require('../../assets/images/banner-4.png') },
      { image: require('../../assets/images/banner-5.png') },
   ]

   const data1 = [
      { image: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/279406869_5091666084213502_4267585674804730292_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEbfTcq-e2rnafqWDn7I-z2hiYtHYgGS9-GJi0diAZL35MmXJvLTK4zqfpb3WxrzQVKJtkBbQ0Ca7kTO7u-u6c1&_nc_ohc=qpqjIsicCUcQ7kNvgExIh1A&_nc_ht=scontent.fhan18-1.fna&oh=00_AYBFnai4gVlQ8j5Jnly8SEtZALVAr0TiudgbJNPOy7GS0A&oe=66B69800' },
      { image: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/373539148_678999674252758_2161704555419808933_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGkzsNO7wAfuGqUvDRO7e5zADM6dwfeH5IAMzp3B94fkoy2MWN28JMcfTENfGans54sJcMwM6RPqEEqFdBwY74w&_nc_ohc=wkEzHIDYZWQQ7kNvgHF54xm&_nc_ht=scontent.fhan18-1.fna&oh=00_AYBAT-R0fYKBrW43pK6FMyR0EhG-bw6D4DL15n22aEgLhA&oe=66B669DA' },
      { image: 'https://www.tiendauroi.com/wp-content/uploads/2020/04/92459813_2906007092779423_1321950681275301888_o.jpg' }
   ]

   return (
      <View style={styles.container}>
         <Header name="Hải James" />
         <ScrollView
            showsVerticalScrollIndicator={false}>
            <View style={styles.containerContent}>
               <Slider listSlider={data2} />
               <View style={styles.option}>
                  <OptionItem
                     name='KHUYẾN MÃI'
                     image={thuc_don}
                     onPress={() => console.log('Thực đơn')} />
                  <OptionItem
                     name='THỰC ĐƠN'
                     image={thuc_don}
                     onPress={() => navigation.navigate('Category')} />
                  <OptionItem
                     name='ĐƠN HÀNG GẦN ĐÂY'
                     image={thuc_don}
                     onPress={() => console.log('Thực đơn')} />
                  <OptionItem
                     name='CỬA HÀNG'
                     image={thuc_don}
                     onPress={() => console.log('Thực đơn')} />
               </View>
               <View>
                  <FlashList
                     horizontal
                     pagingEnabled
                     data={data}
                     estimatedItemSize={WINDOW_WIDTH - 20}
                     keyExtractor={item => item.id}
                     renderItem={({ item }) => (
                        <Product
                           name={item.name}
                           price={item.price}
                           image={item.image}
                           onPress={() => console.log(item.id)} />
                     )}
                  />
               </View>
               <View style={styles.news}>

               </View>
            </View>
         </ScrollView>
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: myColors.background,
   },
   containerContent: {
      backgroundColor: myColors.primary2,
      paddingBottom: 20
   },
   option: {
      paddingVertical: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
   },
   news: {
      backgroundColor: myColors.background

   }
})