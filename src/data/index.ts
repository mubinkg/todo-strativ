'use server';

export type Answer = {
  id: number;
  userName: string;
  answer: string;
};

export type QuestionType = {
  id?: number;
  question: string;
  answers?: Answer[];
};

export type UserType = {
  userName: string;
  password?: string;
  role: string;
};

const users: UserType[] = [
  {
    userName: 'admin',
    password: 'admin',
    role: 'admin',
  },
  {
    userName: 'user',
    password: 'user',
    role: 'user',
  },
  {
    userName: 'user1',
    password: 'user1',
    role: 'user',
  },
  {
    userName: 'user2',
    password: 'user2',
    role: 'user',
  },
];

let questions: QuestionType[] = [
  {
    id: 1,
    question: 'Question one',
    answers: [],
  },
];

export async function getQuestions({
  userName,
  role,
}: {
  userName: string;
  role: string;
}) {
  if (role === 'user') {
    return questions.map(question => {
      question.answers = question.answers?.filter(
        ans => ans.userName === userName,
      );
      return question;
    });
  }

  return questions;
}

export async function addQuestion(question: QuestionType) {
  question.id = questions.length + 1;
  question.answers = [];
  questions.push(question);
}

export async function updateQuestionData(
  questionId: number,
  updatedQuestion: string,
) {
  console.log(questionId, updatedQuestion);
  console.log(questions);
  questions = questions.map(question => {
    if (question.id === questionId) {
      question.question = updatedQuestion;
    }
    return question;
  });
}

export async function deleteQuestion(questionId: number) {
  questions = questions.filter(question => question.id !== questionId);
}

export async function addAnswer({
  questionId,
  ans,
}: {
  questionId: number;
  ans: string;
}) {
  questions = questions.map(question => {
    if (question.id === questionId) {
      question.answers?.push({
        id: question.answers.length + 1,
        answer: ans,
        userName: 'user',
      });
    }
    return question;
  });
}

export async function updateAnswerData({
  questionId,
  answerId,
  updatedAnswer,
}: {
  questionId: number;
  answerId: number;
  updatedAnswer: string;
}) {
  questions = questions.map(qustion => {
    if (qustion.id === questionId) {
      qustion.answers = qustion.answers?.map(answer => {
        if (answer.id === answerId) {
          answer.answer = updatedAnswer;
        }
        return answer;
      });
    }
    return qustion;
  });
}

export async function getUser({
  userName,
  password,
}: {
  userName: string;
  password: string;
}) {
  return users.find(
    user => user.userName === userName && user.password === password,
  );
}
