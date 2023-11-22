import { roqBrowserClient } from "@/lib/roq/roq-client";
 
export default function Home() {
 
  const handleSignUp = async () => {
    await roqBrowserClient.signUp('default', { postLoginRedirect: 'http://localhost:3000/user' });
  };
 
  const handleSignIn = async () => {
    await roqBrowserClient.signIn('default', { postLoginRedirect: 'http://localhost:3000/user' });
  };
 
  return (
    <div className="flex w-full h-screen bg-zinc-950 justify-center items-center">
      <div className="flex flex-col justify-start items-center gap-[34px]">
        <div className="text-white text-[32px] font-bold leading-[38.40px] tracking-tight">
          Welcome
        </div>
        <div className="flex justify-center items-start gap-3">
          <div className="px-[18px] py-1.5 bg-indigo-500 rounded shadow flex justify-center items-center">
            <button
              onClick={handleSignIn}
              className="text-white text-[15px] font-bold leading-relaxed tracking-wide"
            >
              Sign in
            </button>
          </div>
          <div className="px-[18px] py-1.5 bg-indigo-500 rounded shadow flex justify-center items-center">
            <button
              onClick={handleSignUp}
              className="text-white text-[15px] font-bold leading-relaxed tracking-wide"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}