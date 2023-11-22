import { roqBrowserClient } from '@/lib/roq/roq-client';
import { useRoqPlatformUserProfiles, useRoqPlatformRoles } from "@/lib/roq";
 
export default function Home() {
  
  const {data} = useRoqPlatformUserProfiles()
  const {data: rolesData} = useRoqPlatformRoles({
    withUserCount: true,
    filter: {
      userId: {
        equalTo: data?.userProfiles.data[0].id
      }
    }
  })
 
  const logoutHandler = () => {
    roqBrowserClient.signOut();
  };
 
  return (
    <div className="flex w-full h-screen bg-zinc-950 justify-center items-center">
      <div className="flex-grow flex-shrink-0 py-[241px] flex justify-center items-center">
        <div className="flex flex-col items-center gap-8 w-full">
          <h1 className="text-white text-[32px] font-bold leading-[38.40px] tracking-tight">Dashboard</h1>
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 text-base font-normal leading-tight tracking-tight">
              You are currently logged in as:
            </p>
            <p className="text-white text-xl font-bold leading-normal tracking-tight">
              {data?.userProfiles.data[0].email}
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-gray-400 text-base font-normal leading-tight tracking-tight">
              User role:
            </p>
            <p className="text-white text-xl font-bold leading-normal tracking-tight">
              {rolesData?.roles.data[0].name}
            </p>
          </div>
          <div className="px-[18px] py-1.5 bg-indigo-500 rounded shadow flex items-center">
            <button onClick={logoutHandler} className="flex items-center gap-1">
              <span className="text-white text-[15px] font-bold leading-relaxed tracking-wide">
                Log out
              </span>
              <div className="w-6 h-6 flex justify-center items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 9V5.25C15.75 4.00736 14.7426 3 13.5 3H7.5C6.25736 3 5.25 4.00736 5.25 5.25V18.75C5.25 19.9926 6.25736 21 7.5 21H13.5C14.7426 21 15.75 19.9926 15.75 18.75V15M18.75 15L21.75 12M21.75 12L18.75 9M21.75 12H9" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}