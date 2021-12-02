import React, { useContext ,useState}  from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer1 } from './marginer'
import { AccountContext } from "./accountContext";



export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailId(e.target.value);
  } 

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if(emailId != '' && password != "") {
      console.log("YOU CLICKED ON LOGIN");
      console.log("EMAIL ID:", emailId);
      console.log("Password :", password);
      setError("")
    } else {
      if(emailId === '') {
        setError("Please enter your Email Id");
      } else if(password === ""){
        setError("please enter your password first");
      }
    }
   

    // make backend call here --- 
    // axios.post(...url , {emailId: emailId, password: password});
  }

  return (
    <BoxContainer>
      <form  onSubmit={handleLoginSubmit}>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={handleEmailChange} />
        <Input type="password" placeholder="Password" onChange={handlePasswordChange}/>
      </FormContainer>
      <Marginer1 direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer1 direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Sign In</SubmitButton>
      {error!='' && <p>{error}</p>}
      <Marginer1 direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </MutedLink>
      </form>
    </BoxContainer>
  );
}