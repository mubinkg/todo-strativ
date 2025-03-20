import { getUserDetails } from '@/actions/auth';
import AddQuestion from '@/components/add-question';
import Question from '@/components/question';
import Signout from '@/components/signout';
import { getQuestions, UserType } from '@/data';

export default async function page() {
  const user: UserType = await getUserDetails();
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const questions = await getQuestions(user as any);
  return (
    <div className="mx-auto my-4 w-4xl">
      <div className="flex justify-end">
        <Signout />
      </div>
      {user.role === 'admin' && <AddQuestion />}
      <div className="mt-4">
        <h1 className="text-lg font-bold">Question List</h1>
        <div className="mt-4 flex flex-col gap-4">
          {questions.map(question => (
            <Question user={user} key={question.id} question={question} />
          ))}
        </div>
      </div>
    </div>
  );
}
