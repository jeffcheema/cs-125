import { Button, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const MovieCard = ({ title, synopsis }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>

      <Card.Content>
        <Paragraph>{synopsis}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button title="Add to Favourites"></Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
});

export default MovieCard;
