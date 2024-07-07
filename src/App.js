import SignInForm from "./components/SignInForm";
import Navbar from "./components/Navbar";
import SignUpForm from "./components/SignUpForm";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Weather } from "./pages/Weather";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-[100vh] h-[100%] min-w-[100vw] bg-slate-900 flex flex-col items-center pt-8">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/weather-forcast" element={<Weather />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
