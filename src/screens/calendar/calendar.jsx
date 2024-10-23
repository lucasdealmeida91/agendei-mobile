import { Alert, FlatList, Text, View } from "react-native"
import { styles } from "./calendar.style"
import Appointment from "../../components/appointment/appointment"
import api from "../../constants/api"
import { useState, useEffect } from "react"
function Calendar() {
    async function LoadAppointments() {
        try {
            const response = await api.get("/appointments",)
            if (response.data) {
                setAppointments(response.data)
            }
        } catch (error) {

            if (error.response.data.error) {
                Alert.alert(error.response.data.error)
            }
            else {
                Alert.alert("Ocorreu um erro ao realizar a busca")
            }
        }

    }
    async function DeleteAppointment(id_appointment) {
        try {
            const response = await api.delete("/appointment/" + id_appointment)
            if (response.data) {
                LoadAppointments()
            }
        } catch (error) {

            if (error.response.data.error) {
                Alert.alert(error.response.data.error)
            }
            else {
                Alert.alert("Ocorreu um erro ao realizar a busca")
            }
        }

    }



    const [appointments, setAppointments] = useState([]);

    useEffect(() => {

        LoadAppointments()
    }, [])
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços medicos</Text>
        <FlatList data={appointments} keyExtractor={item => item.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointment
                    id_appointment={item.id_appointment}
                    service={item.service}
                    doctor={item.doctor}
                    specialty={item.specialty}
                    booking_date={item.booking_date}
                    booking_hour={item.booking_hour}
                    onPress={DeleteAppointment}
                />
            }} />
    </View>
}


export default Calendar