import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Question = ({ question, choices, onPress, selected }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
      {choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.choiceButton,
            selected === choice && styles.selectedButton,
          ]}
          onPress={() => onPress(choice)}
        >
          <Text style={styles.choiceText}>{choice}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const MovieForm = ({
  moviePreferences: answers,
  setMoviePreferences: setAnswers,
  callback,
}) => {
  const handleSubmit = () => {
    // ensure all questions are answered
    if (Object.keys(answers).length === questions.length) {
      callback(answers);
    }
  };

  const questions = [
    {
      question: "What is your favorite movie genre?",
      choices: [
        "Action",
        "Adventure",
        "Animation",
        "Comedy",
        "Crime",
        "Documentary",
        "Drama",
        "Family",
        "Fantasy",
        "Historical",
        "Horror",
        "Musical",
        "Mystery",
        "Romance",
        "Science fiction",
        "Sports",
        "Thriller",
        "War",
        "Western",
      ],
    },
    {
      question:
        "When the weather is cold, do you prefer calm, feel-good movies or intense thrillers?",
      choices: ["Calm, feel good films", "Intense thrillers"],
    },
    {
      question: "Do you prefer to watch movies in English or with subtitles?",
      choices: ["English", "Subtitles"],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          choices={question.choices}
          selected={answers[index]}
          onPress={(choice) => setAnswers({ ...answers, [index]: choice })}
        />
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
  },
  choiceButton: {
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedButton: {
    backgroundColor: "#1DA1F2",
  },

  choiceText: {
    fontSize: 16,
  },
  answersText: {
    marginTop: 20,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "#1DA1F2",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default MovieForm;
