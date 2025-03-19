import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LoginForm className="w-full mx-3.5 md:w-[400px]" />
    </div>
  );
}
