import React, { useState } from "react";
import styles from "./Form1.css";

const Form1 = () => {
  const [breakfast, setBreakfast] = useState("");
  const [breakfastAddress, setbreakfastAddress] = useState("");
  const [breakfastState, setbreakfastState] = useState("");
  const [breakfastPincode, setbreakfastPincode] = useState("");
  const [breakfastTime, setbreakfastTime] = useState("");
  const [error1, setError1] = useState("");

  const handleBreakfast = (e) => {
    e.preventDefault();
    setBreakfast(e.target.value);
  };
  const handleBreakfastAddress = (e) => {
    e.preventDefault();
    setbreakfastAddress(e.target.value);
  };
  const handleBreakfastState = (e) => {
    e.preventDefault();
    setbreakfastState(e.target.value);
  };
  const handleBreakfastPincode = (e) => {
    e.preventDefault();
    setbreakfastPincode(e.target.value);
  };
  const handleBreakfastTime = (e) => {
    e.preventDefault();
    setbreakfastTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      breakfast != "" &&
      breakfastAddress != "" &&
      breakfastState != "" &&
      breakfastPincode != "" &&
      breakfastTime != ""
    ) {
      console.log("YOU CLICKED ON SUBMIT");
      console.log("Breakfast Selected:", breakfast);
      console.log("Breakfast Address : ", breakfastAddress);
      console.log("Breakfast State :", breakfastState);
      console.log("Breakfast Pincode :", breakfastPincode);
      console.log("Breakfast Time :", breakfastTime);
      setError1("");
    } else if (
      lunch != "" &&
      lunchAddress != "" &&
      lunchState != "" &&
      lunchPincode != "" &&
      lunchTime != ""
    ) {
      console.log("Lunch Selected:", lunch);
      console.log("Lunch Address : ", lunchAddress);
      console.log("Lunch State :", lunchState);
      console.log("Lunch Pincode :", lunchPincode);
      console.log("Lunch Time :", lunchTime);
      setError1("");
    } else if (
      dinner != "" &&
      dinnerAddress != "" &&
      dinnerState != "" &&
      dinnerPincode != "" &&
      dinnerTime != ""
    ) {
      console.log("Dinner Selected:", dinner);
      console.log("Dinner Address : ", dinnerAddress);
      console.log("Dinner State :", dinnerState);
      console.log("Dinner Pincode :", dinnerPincode);
      console.log("Dinner Time :", dinnerTime);
      setError1("");
    } else {
      if (breakfastAddress === "") {
        setError1("Please enter your breakfast address");
      } else if (breakfastState === "") {
        setError1("please enter your breakfast state");
      } else if (breakfastPincode === "") {
        setError1("please enter your breakfast pincode");
      } else if (breakfastTime === "") {
        setError1("please enter your breakfast time");
      }
    }

    // make backend call here ---
    // axios.post(...url , {emailId: emailId, password: password});
  };

  const [lunch, setLunch] = useState("");
  const [lunchAddress, setlunchAddress] = useState("");
  const [lunchState, setlunchState] = useState("");
  const [lunchPincode, setlunchPincode] = useState("");
  const [lunchTime, setlunchTime] = useState("");
  const [error2, setError2] = useState("");

  const handleLunch = (e) => {
    e.preventDefault();
    setLunch(e.target.value);
  };
  const handleLunchAddress = (e) => {
    e.preventDefault();
    setlunchAddress(e.target.value);
  };
  const handleLunchState = (e) => {
    e.preventDefault();
    setlunchState(e.target.value);
  };
  const handleLunchPincode = (e) => {
    e.preventDefault();
    setlunchPincode(e.target.value);
  };
  const handleLunchTime = (e) => {
    e.preventDefault();
    setlunchTime(e.target.value);
  };

  const [dinner, setDinner] = useState("");
  const [dinnerAddress, setdinnerAddress] = useState("");
  const [dinnerState, setdinnerState] = useState("");
  const [dinnerPincode, setdinnerPincode] = useState("");
  const [dinnerTime, setdinnerTime] = useState("");
  const [error3, setError3] = useState("");

  const handleDinner = (e) => {
    e.preventDefault();
    setDinner(e.target.value);
  };
  const handledinnerAddress = (e) => {
    e.preventDefault();
    setdinnerAddress(e.target.value);
  };
  const handledinnerState = (e) => {
    e.preventDefault();
    setdinnerState(e.target.value);
  };
  const handledinnerPincode = (e) => {
    e.preventDefault();
    setdinnerPincode(e.target.value);
  };
  const handledinnerTime = (e) => {
    e.preventDefault();
    setdinnerTime(e.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="plan-3">
            <div className="box-3">
              <span className="check">
                <input
                  type="checkbox"
                  id="breakfast"
                  name="meal"
                  value="breakfast"
                  onChange={handleBreakfast}
                />
              </span>
               {" "}
              <b>
                <label for="breakfast">Breakfast</label>
              </b>
              <div className="card-3">
                <label for="Address">Address:</label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  onChange={handleBreakfastAddress}
                />
                <label for="State">
                  State:
                  <select
                    id="State"
                    name="State"
                    onChange={handleBreakfastState}
                  >
                    <option value="None">None Selected</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Haryana">Delhi</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </label>
                <br></br>
                <br></br>
                <label for="Pincode"> Pincode:</label>
                <input
                  type="number"
                  id="Pincode"
                  name="Pincode"
                  onChange={handleBreakfastPincode}
                />
                <label for="Time">Time:</label>
                <input
                  type="time"
                  id="Time"
                  name="Time"
                  onChange={handleBreakfastTime}
                />
              </div>
            </div>
            <div className="box-3">
               
              <span className="check">
                {" "}
                <input
                  type="checkbox"
                  id="lunch"
                  name="meal"
                  value="lunch"
                  onChange={handleLunch}
                />
              </span>
               {" "}
              <b>
                <label for="lunch">Lunch</label>
              </b>
              <div className="card-3">
                <label for="Address">Address:</label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  onChange={handleLunchAddress}
                />
                <label for="State">State:</label>
                <select id="State" name="State" onChange={handleLunchState}>
                  <option value="None">None Selected</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Haryana">Delhi</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <br></br>
                <br></br>
                <label for="Pincode">Pincode:</label>
                <input
                  type="number"
                  id="Pincode"
                  name="Pincode"
                  onChange={handleLunchPincode}
                />
                <label for="Time">Time:</label>
                <input
                  type="time"
                  id="Time"
                  name="Time"
                  onChange={handleLunchTime}
                  t
                />
              </div>
            </div>

            <div className="box-3">
              <span className="check">
                {" "}
                 
                <input
                  type="checkbox"
                  id="Dinner"
                  name="meal"
                  value="Dinner"
                  onChange={handleDinner}
                />
              </span>
              <b>
                <label for="Dinner">Dinner</label>
              </b>
              <div className="card-3">
                <label for="Address">Address:</label>
                <input
                  type="text"
                  id="Address"
                  name="Address"
                  onChange={handledinnerAddress}
                />
                <label for="State">State:</label>
                <select id="State" name="State" onChange={handledinnerState}>
                  <option value="None">None Selected</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Puducherry">Puducherry</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Haryana">Delhi</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                <br></br>
                <br></br>
                <label for="Pincode">Pincode:</label>
                <input
                  type="number"
                  id="Pincode"
                  name="Pincode"
                  onChange={handledinnerPincode}
                />
                <label for="Time">Time:</label>
                <input
                  type="time"
                  id="Time"
                  name="Time"
                  onChange={handledinnerTime}
                />
              </div>
            </div>
            <div className="button-3">
              {" "}
              <button type="submit" className="payment-3">
                Proceed to payment
              </button>{" "}
              {error1 != "" && <p>{error1}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form1;
