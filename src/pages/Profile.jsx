import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:5000/profile', {
          credentials: 'include'
        });
        const data = await res.json();
        
        if (res.ok) {
          setUser(data);
        } else {
          navigate('/signin');
        }
      } catch (err) {
        navigate('/signin');
      }
    };
    fetchProfile();
  }, [navigate]);

  if (!user) return <div className="min-h-screen bg-[#0A0B0D] text-white flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4 py-12">
      <Link to="/" className="mb-12">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-3.2 20.8a4.8 4.8 0 1 1 0-9.6 4.8 4.8 0 0 1 0 9.6z"
            fill="white"
          />
        </svg>
      </Link>
      <div className="w-full max-w-[400px] bg-[#282B31] rounded-3xl p-8">
        <h1 className="text-2xl font-semibold text-white mb-6">User Profile</h1>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-[#8A919E]">Name</p>
            <p className="text-lg text-white font-medium">{user.name}</p>
          </div>
          <div>
            <p className="text-sm text-[#8A919E]">Email</p>
            <p className="text-lg text-white font-medium">{user.email}</p>
          </div>
        </div>
        <button
          onClick={async () => {
            await fetch('http://localhost:5000/logout', { method: 'POST', credentials: 'include' });
            navigate('/signin');
          }}
          className="w-full mt-8 py-3 bg-[#F45532] text-white text-[16px] font-semibold rounded-full hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
