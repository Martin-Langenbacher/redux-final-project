export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}

export function formatQuestion(question, author, authedUser) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    id,
    name,
    timestamp,
    avatar: avatarURL,
    optionOne,
    optionTwo,
  };
}

export function usersWithAnswers(questions, users) {
  const newCombinedObject = {};
  let objectPerUser = {};
  const arrayUserAndCounts = [];

  for (const key in users) {
    if (users.hasOwnProperty(key)) {
      newCombinedObject[key] = users[key];
    }
  }

  // through all users
  for (const key in users) {
    let count = 0;
    let user = users[key].id;

    // through all questions
    for (const key in questions) {
      if (
        questions[key].optionOne.votes.includes(user) ||
        questions[key].optionTwo.votes.includes(user)
      ) {
        count++;
      }
    }

    objectPerUser = {
      id: user,
      answered: count,
    };

    arrayUserAndCounts.push(objectPerUser);
  }

  Object.entries(newCombinedObject).forEach(([key, value]) => {
    for (let i = 0; i < arrayUserAndCounts.length; i++) {
      if (key === arrayUserAndCounts[i].id) {
        newCombinedObject[key].answered = arrayUserAndCounts[i].answered;
      }
    }
  });

  return newCombinedObject;
}

export function getIdsForNewQuestions(authedUser, questions) {
  // Convert to an array - to filter
  const questionsArray = Object.values(questions);

  const iDsForNewQuestions = questionsArray.filter(
    (question) =>
      !question.optionOne?.votes.includes(authedUser) &&
      !question.optionTwo?.votes.includes(authedUser)
  );

  iDsForNewQuestions.sort((a, b) => b.timestamp - a.timestamp);

  // Convert the filtered array back to an object
  const iDsForNewQuestionsObject = iDsForNewQuestions.reduce(
    (acc, question) => {
      acc[question.id] = question;
      return acc;
    },
    {}
  );

  return iDsForNewQuestionsObject;
}

export function getIdsForDoneQuestions(authedUser, questions) {
  // Convert to an array - to filter
  const questionsArray = Object.values(questions);

  const iDsForDoneQuestions = questionsArray.filter(
    (question) =>
      question.optionOne?.votes.includes(authedUser) ||
      question.optionTwo?.votes.includes(authedUser)
  );

  iDsForDoneQuestions.sort((a, b) => b.timestamp - a.timestamp);

  // Convert the filtered array back to an object
  const iDsForDoneQuestionsObject = iDsForDoneQuestions.reduce(
    (acc, question) => {
      acc[question.id] = question;
      return acc;
    },
    {}
  );

  return iDsForDoneQuestionsObject;
}
