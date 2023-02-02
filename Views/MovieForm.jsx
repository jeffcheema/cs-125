import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Question = ({ question, choices, onPress }) => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{question}</Text>
      {choices.map((choice, index) => (
        <TouchableOpacity
          key={index}
          style={styles.choiceButton}
          onPress={() => onPress(choice)}>
          <Text style={styles.choiceText}>{choice}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const MovieForm = () => {
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      question: 'What is your favorite movie genre?',
      choices: ['Action', 'Comedy']
    },
    {
      question: 'Do you prefer to watch movies at home or in the theater?',
      choices: ['Home', 'Theater']
    },
    {
      question: 'Do you prefer to watch movies in English or with subtitles?',
      choices: ['English', 'Subtitles']
    }
  ];

  return (
    <View style={styles.container}>
      {questions.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          choices={question.choices}
          onPress={choice => setAnswers({ ...answers, [index]: choice })}
        />
      ))}
      <Text style={styles.answersText}>{JSON.stringify(answers)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  questionContainer: {
    marginBottom: 20
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10
  },
  choiceButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10
  },
  choiceText: {
    fontSize: 16
  },
  answersText: {
    marginTop: 20,
    fontSize: 16
  }
});

export default MovieForm;
