import { StyleSheet, View } from "react-native"
import { Dropdown } from 'react-native-element-dropdown'
import { myColors, myFonts } from "../utils"

const InputDropdown = ({ data, value, onChangeValue }) => {
   return (
      <Dropdown
         style={styles.dropdown}
         placeholderStyle={styles.placeholderStyle}
         selectedTextStyle={styles.selectedTextStyle}
         inputSearchStyle={styles.inputSearchStyle}
         iconStyle={styles.iconStyle}
         itemTextStyle={styles.itemTextStyle}
         data={data}
         maxHeight={200}
         labelField="label"
         valueField="value"
         placeholder="Gender"
         value={value}
         onChange={item => {
            onChangeValue(item.value);
         }}
      />
   )
}

export default InputDropdown

const styles = StyleSheet.create({
   dropdown: {
      marginTop: 8,
      backgroundColor: myColors.textWhile,
      borderRadius: 8,
      height: 55,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
   },
   icon: {
      marginRight: 5,
   },
   placeholderStyle: {
      fontSize: 16,
      fontFamily: myFonts.medium,
      color: myColors.textHint
   },
   selectedTextStyle: {
      fontSize: 16,
      fontFamily: myFonts.medium,
      color: myColors.textBlack,
      marginStart: 10
   },
   iconStyle: {
      width: 30,
      height: 30,
      marginEnd: 7
   },
   inputSearchStyle: {
      height: 40,
      fontSize: 16,
      fontFamily: myFonts.medium,
      color: myColors.textHint
   },
   placeholderStyle: {
      marginStart: 10,
      fontFamily: myFonts.medium,
      color: myColors.textHint
   },
   itemTextStyle: {
      fontFamily: myFonts.regular,
      color: myColors.textBlack
   }
})