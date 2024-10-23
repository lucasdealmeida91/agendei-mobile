import { Text, View } from "react-native"
import { styles } from "./profile.style"
import api from "../../constants/api"
import { useState, useEffect } from "react"
import { Alert } from "react-native"
import Button from "../../components/button/button"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"


function Profile() {


    const {setUser} = useContext(AuthContext)
    async function GetUserData() {
        try {
            const response = await api.get("/users/profile",)
            if (response.data) {
                setName(response.data.name)
                setEmail(response.data.email)
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
    useEffect(() => {
        GetUserData()
    }, [])

    function Logout() {
        setUser({})
        api.defaults.headers.common["Authorization"] = "";
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return <View style={styles.container}>
        <View>
            <View style={styles.item}>
                <Text style={styles.title}>Nome</Text>
                <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>E-mail</Text>
                <Text style={styles.text}>{email}</Text>
            </View>
        </View>
        <View style={styles.item}>
            <Button text="Sair" theme="danger" onPress={Logout} />
        </View>
    </View>
}

export default Profile