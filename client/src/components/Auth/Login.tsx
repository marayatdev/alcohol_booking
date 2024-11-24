// src/components/Login.tsx
import liff from '@line/liff';
import React, { useEffect, useState } from 'react';

interface Profile {
    lineId: string;
    displayName: string;
    pictureUrl: string;
}
const LIFF_ID = '2006549042-Xxa75qmg';

const Login: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);


    const handleLogOut = async () => {
        try {
            await liff.logout();
            setProfile(null);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    useEffect(() => {
        const initializeLiff = async () => {
            try {
                console.log("Initializing LIFF...");
                await liff.init({ liffId: LIFF_ID });
                console.log("LIFF initialized");

                if (!liff.isLoggedIn()) {
                    console.log("User is not logged in, redirecting to login...");
                    liff.login();
                } else {
                    console.log("User is already logged in");
                    const userProfile = await liff.getProfile();
                    setProfile({
                        lineId: userProfile.userId,
                        displayName: userProfile.displayName,
                        pictureUrl: userProfile.pictureUrl || '',
                    });
                }
            } catch (error) {
                console.error("LIFF initialization failed:", error);
            }
        };

        initializeLiff();
    }, [LIFF_ID]);

    return (
        <div>
            {/* {profile ? (
                <div>
                    <h1>Welcome, {profile.displayName}</h1>
                    <img src={profile.pictureUrl} alt="Profile" />
                </div>
            ) : (
                <p>Loading...</p>
            )}
            <button onClick={handleLogOut}>Logout</button> */}


            <div className="">
                <h1 className="flex start  text-3xl font-bold ">
                    The-Bar
                </h1>
            </div>
        </div>
    );
};

export default Login;
