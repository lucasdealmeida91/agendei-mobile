import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import icon from "../../constants/icon"
import { styles } from "./login.style"
import Button from "../../components/button/button"
import { useState, useContext } from "react"
import api from "../../constants/api"
import { AuthContext } from "../../contexts/auth"

function Login(props) {

    const {user, setUser} = useContext(AuthContext)
    async function HandleLogin(email, password) {
        try {
         const response =   await api.post("/users/login", {
                email,
                password
            })
            if (response.status == 200) {
                api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`
                setUser(response.data)
            }
        } catch (error) {
            if (error.response?.data?.error) {
                Alert.alert(error.response.data.error)
            }
            else {
                Alert.alert("Ocorreu um erro no login")
            }
        }
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>
        <View >
            <TextInput placeholder="E-mail" style={styles.input} onChangeText={(textEmail) => setEmail(textEmail)} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={( textPassword) => setPassword(textPassword)} />
            <Button text="Acessar" onPress={() => HandleLogin(email, password)} />

        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Não tenho conta. </Text>
            <TouchableOpacity  onPress={() => props.navigation.navigate("Account")}>
                <Text style={styles.footerLink}>Criar conta agora.</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login