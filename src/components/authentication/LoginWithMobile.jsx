import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import SignupWithGoogle from "./SignupWithGoogle";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const LoginWithMobile = ({ isOpen, onClose }) => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loadingSend, setLoadingSend] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);

  // Reset everything when popup opens or closes
  useEffect(() => {
    if (isOpen) {
      setMobile("");
      setOtp("");
      setOtpSent(false);
      setUser(null);
      setError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Setup ReCAPTCHA once
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA verified");
          },
          "expired-callback": () => {
            console.log("reCAPTCHA expired. Please refresh.");
          },
        }
      );
    }
    return window.recaptchaVerifier;
  };

  // Handle Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoadingSend(true);

    if (!mobile || !isValidPhoneNumber(mobile)) {
      setError("Please enter a valid phone number");
      setLoadingSend(false);
      return;
    }

    try {
      const appVerifier = setupRecaptcha();
      const confirmation = await signInWithPhoneNumber(auth, mobile, appVerifier);
      setUser(confirmation);
      setOtpSent(true);
      toast.info("OTP sent successfully!", { position: "top-center" });
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError("Failed to send OTP. Try again later.");
    } finally {
      setLoadingSend(false);
    }
  };

  // Handle Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    setLoadingVerify(true);

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      setLoadingVerify(false);
      return;
    }

    try {
      const data = await user.confirm(otp);
      console.log(data)
      toast.success("User Logged In Successfully!", { position: "top-center" });

      // Reset and close popup
      setOtp("");
      setMobile("");
      setOtpSent(false);
      setUser(null);
      setError("");
      onClose();
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Invalid OTP. Please try again.");
    } finally {
      setLoadingVerify(false);
    }
  };

  // Handle popup close and reset
  const handleClose = () => {
    setOtpSent(false);
    setMobile("");
    setOtp("");
    setUser(null);
    setError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 relative scale-95 animate-zoomIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-[#282561]">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login using your mobile number to continue
        </p>

        {!otpSent ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            {/* Mobile Number Input */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm font-medium mb-1">
                Mobile Number
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                value={mobile}
                onChange={setMobile}
                defaultCountry="IN"
                className="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base"
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Send OTP Button */}
            <button
              type="submit"
              disabled={loadingSend}
              className={`w-full ${loadingSend
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#282561] hover:bg-[#322f7e]"
                } text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              {loadingSend ? "Sending OTP..." : "Send OTP"}
            </button>

            {/* Invisible Recaptcha */}
            <div id="recaptcha"></div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-2">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Continue With Google */}
            <SignupWithGoogle />
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            {/* OTP Input */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm font-medium mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 text-base tracking-widest text-center text-lg"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              disabled={loadingVerify}
              className={`w-full ${loadingVerify
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
                } text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              {loadingVerify ? "Verifying..." : "Verify OTP"}
            </button>

            {/* Resend OTP */}
            <p className="text-center text-sm text-gray-600 mt-3">
              Didn’t receive the code?{" "}
              <button
                type="button"
                onClick={() => {
                  setOtpSent(false);
                  setError("");
                }}
                className="text-orange-600 hover:underline font-medium"
              >
                Resend OTP
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginWithMobile;
