import { useState } from "react";
import "./App.css";
import AuthPage from "./Components/AuthPage";
import ChatsPage from "./Components/ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;