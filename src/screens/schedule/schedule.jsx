import { Text, View } from "react-native"
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../../constants/calendar"
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Button from "../../components/button/button"
LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';
function Schedule() {
    const [selectedDate, setSelectedDate] = useState("");//new Date().toISOString().slice(0, 10)
    const [selectedHour, setSelectedHour] = useState("");


    return <View style={styles.container}>
        <View >
        <Calendar theme={styles.theme}
            onDayPress={day => setSelectedDate(day.dateString)}
            markedDates={{ [selectedDate]: { selected: true, } }}
            minDate={new Date().toString()}

        />
        <View>
            <Text style={styles.textHour}>Horário</Text>
        </View>
        <View>
            <Picker selectedValue={selectedHour} onValueChange={(itemValue, itemIndex) => setSelectedHour(itemValue)}>
                <Picker.Item label="10:00" value="10:00" />
                <Picker.Item label="11:00" value="11:00" />
                <Picker.Item label="12:00" value="12:00" />
            </Picker>
        </View>
        </View>
        <View>
            <Button text="Confirmar reserva"/>
        </View>
    </View>
}

export default Schedule

//Projeto Calendario: https://github.com/wix/react-native-calendars
//Projeto Picker: https://github.com/react-native-picker/picker