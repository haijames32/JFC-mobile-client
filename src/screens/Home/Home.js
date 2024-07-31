import { useState } from "react"
import { View, Button, StyleSheet } from "react-native"
import DatePicker from "react-native-date-picker"


const Home = () => {
   const [date, setDate] = useState(new Date())
   const [open, setOpen] = useState(false)

   const getDate = (date) => {
      setOpen(false)
      const newDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
      setDate(newDate)
   }

   return (
      <View style={styles.container}>
         <Button title="Open" onPress={() => setOpen(true)} />
         <DatePicker
            style={styles.datePicker}
            modal
            mode="date"
            open={open}
            date={date}
            maximumDate={new Date()}
            onConfirm={(date) => {
               setOpen(false)
               setDate(date)
            }}
            onCancel={() => {
               setOpen(false)
            }}
         />
      </View>
   )
}

export default Home

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center"
   },
   datePicker: {
      top: 10
   }
})