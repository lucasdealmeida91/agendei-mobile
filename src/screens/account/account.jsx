import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import icon from "../../constants/icon"
import { styles } from "../account/account.style"
import Button from "../../components/button/button"
import { useState } from "react"
import api from "../../constants/api"

function Account(props) {


    async function HandleResgister(email, password, name) {
        try {
            const response = await api.post("/users/register", {
                name,
                email,
                password,

            })
            if (response.status == 201) {
                console.log(response.data)
            }
        } catch (error) {
            if (error.response.data.error) {
                Alert.alert(error.response.data.error)
            }
            else {
                Alert.alert("Ocorreu um erro ao tentar criar uma conta")
            }
        }

    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    return <View style={styles.container}>
        <View style={styles.containerLogo}>
            <Image source={icon.logo} style={styles.logo} />
        </View>
        <View >
            <TextInput placeholder="Nome" style={styles.input} onChangeText={(textName) => setName(textName)} />
            <TextInput placeholder="E-mail" style={styles.input} onChangeText={(textEmail) => setEmail(textEmail)} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={(textPassword) => setPassword(textPassword)} />
            <Button text="Criar conta" onPress={() => HandleResgister(email, password, name)} />

        </View>
        <View style={styles.footer}>
            <Text style={styles.footerText}>Já tenho conta.</Text>
            <TouchableOpacity  onPress={() => props.navigation.goBack()}>
                <Text style={styles.footerLink}>Fazer login</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Account