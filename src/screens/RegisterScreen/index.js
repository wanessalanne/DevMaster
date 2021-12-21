import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
} from "react-native";
import { Button as PaperButton } from "react-native-paper";
export default function RegisterScreen({ navigation }) {
  const [user, setUser] = useState({
    name: "",
    document: "",
    kind: "cpf",
    email: "",
    password: "",
    password_confirmation: "",
    active: "true",
    profile: "indicator",
  });

  function submit() {
    var myHeaders = new Headers();
    myHeaders.append("x-auth-token", "cPPCjhmpRnBxJCEhZQ6c");

    var formdata = new FormData();
    formdata.append("user[name]", user.name);
    formdata.append("user[document]", user.document);
    formdata.append("user[document_kind]", user.kind);
    formdata.append("user[email]", user.email);
    formdata.append("user[password]", user.password);
    formdata.append("user[password_confirmation]", user.password_confirmation);
    formdata.append("user[active]", user.active);
    formdata.append("user[profile]", user.profile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };

    fetch(
      "https://master-future-server-ptf6f.ondigitalocean.app/api/v1/users/",
      requestOptions
    )
      .then((response) => response.text())
      .then(() => {
        () => navigation.navigate("LoginScreen");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>Criar sua conta</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            keyboardType="email"
            value={user.name}
            style={styles.input}
            placeholder="Nome"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <TextInput
            value={user.document}
            style={styles.input}
            placeholder="CPF"
            onChange={(e) => setUser({ ...user, document: e.target.value })}
          />
          <Picker enable="false" value={user.kind} style={styles.input}>
            <Picker.Item label="CPF" value="cpf" />
          </Picker>
          <TextInput
            value={user.email}
            style={styles.input}
            placeholder="E-mail"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <TextInput
            secureTextEntry={true}
            value={user.password}
            style={styles.input}
            placeholder="Senha"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <TextInput
            secureTextEntry={true}
            value={user.password_confirmation}
            style={styles.input}
            placeholder="Confirme sua senha"
            onChange={(e) =>
              setUser({ ...user, password_confirmation: e.target.value })
            }
          />
        </View>
        <PaperButton
          onPress={submit}
          style={[styles.buttonStyle]}
          labelStyle={styles.label}
        >
          Cadastrar
        </PaperButton>
        <Text style={styles.links} onPress={()=> navigation.navigate("LoginScreen")}>
          Já tenho conta
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CB0506",
    alignItems: "center",
    justifyContent: "center",
    boxSixing: "border-box",
  },
  background: {
    flex: 1,
    width: "100vw",
    height: "100vh",
  },
  text: {
    color: "#000",
    fontSize: "2rem",
  },
  logo: {
    width: "150px",
    height: "150px",
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputWrapper: {
    marginTop: "60px",
  },
  input: {
    backgroundColor: "rgba(247, 72, 73, 0.57);",
    width: "320px",
    height: "55px",
    borderRadius: "36px",
    textAlign: "center",
    placeholderTextColor: "#fff",
    fontSize: "0.9rem",
    marginBottom: "20px",
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: "320px",
    borderRadius: "36px",
    height: "55px",
    backgroundColor: "#fff",
  },
  label: {
    color: "#000",
  },
  links: {
    color: "#000",
    fontSize: "1.1rem",
    paddingTop: "10px",
  },
});
