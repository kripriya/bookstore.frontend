import React from "react";
import Home from "./home/home";
import { Navigate,Route,Routes } from "react-router-dom";
import Courses from "./courses/courses";
import Signup from "./components/signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./components/context/authprovider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
