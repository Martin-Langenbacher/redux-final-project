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
  // const newUsers = {};
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
