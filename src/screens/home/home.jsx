import { FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import { doctors } from "../../constants/data"
import Doctor from "../../components/doctor/doctor"
import icon from "../../constants/icon"
function Home() {
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços medicos</Text>
        <FlatList data={doctors} keyExtractor={item => item.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Doctor name={item.name} specialty={item.specialty} icon={item.icon == "M" ? icon.male : icon.female} />
            }} />
    </View>
}


export default Home