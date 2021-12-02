import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer1 } from "./marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleFullNameChange = (e) => {
    e.preventDefault();
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleconfirmPasswordChange = (e) => {
    e.preventDefault();
    setconfirmPassword(e.target.value);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (emailId != "" && password != "" && fullName != "" && confirmPassword != "") {
      console.log("YOU CLICKED ON Sign Up");
      console.log("FULL NAME:", fullName);
      console.log("EMAIL ID:", emailId);
      console.log("Password :", password);
      console.log("Confirm Password:", confirmPassword);
      setError("");
    } else {
      if (emailId === "") {
        setError("Please enter your Email Id");
      } else if (password === "") {
        setError("please enter your password first");
      }else if (fullName === "") {
        setError("please enter your password first");
      }else if (confirmPassword === "") {
        setError("please enter your confirm password first");
      }
    }

    // make backend call here ---
    // axios.post(...url , {emailId: emailId, password: password});
  };

  return (
    <BoxContainer>
      <form onSubmit={handleSignupSubmit}>
        <FormContainer>
          <Input type="name" placeholder="Full Name" onChange={handleFullNameChange}/>
          <Input type="email" placeholder="Email" onChange={handleEmailChange}/>
          <Input type="password" placeholder="Password" onChange={handlePasswordChange} />
          <Input type="password" placeholder="Confirm Password" onChange={handleconfirmPasswordChange} />
        </FormContainer>
        <Marginer1 direction="vertical" margin={10} />
        <SubmitButton type="submit">Sign Up</SubmitButton>
        {error!='' && <p>{error}</p>}
        <Marginer1 direction="vertical" margin="1em" />
        <MutedLink href="#">
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Sign in
          </BoldLink>
        </MutedLink>
      </form>
    </BoxContainer>
  );
}
