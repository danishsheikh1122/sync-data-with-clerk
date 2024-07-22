import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { Ghost, Globe } from "lucide-react";
import React from "react";
import Auth from "./components/auth";

const Home = () => {
  
  return (
    <div>
      <Auth></Auth>
    </div>
  );
};

export default Home;
