import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else
      alert(
        "Your email and password have been registered! Check your email for confirmation!"
      );
  };

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
    } else {
      navigate("/kanban");
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-zinc-600 to-zinc-900 flex flex-col items-center justify-center m-0 p-0 absolute top-0 left-0">
      {/* Logo */}
      <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-300">
        React Kanban Board
      </h1>

      {/* email, Password and buttons */}
      <div className="mb-8 flex w-full max-w-lg shadow-lg rounded-lg overflow-hidden flex-col items-center justify-center p-6">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 flex-grow bg-zinc-500 rounded-md p-3 w-80 text-white focus:bg-zinc-500 focus:outline-none focus:ring-0 focus:shadow-none"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="mb-4 flex-grow bg-zinc-500 rounded-md p-3 w-80 text-white focus:bg-zinc-500 focus:outline-none focus:ring-0 focus:shadow-none"
        />
        <button
          onClick={signUp}
          className="mb-4 p-3 ml-2 w-36 rounded-md text-white font-medium bg-gradient-to-r from-blue-300 to-blue-300 hover:from-blue-500 hover:to-blue-500 focus:outline-none focus:ring-0 focus:shadow-none hover:outline-none transition-colors duration-200 border-0 hover:border-0 focus:border-0 active:outline-none active:border-0 hover:shadow-none active:shadow-none"
          style={{ outline: "none", border: "none" }}
        >
          Register
        </button>
        <button
          onClick={signIn}
          className="mb-4 p-3 ml-2 w-36 rounded-md text-white font-medium bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-amber-500 hover:to-amber-500 focus:outline-none focus:ring-0 focus:shadow-none hover:outline-none transition-colors duration-200 border-0 hover:border-0 focus:border-0 active:outline-none active:border-0 hover:shadow-none active:shadow-none"
          style={{ outline: "none", border: "none" }}
        >
          Sign In
        </button>
      </div>  
    </div>
  );
}

export default Auth;
