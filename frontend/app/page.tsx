// app/login/page.tsx

export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/futuristic-bg.png')" }}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-10 w-full max-w-md text-white">
        <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-lg font-medium"
          >
            Log in
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-white/80">
          <a href="#" className="hover:underline">
            Forgot password?
          </a>
          <a href="#" className="hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

