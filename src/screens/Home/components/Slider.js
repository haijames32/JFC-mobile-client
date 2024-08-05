import { FlatList, StyleSheet, View } from "react-native"
import { WINDOW_WIDTH } from "../../../utils"
import FastImage from "react-native-fast-image"
import { useRef, useState, useEffect } from "react"

const Slider = ({ listSlider = [] }) => {
   const [state, setState] = useState({
      currentIndex: 0,
      isReverse: false
   })
   const flatListRef = useRef(null)

   useEffect(() => {
      let timer
      if (listSlider.length >= 2) {
         timer = setInterval(() => {
            if (state.isReverse) {
               handlePrevious()
            } else {
               handleNext()
            }
         }, 2500)
      }

      return () => {
         if (timer) clearInterval(timer)
      }
   }, [listSlider, state])

   const handleNext = () => {
      if (state.currentIndex < listSlider.length - 1) {
         let index = state.currentIndex + 1
         setState(pre => ({ ...pre, currentIndex: index }))
         flatListRef.current?.scrollToIndex({ index })
      } else {
         let index = state.currentIndex - 1;
         setState(pre => ({ ...pre, currentIndex: index, isReverse: true }));
         flatListRef.current?.scrollToIndex({ index });
      }
   };

   const handlePrevious = () => {
      if (state.currentIndex <= 0) {
         let index = state.currentIndex + 1
         setState(pre => ({ ...pre, currentIndex: index, isReverse: false }))
         flatListRef.current?.scrollToIndex({ index })
      } else {
         let index = state.currentIndex - 1
         setState(pre => ({ ...pre, currentIndex: index }))
         flatListRef.current?.scrollToIndex({ index })
      }
   };

   const renderItem = ({ item }) => {
      return (
         <FastImage
            resizeMode="stretch"
            style={styles.img}
            source={item.image} />
      )
   }

   return (
      <View style={styles.container}>
         <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={0}
            data={listSlider}
            renderItem={renderItem}
            onScrollToIndexFailed={info => {
               const wait = new Promise(resolve => setTimeout(resolve, 500));
               wait.then(() => {
                  flatListRef.current?.scrollToIndex({ index: info.index });
               });
            }}
            onMomentumScrollEnd={event => {
               const slideIndex = Math.floor(
                  event.nativeEvent.contentOffset.x /
                  event.nativeEvent.layoutMeasurement.width,
               );
               setState(pre => ({ ...pre, currentIndex: slideIndex }));
            }} />
      </View>
   )
}

export default Slider

const styles = StyleSheet.create({
   container: {
      width: WINDOW_WIDTH,
      height: 420
   },
   img: {
      width: WINDOW_WIDTH,
      height: '100%'
   }
})