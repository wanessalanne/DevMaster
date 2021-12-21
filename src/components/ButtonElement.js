import styled from "styled-components/native";

export default function ButtonElement(props) {
  return (
    <Button onPress={props.onPress}>
      <Label>{props.children}</Label>
    </Button>
  );
}

const Button = styled.TouchableHighlight`
  width: 345px;
  height: 83px;
  border: 5px solid #cb0506;
  border-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 5px;
`;

const Label = styled.Text`
  font-weight: 700;
  align-self: center;
  padding: 10px;
  color: #000;
  font-size: 18px;
`;
