import { Button, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const CreateCard = () => {
  return (
    <Card style={Styles.container}>
      <Card.Content>
        <Title>Geeks For Geeks</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3-200x200.png",
        }}
      />
      <Card.Content>
        <Paragraph>A Computer Science portal for Geeks</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title="Add to Favourites"></Button>
      </Card.Actions>
    </Card>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});
export default CreateCard;