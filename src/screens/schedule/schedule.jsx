import { Alert, Text, View } from "react-native"
import { styles } from "./schedule.style"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { ptBR } from "../../constants/calendar"
import { useState } from "react"
import { Picker } from "@react-native-picker/picker"
import Button from "../../components/button/button"
import api from "../../constants/api"

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';
function Schedule(props) {
    const id_doctor = props.route.params.id_doctor
    const id_service = props.route.params.id_service
    const [selectedDate, setSelectedDate] = useState("");//new Date().toISOString().slice(0, 10)
    const [selectedHour, setSelectedHour] = useState("");


    async function ScheduleAppointment() {
        try {
            const response = await api.post("/appointment", {
                id_doctor, id_service, booking_date: selectedDate, booking_hour: selectedHour
            })
            if (response.data?.id_appointment) {
                props.navigation.popToTop();
            }
        } catch (error) {
            if (error.response.data.error) {
                Alert.alert(error.response.data.error)
            }
            else {
                Alert.alert("Ocorreu um erro ao realizar agendamento")
            }
        }

    }

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
            <Button text="Confirmar reserva" onPress={ScheduleAppointment} />
        </View>
    </View>
}

export default Schedule

//Projeto Calendario: https://github.com/wix/react-native-calendars
//Projeto Picker: https://github.com/react-native-picker/picker