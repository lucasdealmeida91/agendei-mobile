import { FlatList, Text, View } from "react-native"
import { styles } from "./calendar.style"
import { appointments } from "../../constants/data"
import icon from "../../constants/icon"
import Appointment from "../../components/appointment/appointment"

function Calendar() {
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços medicos</Text>
        <FlatList data={appointments} keyExtractor={item => item.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Appointment  service={item.service} doctor={item.doctor} specialty={item.specialty} />
            }} />
    </View>
}


export default Calendar