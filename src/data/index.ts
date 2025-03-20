'use server'

type Answer = {
    userName: string,
    answer: string
}

export type QuestionType = {
    id?: number
    question: string,
    answers?: Answer[]
}

export type UserType = {
    userName: string,
    password?: string,
    role: string
}

const users: UserType[] = [
    {
        userName: "admin",
        password: 'admin',
        role: "admin"
    },
    {
        userName: "user",
        password: "user",
        role: "user"
    }
]

const questions: QuestionType[] = [
    {
        id: 1,
        question: "Question one",
        answers: []
    }
]

export async function getQuestions({ userName, role }: { userName: string, role: string }) {
    console.log(userName, role);

    return questions
}

export async function addQuestion(question: QuestionType) {
    question.id = questions.length + 1
    questions.push(question)
}

export async function deleteQuestion() {

}

export async function getUser({ userName, password }: { userName: string, password: string }) {
    return users.find(user => (user.userName === userName && user.password === password))
}