import { SignIn, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const auth = async () => {
  const user = await currentUser();

  return (
    <div>
      {!user ? (
        <div>
          <SignInButton />
        </div>
      ) : (
        <div><UserButton/></div>
      )}
    </div>
  );
};

export default auth;
