import { Route, Routes } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { useEffect, useState } from 'react'
import './App.css'
import type { User } from '@supabase/supabase-js';
import Auth from './components/Auth';
import KanbanBoard from './components/KanbanBoard';

function App() {
  // Control user authentication
      const [user, setUser] = useState<User | null>(null);
  
      useEffect(() => {
          supabase.auth.getUser().then(({ data }) => setUser(data.user));
          const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
              setUser(session?.user ?? null);
          });
          return () => listener?.subscription.unsubscribe();
      }, []);
  
      if (!user) {
          return <Auth />;
      }
  

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/kanban" element={<KanbanBoard />} />
    </Routes>
  );
}

export default App
