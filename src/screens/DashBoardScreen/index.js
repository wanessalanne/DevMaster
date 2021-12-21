import React, { useContext } from "react";
import styled from "styled-components/native";
import ButtonElement from "../../components/ButtonElement";
import UserContext from "../../context/userContext";

export default function DashBoardScreen({ navigation }) {
  const { setUserData } = useContext(UserContext);

  function logout() {
    setUserData("");
    navigation.navigate("LoginScreen");
  }

  return (
    <Main>
      <Header>
        <Text>Início</Text>
      </Header>
      <Container>
        <TextContainerHeader>O que você gostaria de fazer?</TextContainerHeader>
        <ButtonHolder>
          <ButtonElement>Clientes</ButtonElement>
          <ButtonElement>Cadastrar cliente</ButtonElement>
          <ButtonElement>Histórico de pagamentos</ButtonElement>
          <ButtonElement>Conquistas</ButtonElement>
          <ButtonElement>Pesquisa de satisfação</ButtonElement>
          <ButtonElement onPress={logout}>Logout</ButtonElement>
        </ButtonHolder>
      </Container>
    </Main>
  );
}

const Main = styled.SafeAreaView`
  width: 100vw;
  height: calc(100vh - 75px);
  background-color: #cb0506;
`;

const Header = styled.View`
  width: 100%;
  display: flex;
  height: 75px;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 2rem;
`;

const Container = styled.View`
  width: 100%;
  background-color: #fff;
  height: 100%;
`;

const TextContainerHeader = styled.Text`
  color: #4f4f4fb2;
  font-size: 22px;
  padding-left: 30px;
  padding-top: 25px;
`;

const ButtonHolder = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  gap: 15px;
`;
