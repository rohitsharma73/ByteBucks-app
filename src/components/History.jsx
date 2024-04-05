import { useUser } from "@clerk/clerk-react";

export default function History() {
    const { isSignedIn, user, isLoaded } = useUser();

    if (!isLoaded) {
        // Handle loading state however you like
        return null;
    }

    if (isSignedIn) {
        return <>
            <div className='border w-[200px] mx-auto my-3 text-center py-1  text-black font-bold rounded-md border-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out font-mono'>
                Payment 1: 
                <span className="text-orange-600">
                    {user.publicMetadata.pay1}
                </span>
            </div>
            <div className='border w-[200px] mx-auto my-3 text-center py-1  text-black font-bold rounded-md border-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out font-mono'>
                Payment 2: 
                <span className="text-orange-600">
                    {user.publicMetadata.pay2}
                </span>
            </div>
            <div className='border w-[200px] mx-auto my-3 text-center py-1  text-black font-bold rounded-md border-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out font-mono'>
                Payment 3: 
                <span className="text-orange-600">
                    {user.publicMetadata.pay3}
                </span>
            </div>
            <div className='border w-[200px] mx-auto my-3 text-center py-1  text-black font-bold rounded-md border-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out font-mono'>
                Payment 4: 
                <span className="text-orange-600">
                    {user.publicMetadata.pay4}
                </span>
            </div>
            <div className='border w-[200px] mx-auto my-3 text-center py-1  text-black font-bold rounded-md border-orange-500 hover:border-orange-500 hover:text-white duration-500 ease-in-out font-mono'>
                Payment 5: 
                <span className="text-orange-600">
                    {user.publicMetadata.pay5}
                </span>
            </div>
        </>
    }

    return <div>Not signed in</div>;
}
