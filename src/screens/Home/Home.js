import { promotion, list_order, menu, box_order } from '../../assets/icons/index'
import { View, StyleSheet, ScrollView, FlatList, Text, TouchableOpacity } from "react-native"
import Header from "./components/Header"
import { myColors, myFonts, WINDOW_WIDTH } from "../../utils"
import OptionItem from "./components/OptionItem"
import Slider from './components/Slider'
import { useNavigation } from '@react-navigation/native'
import ListCombo from './components/ListCombo'
import NewsItem from './components/NewsItem'
import { Icon } from '../../components'
import { useState } from 'react'


const Home = () => {
   const [seeMore, setSeemore] = useState(false)
   const navigation = useNavigation()


   const dataProduct = [
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

   const dataSlider = [
      { image: require('../../assets/images/banner-1.png') },
      { image: require('../../assets/images/banner-2.png') },
      { image: require('../../assets/images/banner-3.png') },
      { image: require('../../assets/images/banner-4.png') },
      { image: require('../../assets/images/banner-5.png') },
   ]

   const data = [
      { title: 'ĐẶT HÀNG NGAY', image: box_order },
      { title: 'TIỆC SINH NHẬT', image: box_order },
      { title: 'ĐƠN HÀNG LỚN', image: box_order },
   ]


   return (
      <View style={styles.container}>
         <ScrollView
            showsVerticalScrollIndicator={false}>
            <Header name="Hải James" />

            <View style={styles.containerContent}>
               <Slider listSlider={dataSlider} />

               <View style={styles.option}>
                  <OptionItem
                     name='KHUYẾN MÃI'
                     image={promotion}
                     onPress={() => console.log('Thực đơn')} />
                  <OptionItem
                     name='THỰC ĐƠN'
                     image={menu}
                     onPress={() => navigation.navigate('Category')} />
                  <OptionItem
                     name='ĐƠN HÀNG GẦN ĐÂY'
                     image={list_order}
                     onPress={() => console.log('Thực đơn')} />
                  <OptionItem
                     name='CỬA HÀNG'
                     image={menu}
                     onPress={() => console.log('Thực đơn')} />
               </View>
               <ListCombo listProduct={dataProduct} />
            </View>

            <View style={styles.news}>
               <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 5 }}
                  data={data}
                  renderItem={({ item, index }) => (
                     <NewsItem
                        key={index}
                        title={item.title}
                        image={item.image}
                        onPress={() => console.log(item.title)} />
                  )} />
               <TouchableOpacity
                  onPress={() => setSeemore(!seeMore)}
                  activeOpacity={0.5}
                  style={styles.boxSeemore}>
                  <Text style={styles.txtSeemore}>Tin mới nhất</Text>
                  <Icon
                     name='arrow-down-circle'
                     color={myColors.primary}
                     size={35} />
               </TouchableOpacity>
               {seeMore &&
                  <Text style={{ color: 'black' }}>ABC</Text>
               }
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
      paddingBottom: 5
   },
   option: {
      paddingVertical: 15,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly'
   },
   news: {
      backgroundColor: myColors.background,
      paddingBottom: 30,
      paddingTop: 15,
   },
   boxSeemore: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: WINDOW_WIDTH,
      padding: 10
   },
   txtSeemore: {
      fontFamily: myFonts.extraBold,
      color: myColors.textBlack,
      fontSize: 22,
      marginRight: 5
   }
})