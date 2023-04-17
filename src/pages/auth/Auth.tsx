// ** Import React
import { useState } from "react";

// ** Import Components
import BannerAuth from "../../components/auth/BannerAuth";
import SignIn from "../../components/auth/SignIn";
import SignUp from "../../components/auth/SignUp";

const Auth = () => {
  // ** Local State
  const [signUp, setIsSignUp] = useState<boolean>(false);

  const handleSignUp = () => {
    setIsSignUp(true);
  };

  return (
    <div className={`flex gap-16 mx-auto ${signUp && "flex-row-reverse"}`}>
      {signUp ? (
        <SignUp setIsSignUp={setIsSignUp} />
      ) : (
        <SignIn handleSignUp={handleSignUp} />
      )}

      <BannerAuth signUp={signUp} />
    </div>
  );
};

export default Auth;
