import { useUser } from "@clerk/clerk-react";
 
export default function Coins() {
  const { isSignedIn, user, isLoaded } = useUser();
 
  if (!isLoaded) {
    // Handle loading state however you like
    return null;
  }
 
  if (isSignedIn) {
    return <div className='border w-[200px] mx-auto my-3 text-center py-1  text-white font-bold rounded-md border-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out font-mono'>BytesBucks <span className="text-orange-400">{user.publicMetadata.coins}</span></div>;
  }
 
  return <div>Not signed in</div>;
}