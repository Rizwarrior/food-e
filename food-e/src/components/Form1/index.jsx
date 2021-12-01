import React from "react";
import styles from "./Form1.css";

const Form1 = () => {
  return (
    <div>
      <div>
        <form>
          <div className="plan-3">
            <div className="box-3">
              <span className="check">
                <input
                  type="checkbox"
                  id="breakfast"
                  name="meal"
                  value="breakfast"
                />
              </span>
               {" "}
              <b>
                <label for="breakfast">Breakfast</label>
              </b>
              <div className="card-3">
                <label for="Address">Address:</label>
                <input type="text" id="Address" name="Address" />
                <label for="State">
                  State:
                  <select id="State" name="State">
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
                <input type="number" id="Pincode" name="Pincode" />
                <label for="Time">Time:</label>
                <input type="time" id="Time" name="Time" />
              </div>
            </div>
            <div className="box-3">
               
              <span className="check">
                {" "}
                <input type="checkbox" id="lunch" name="meal" value="lunch" />
              </span>
               {" "}
              <b>
                <label for="lunch">Lunch</label>
              </b>
              <div className="card-3">
                <label for="Address">Address:</label>
                <input type="text" id="Address" name="Address" />
                <label for="State">State:</label>
                <select id="State" name="State">
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
                <input type="number" id="Pincode" name="Pincode" />
                <label for="Time">Time:</label>
                <input type="time" id="Time" name="Time" />
              </div>
            </div>
            <div className="box-3">
              <span className="check">
                {" "}
                 
                <input type="checkbox" id="Dinner" name="meal" value="Dinner" />
              </span>
              <b>
                <label for="Dinner">Dinner</label>
              </b>
              <div className="card-3">
                <label for="Address">Address:</label>
                <input type="text" id="Address" name="Address" />
                <label for="State">State:</label>
                <select id="State" name="State">
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
                <input type="number" id="Pincode" name="Pincode" />
                <label for="Time">Time:</label>
                <input type="time" id="Time" name="Time" />
              </div>
            </div>
            <div className="button-3">
              {" "}
              <button type="submit" className="payment-3">
                Proceed to payment
              </button>{" "}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form1;
