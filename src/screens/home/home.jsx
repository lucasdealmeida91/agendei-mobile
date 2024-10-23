import {Alert, FlatList, Text, View } from "react-native"
import { styles } from "./home.style"
import Doctor from "../../components/doctor/doctor"
import api from "../../constants/api"
import { useState,useEffect } from "react"
function Home(props) {

    function SelectDoctor(id_doctor, name, specialty, icon) {
        props.navigation.navigate("Services", { id_doctor, name, specialty, icon })

    }

    async function GetDoctors() {
        try {
            const response = await api.get("/doctors",)
            if (response.status == 200) {
                setDoctors(response.data)
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

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {

        GetDoctors()
    },[])
    return <View style={styles.container}>
        <Text style={styles.text}>Agende os seus serviços medicos</Text>
        <FlatList data={doctors} keyExtractor={item => item.id_doctor}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Doctor id_doctor={item.id_doctor} name={item.name} specialty={item.specialty} icon={item.icon}
                onPress={SelectDoctor} />
            }} />
    </View>
}


export default Home