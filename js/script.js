// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  // initialize variables
  let errorMessage = "";

  // get age and day of the week
  let age = parseInt(document.getElementById("age").value);
  let select = document.getElementById("day");
  let day = select.options[select.selectedIndex].value;

  if (!age) {
    errorMessage += "Please enter your age.<br>";
  }
  if (day === "") {
    errorMessage += "Please select a day of the week.<br>";
  }
  if (errorMessage !== "") {
    document.getElementById("error-message").innerHTML = errorMessage;
  } else {
    document.getElementById("error-message").innerHTML = "";
  }

  if (age < 5 == 1) {
		cost = "You get in for FREE!"
	}
	else if (age < 5 || age > 95) {
		cost = "You get in for FREE!"
	}
	else if ((day == "Tuesday") || (day == "Thursday)") 
			 || (age >=12) && (age <=21)) {
		cost = "You get a student discount."
	}
	else if ((age < 0) || (day != "")) {		
		cost = "You have to pay regular price."
	}

  // display the result
  document.getElementById("display-results").innerHTML = cost;
}
