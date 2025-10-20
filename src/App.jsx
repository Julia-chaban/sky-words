import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { AuthProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <div className="wrapper">
        <Header />
        <Main />
      </div>
    </AuthProvider>
  );
}

export default App;
