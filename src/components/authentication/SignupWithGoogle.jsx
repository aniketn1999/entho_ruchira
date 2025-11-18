import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { toast } from "react-toastify";

const SignupWithGoogle = () => {

    const googleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            console.log(result)
            const user = result.user
            if (result.user) {
                await setDoc(doc(db, "Users", user.uid), {
                    email: user.email,
                    fullName: user.displayName,
                });
                toast.success('User LoggedIn Successfully', { position: "top-center" });
                // window.location.href = "../App"
            }
        })
    }

    return (
        <>
            <button
                type="button"
                className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition duration-300 cursor-pointer"
                onClick={googleLogin}
            >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                />
                Continue with Google
            </button>
        </>
    )
}

export default SignupWithGoogle
