import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="mb-4 p-3 ml-2 w-36 rounded-md text-white font-medium bg-gradient-to-r from-zinc-300 to-zinc-300 focus:from-zinc-300 focus:to-zinc-300 hover:from-zinc-500 hover:to-zinc-500 focus:outline-none focus:ring-0 focus:shadow-none hover:outline-none transition-colors duration-200 border-0 hover:border-0 focus:border-0 active:outline-none active:border-0 hover:shadow-none active:shadow-none"
      style={{ outline: "none", border: "none" }}
    >
      Sign Out
    </button>
  );
}

export default SignOut;
