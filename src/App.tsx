import "./App.css";
import Header from "./header";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

function App() {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Header />
        <Outlet />
        <Footer />
      </ClerkProvider>
    </>
  );
}

export default App;
