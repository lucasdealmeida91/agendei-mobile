import {Alert, FlatList, Image, Text, View } from "react-native"
import { styles } from "./services.style"
import icon from "../../constants/icon"
import Service from "../../components/service/service"
import api from "../../constants/api"
import { useState,useEffect } from "react"
function Services(props) {


    async function GetServices() {
        try {
            const response = await api.get("/doctors/" + id_doctor + "/services",)
            if (response.status == 200) {
                setDoctorsServices(response.data)
            }
        } catch (error) {
            if (error.response.data.error) {
                Alert.alert(error.response.data.error)
            }
            else {
                Alert.alert("Ocorreu um erro ao buscar os dados")
            }
        }

    }
    const [doctorsServices, setDoctorsServices] = useState([]);
    const id_doctor = props.route.params.id_doctor
    const name = props.route.params.name
    const specialty = props.route.params.specialty
    const iconFlag = props.route.params.icon

    function SelectService(id_service) {
        props.navigation.navigate("Schedule", { id_doctor, id_service });
    }

    useEffect(() => {
        GetServices()
    }, [])
    return <View style={styles.container}>
        <View style={styles.banner}>
            <Image source={iconFlag == "M" ? icon.male : icon.female} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.specialty}>{specialty}</Text>
        </View>
        <FlatList data={doctorsServices} keyExtractor={item => item.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Service id_service={item.id_service}
                    description={item.description}
                    price={item.price}
                    onPress={SelectService}
                />

            }} />
    </View>
}


export default Services
