import React, { useContext, useState } from "react";
import backgroundImage from "../../assets/background.png";
import UserContext from "../../context/userContext";
import styled from "styled-components/native";
import logo from "../../assets/logo.png";

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState({ email: "", password: "" });
  const { setUserData } = useContext(UserContext);

  function submit() {
    var formdata = new FormData();
    formdata.append("user[email]", user.email);
    formdata.append("user[password]", user.password);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `https://master-future-server-ptf6f.ondigitalocean.app/api/v1/auth/sign_in`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        () => {
          setUserData(result);
          navigation.navigate("Dashboard");
        };
      })
      .catch((error) => console.log("error", error));
  }
  return (
    <Main>
      <BackgroundImageHolder source={backgroundImage}>
        <TextHolder>
          <Image source={logo} />
          <Text>Seja bem vindo</Text>
          <InputHolder>
            <Input
              value={user.email}
              placeholderTextColor="#fff"
              placeholder="E-mail"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></Input>
            <Input
              value={user.password}
              secureTextEntry={true}
              placeholderTextColor="#fff"
              placeholder="Senha"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            ></Input>
          </InputHolder>
          <ButtonElement onPress={submit}>
            Entrar
          </ButtonElement>
        </TextHolder>
      </BackgroundImageHolder>
    </Main>
  );
}

function ButtonElement(props) {
  return (
    <Button onPress={props.onPress}>
      <Label>{props.children}</Label>
    </Button>
  );
}

const Button = styled.TouchableHighlight`
  width: 320px;
  height: 54px;
  border: 5px solid #fff;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 5px;
  background-color: #fff;
  margin-top: 20px;
`;

const Label = styled.Text`
  font-weight: 700;
  align-self: center;
  padding: 10px;
  color: #000;
  font-size: 18px;
`;

const Main = styled.SafeAreaView`
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

const BackgroundImageHolder = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const TextHolder = styled.View`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 2rem;
  padding-top: 150px;
`;

const InputHolder = styled.View`
  margin-top: 80px;
  gap: 20px;
`;

const Input = styled.TextInput`
  width: 320px;
  height: 55px;
  background-color: rgba(247, 72, 73, 0.57);
  border-radius: 36px;
  text-align: center;
  font-size: 0.9rem;
`;
