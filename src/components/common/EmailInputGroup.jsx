import { useState } from 'react';
import Button from './Button';

// Email input + Sign up CTA group — matches coinbase.com hero & CTA sections
// Input: full border, 16px padding, rounded-2xl wrapper; Button: primary variant
export default function EmailInputGroup({ placeholder = 'satoshi@nakamoto.com', className = '' }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Route to signup with email pre-filled
    window.location.href = `/signup?email=${encodeURIComponent(email)}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center gap-3 w-full max-w-[520px] ${className}`}
    >
      <div className="flex-1 border border-[#D0D5DD] rounded-2xl overflow-hidden bg-white focus-within:border-[#0052FF] focus-within:ring-1 focus-within:ring-[#0052FF] transition-all">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-4 text-base text-[#0A0B0D] placeholder:text-[#8A919E] outline-none bg-transparent"
          aria-label="Email address"
        />
      </div>
      <Button variant="primary" type="submit" size="lg" className="shrink-0">
        Sign up
      </Button>
    </form>
  );
}
