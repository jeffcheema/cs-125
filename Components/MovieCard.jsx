import { Button, StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const MovieCard = ({ id, uri, title, synopsis }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>
      <Card.Cover
        source={{
          uri,
        }}
      />
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
    width: 350,
    alignContent: "center",
    margin: 37,
  },
});

export default MovieCard;
