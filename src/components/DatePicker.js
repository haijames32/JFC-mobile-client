import IDatePicker from "react-native-date-picker"


const DatePicker = ({ open, setOpen, setDate }) => {
   return (
      <IDatePicker
         modal
         mode="date"
         open={open}
         date={new Date()}
         maximumDate={new Date()}
         onConfirm={(date) => {
            setOpen(!open)
            setDate(date)
         }}
         onCancel={() => {
            setOpen(!open)
         }}
      />
   )
}

export default DatePicker