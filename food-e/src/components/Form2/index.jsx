import React, { useState } from "react";
import styles from "./Form2.css";


const onSubmitHandler  = ( props ) => {
  return 0;
}

const Form2 = () => {
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="plan5">
          Please select the dish of your choice:
          <div className="box7">
            <input
              type="checkbox"
              id="Vanilla Custard"
              name="cust"
              value="custard"
            />
             {" "}
            <b>
              <label for="custard">Vanilla Custard:</label>
            </b>
            <br></br>
            <div className="a7">
              <li>Custard Powder</li>
              <br></br>
              <li>Milk</li>
              <br></br>
              <li>Sugar</li>
              <br></br>
            </div>
          </div>
          <div class="box7">
            <input
              type="checkbox"
              id="Vegetable Sandwich"
              name="vs"
              value="vsanwich"
            />
             {" "}
            <b>
              <label for="vsanwich">Vegetable Sandwich</label>
            </b>
            <div class="a7">
              <li>Mixed Vegetables *</li> <br></br>
              <li>Mayonnaise</li>
              <br></br>
              <li>Ketchup</li>
              <br></br>
              <li>2 slices of cheese</li>
              <br></br>
              <li>Salt and Pepper (As sachets)</li>
            </div>
            * Mixed vegetables include tomato, cucumber, carrot, lettuce.
          </div>
          <div class="box7">
            <input
              type="checkbox"
              id="Chicken Sandwich"
              name="cs"
              value="csanwich"
            />
             {" "}
            <b>
              <label for="csanwich">Chicken Sandwich</label>
            </b>
            <br></br>
            <div class="a7">
              <li>Frozen chicken breast</li>
              <br></br>
              <li>Mayonnaise</li>
              <br></br>
              <li>Ketchup</li>
              <br></br>
              <li>2 slices of cheese</li>
              <br></br>
              <li>Salt and Pepper (As sachets)</li> <br></br>
            </div>
          </div>
          <div class="box7">
            <input type="checkbox" id="Whitepasta" name="wp" value="wpasta" /> {" "}
            <b>
              <label for="wpasta">White Sauce Pasta</label>
            </b>
            <div class="a7">
              <li>Penne pasta</li>
              <br></br>
              <li>White Flour</li>
              <br></br>
              <li>Milk</li>
              <br></br>
              <li>Butter</li>
              <br></br>
              <li>Mushroom</li>
              <br></br>
              <li>Mozzarella Cheese</li>
              <br></br>
              <li>Oregano</li>
              <br></br>
              <li>Salt and pepper (As sachets)</li>
              <br></br>
            </div>
          </div>
          <div class="box7">
            <input type="checkbox" id="Redpasta" name="rp" value="rpasta" /> {" "}
            <b>
              <label for="rpasta">Red Sauce Pasta</label>
            </b>
            <br></br>
            <div class="a7">
              <li>Penne pasta</li>
              <br></br>
              <li>Pasta Sauce(Red)</li>
              <br></br>
              <li>Butter</li>
              <br></br>
              <li>Onions</li>
              <br></br>
              <li>Oregano</li>
              <br></br>
              <li>Mozzarella Cheese</li>
              <br></br>
              <li>Ginger garlic paste</li>
              <br></br>
              <li>Salt and pepper (As sachets)</li>
              <br></br>
            </div>
          </div>
          <div class="box7">
            <label for="Address5">Address line 1:</label><br></br>  
            <input type="text5" id="address" name="address5"/><br></br><br></br>
            <label for="State5">State:</label><br></br>
            <input type="text5" id="state" name="state5"/><br></br><br></br>    
            <label for="pin5">Pincode:</label><br></br>
            <input type="numbe5r" id="pin" name="pin5"/><br></br><br></br>
          </div>
        </div>
        <div class="button">
          {" "}
          <button type="submit" class="payment">
            Proceed to payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
