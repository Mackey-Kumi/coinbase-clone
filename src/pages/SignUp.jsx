import { useState } from 'react';
import { Link } from 'react-router-dom';

// Shared dark auth layout wrapper
function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4 py-12">
      {/* Coinbase logo */}
      <Link to="/" className="mb-12">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-3.2 20.8a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6z"
            fill="white"
          />
        </svg>
      </Link>
      <div className="w-full max-w-[400px]">
        {children}
      </div>
    </div>
  );
}

// Google icon SVG
const GoogleIcon = () => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16.18 8.57691C16.18 8.00964 16.1291 7.46419 16.0345 6.94055H8.5V10.0351H12.8055C12.62 11.0351 12.0564 11.8824 11.2091 12.4496V14.4569H13.7945C15.3073 13.0642 16.18 11.0133 16.18 8.57691Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.50017 16.3949C10.6602 16.3949 12.4711 15.6786 13.7947 14.4567L11.2093 12.4495C10.4929 12.9295 9.57653 13.2131 8.50017 13.2131C6.41653 13.2131 4.65289 11.8058 4.0238 9.91492H1.35107V11.9876C2.66744 14.6022 5.37289 16.3949 8.50017 16.3949Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.02364 9.91497C3.86364 9.43497 3.77273 8.92225 3.77273 8.39497C3.77273 7.8677 3.86364 7.35497 4.02364 6.87497V4.80225H1.35091C0.809091 5.88225 0.5 7.10406 0.5 8.39497C0.5 9.68588 0.809091 10.9077 1.35091 11.9877L4.02364 9.91497Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.50017 3.57684C9.67471 3.57684 10.7293 3.98047 11.5583 4.7732L13.8529 2.47866C12.4674 1.18775 10.6565 0.39502 8.50017 0.39502C5.37289 0.39502 2.66744 2.18775 1.35107 4.80229L4.0238 6.87502C4.65289 4.98411 6.41653 3.57684 8.50017 3.57684Z" fill="currentColor"/>
  </svg>
);

// Apple icon SVG
const AppleIcon = () => (
  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#apple-clip-signup)">
      <path d="M14.1869 13.1777C13.955 13.7134 13.6805 14.2065 13.3625 14.6599C12.929 15.2779 12.5741 15.7057 12.3006 15.9433C11.8765 16.3332 11.4222 16.533 10.9357 16.5443C10.5865 16.5443 10.1653 16.4449 9.67504 16.2433C9.18315 16.0427 8.73112 15.9433 8.31779 15.9433C7.88431 15.9433 7.4194 16.0427 6.92212 16.2433C6.42409 16.4449 6.02288 16.55 5.71613 16.5604C5.24961 16.5803 4.78461 16.3749 4.32046 15.9433C4.02421 15.6849 3.65367 15.242 3.20977 14.6145C2.73351 13.9444 2.34195 13.1673 2.0352 12.2814C1.70668 11.3245 1.54199 10.3979 1.54199 9.50085C1.54199 8.47326 1.76403 7.58699 2.20878 6.84429C2.55832 6.24773 3.02332 5.77714 3.6053 5.43168C4.18729 5.08622 4.81613 4.91017 5.49333 4.89891C5.86387 4.89891 6.34979 5.01353 6.95364 5.23879C7.55579 5.46481 7.94242 5.57942 8.11194 5.57942C8.23867 5.57942 8.66818 5.4454 9.3963 5.17822C10.0849 4.93043 10.666 4.82783 11.1421 4.86825C12.4321 4.97236 13.4013 5.4809 14.0459 6.39708C12.8921 7.09615 12.3214 8.07527 12.3327 9.33134C12.3431 10.3097 12.6981 11.1239 13.3956 11.7703C13.7117 12.0703 14.0648 12.3022 14.4576 12.4669C14.3724 12.7139 14.2825 12.9506 14.1869 13.1777ZM11.2282 1.53515C11.2282 2.30199 10.948 3.01799 10.3896 3.68071C9.71574 4.46855 8.90063 4.9238 8.01672 4.85197C8.00546 4.75997 7.99893 4.66314 7.99893 4.5614C7.99893 3.82523 8.3194 3.03739 8.88852 2.39322C9.17265 2.06706 9.53401 1.79587 9.97223 1.57954C10.4095 1.36643 10.8231 1.24858 11.2121 1.22839C11.2235 1.33091 11.2282 1.43343 11.2282 1.53514V1.53515Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="apple-clip-signup">
        <rect width="16" height="16" fill="currentColor" transform="translate(0 0.89502)"/>
      </clipPath>
    </defs>
  </svg>
);

// SSO Button
function SSOButton({ icon, label }) {
  return (
    <button className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#282B31] text-white text-[16px] font-semibold rounded-[56px] hover:bg-[#32363E] transition-colors">
      {icon}
      {label}
    </button>
  );
}

export default function SignUp() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // No-op for static clone
  };

  return (
    <AuthLayout>
      <h1 className="text-[24px] font-semibold text-white mb-2">Create your account</h1>
      <p className="text-[14px] text-[#5B616E] mb-6">
        Access all that Coinbase has to offer with a single account.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Email label */}
        <label className="block">
          <span className="text-[14px] font-medium text-white mb-1.5 block">
            Email<span className="text-[#F45532] ml-0.5">*</span>
          </span>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border border-[#3C4049] text-white text-[16px] placeholder-[#5B616E] rounded-xl px-4 py-4 outline-none focus:border-[#0052FF] transition-colors"
            autoComplete="email"
          />
        </label>

        {/* Continue button */}
        <button
          type="submit"
          className="w-full py-4 bg-[#4670CA] text-[#0A0B0D] text-[16px] font-semibold rounded-[56px] hover:bg-[#5580D8] transition-colors"
        >
          Continue
        </button>
      </form>

      {/* OR divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-[#282B31]" />
        <span className="text-[13px] text-[#5B616E] font-medium">OR</span>
        <div className="flex-1 h-px bg-[#282B31]" />
      </div>

      {/* SSO options */}
      <div className="space-y-3">
        <SSOButton icon={<GoogleIcon />} label="Sign up with Google" />
        <SSOButton icon={<AppleIcon />} label="Sign up with Apple" />
      </div>

      {/* Sign in link */}
      <p className="text-center mt-6 text-[14px] text-white">
        Already have an account?{' '}
        <Link to="/signin" className="text-[#4670CA] font-semibold hover:underline">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
