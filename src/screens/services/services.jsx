import { FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style"
import { services } from "../../constants/data"
import icon from "../../constants/icon"
import Service from "../../components/service/service"
function Services() {
    return <View style={styles.container}>
        <View style={styles.banner}>
            <Image source={icon.female} />
            <Text style={styles.name}>Lucas</Text>
            <Text style={styles.specialty}>Cardiologia</Text>
        </View>
        <FlatList data={services} keyExtractor={item => item.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Service description={item.description} price={item.price}/>
                  
            }} />
    </View>
}


export default Services
