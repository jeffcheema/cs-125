import { Button, StyleSheet, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

const MovieCard = ({ title, synopsis, image }) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{title}</Title>
      </Card.Content>

      <Card.Content>
        <Image source={{ uri: image }} style={styles.image} />
        <Paragraph>{synopsis}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    margin: 37,
  },
  image: {
    width: "100%",
    height: 100,
    alignSelf: "center",
    borderRadius: 5,
  },
});

export default MovieCard;
