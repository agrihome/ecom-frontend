"use client";

import Image from "next/image"
import Link from "next/link"
import login from "@/public/images/login.jpg"
import LoginInput from "@/components/LoginInput"
import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks"
import { signupStart, signupSuccess, loginSuccess } from "@/lib/redux/features/authSlice"
import { useRouter } from "next/navigation"

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Keeping state but not validating for mock
    
    const dispatch = useAppDispatch();
    const { loading } = useAppSelector((state) => state.auth);
    const router = useRouter();

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(signupStart());

        // Mock signup API call
        setTimeout(() => {
            const newUser = {
                name: name || "Dummy User",
                email: email || "dummy@example.com",
                token: "dummy-token-123456"
            };

            dispatch(signupSuccess(newUser));
            console.log("Signed up successfully as", newUser);
            router.push("/");
        }, 1000);
    };

    const handleGoogleSignup = () => {
        dispatch(signupStart());
        setTimeout(() => {
             const dummyUser = {
                name: "Google User",
                email: "google@example.com",
                token: "google-token-123"
            };
            dispatch(loginSuccess(dummyUser));
            router.push("/");
        }, 1000);
    };

    return (
        <div className="grid lg:grid-cols-[50%_50%] 2xl:grid-cols-[60%_40%]  my-12 overflow-hidden w-full h-[600px] min-h-max mb-20 items-center">
            <div className="h-full relative hidden lg:block">
                 <Image 
                    src={login} 
                    alt="Signup Image" 
                    className="object-cover object-center w-full h-full"
                 />
            </div>
            <div className="flex flex-col justify-center px-5 sm:px-12 sm:pr-24 gap-10 justify-self-center">
                <div className="flex flex-col gap-2">
                    <h1 className="sm:text-4xl text-2xl font-medium tracking-wide">Create an account</h1>
                    <p className="text-base text-gray-600">Enter your details below</p>
                </div>
                
                <form onSubmit={handleSignup} className="flex flex-col gap-8 w-full">
                    <div className="flex flex-col gap-8">
                        <LoginInput 
                            placeholder="Name" 
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <LoginInput 
                            placeholder="Email or Phone Number" 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <LoginInput 
                            placeholder="Password" 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                         <LoginInput 
                            placeholder="Confirm Password" 
                            type="password" 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <div className="flex flex-col gap-4 w-full">
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#DB4444] text-white py-4 rounded font-medium hover:bg-opacity-90 transition-all disabled:opacity-70"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
                        </button>
                        <button 
                            type="button"
                            onClick={handleGoogleSignup}
                            className="w-full border border-gray-400 py-4 rounded flex items-center justify-center gap-4 hover:bg-gray-50 transition-all"
                        >
                             <GoogleIcon />
                             <span>Sign up with Google</span>
                        </button>
                    </div>

                    <div className="flex gap-4 items-center justify-center text-gray-600">
                        <p>Already have account?</p>
                        <Link href="/login" className="font-medium text-black border-b border-black pb-0.5 hover:opacity-70">
                            Log in
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

function GoogleIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
            <path d="M3.15295 7.3455L6.4385 9.755C7.3275 7.554 9.4805 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.1585 2 4.828 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
            <path d="M12 22C14.6605 22 17.0715 20.9455 18.8585 19.2315L15.6885 16.6395C14.659 17.5125 13.386 18 12 18C9.3515 18 7.1125 16.2975 6.284 13.9115L3.0845 16.353C4.7705 19.6895 8.136 22 12 22Z" fill="#4CAF50"/>
            <path d="M22 12C22 11.3295 21.931 10.675 21.8055 10.0415H21V10H12V14H17.6515C17.257 15.108 16.593 16.035 15.6885 16.6395L18.8585 19.2315C20.7305 17.5025 22 14.945 22 12Z" fill="#1976D2"/>
        </svg>
    )
}