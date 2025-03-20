import { getUserDetails } from "@/actions/auth"
import AddQuestion from "@/components/add-question"
import Questions from "@/components/questions"
import Signout from "@/components/signout"
import { getQuestions, UserType } from "@/data"

export default async function page() {
    const user: UserType = await getUserDetails()
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const questions = await getQuestions(user as any)
    return (
        <div className="w-4xl mx-auto my-4">
            <div className="flex justify-end">
                <Signout />
            </div>
            {
                user.role === 'admin' && (<AddQuestion />)
            }
            <div className="mt-4">
                <h1 className="font-bold text-lg">Question List</h1>
                <div>
                    {
                        questions.map(question => <Questions key={question.id} question={question} />)
                    }
                </div>
            </div>
        </div>
    )
}