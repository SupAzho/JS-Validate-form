function validateForm() {
  const formDisplay = document.createElement("div");
  formDisplay.className = "formDisplay";
  formDisplay.textContent = "Validate Form";
  formDisplay.id = "formData";
  document.getElementById("main").appendChild(formDisplay);
  //--------------------------------------
  const label = document.createElement("label");
  label.innerHTML = "Full Name";
  label.className = "label";
  document.getElementById("formData").appendChild(label);

  const input = document.createElement("INPUT");
  input.id = "fullName";
  input.className = "input";
  document.getElementById("formData").appendChild(input);
  //------------------------------
  const labelOne = document.createElement("label");
  labelOne.innerHTML = "Father Name";
  labelOne.className = "label";
  document.getElementById("formData").appendChild(labelOne);

  const inp = document.createElement("INPUT");
  inp.id = "fatherName";
  inp.className = "input";
  document.getElementById("formData").appendChild(inp);
//---------------------------------------
  const labelTwo = document.createElement("label");
  labelTwo.innerHTML = "Mobile Number";
  labelTwo.className = "label";
  document.getElementById("formData").appendChild(labelTwo);

  const inpTwo = document.createElement("INPUT");
  inpTwo.type = "number";
  inpTwo.id = "mobileNumber";
  inpTwo.className = "input";
  document.getElementById("formData").appendChild(inpTwo);
 //----------------------------------------
  const labelThre = document.createElement("label");
  labelThre.innerHTML = "Gmail";
  labelThre.className = "label";
  document.getElementById("formData").appendChild(labelThre);

  const inThree = document.createElement("INPUT");
  inThree.id = "gmail";
  inThree.className = "input";
  document.getElementById("formData").appendChild(inThree);
  //------------------------------------------
  const labelFour = document.createElement("label");
  labelFour.innerHTML = "Password";
  labelFour.className = "label";
  document.getElementById("formData").appendChild(labelFour);

  const inFour = document.createElement("INPUT");
  inFour.id = "password";
  inFour.className = "input";
  inFour.type = "password";
  document.getElementById("formData").appendChild(inFour);
 //---------------------------------------

  const labelFive = document.createElement("label");
  labelFive.innerHTML = "Confirm password";
  labelFive.className = "label";
  document.getElementById("formData").appendChild(labelFive);
  const inFive = document.createElement("INPUT");
  inFive.id = "confirmPassowrd";
  inFive.className = "input";
  inFive.type = "password";
  document.getElementById("formData").appendChild(inFive);

  //--------------------------------------

  const btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = " Submit";
  btn.addEventListener("click", displayInput);
  document.getElementById("formData").appendChild(btn);
}
function displayInput() {
  const fullName = document.getElementById("fullName").value;
  const fatherName = document.getElementById("fatherName").value;
  const mobileNumber = document.getElementById("mobileNumber").value;
  const gmail = document.getElementById("gmail").value;
  const password = document.getElementById("password").value;
  const confirmPassowrd = document.getElementById("confirmPassowrd").value;
  if (
    fullName.length === 0 ||
    fatherName.length === 0 ||
    mobileNumber.length === 0 ||
    gmail.length === 0 ||
    password.length === 0 ||
    confirmPassowrd.length === 0
  ) {
    alert("Please fill the empty fields");
  } else if (fullName.length < 5) {
    alert("Full Name must be greater than of length 5");
  } else if (fatherName.length < 5) {
    alert("Father Name must be greater than of length 5");
  } else if (mobileNumber.length !== 11) {
    alert("Mobile number must be 11");
  } else if (password.length <= 6) {
    alert("required minimum characters must be 6");
  } else if (
    password.length !== confirmPassowrd.length &&
    password !== confirmPassowrd
  ) {
    alert("Password and Confirm Password must be same");
  } else {
    table(fullName, fatherName, mobileNumber, gmail, password, confirmPassowrd);
  }
}

function table(
  fullName,
  fatherName,
  mobileNumber,
  gmail,
  password,
  confirmPassowrd
) {
  const tableDisplay = document.createElement("div");
  tableDisplay.className = "tableDisplay";
  tableDisplay.id = "tableDiv";
  document.getElementById("main").appendChild(tableDisplay);

  const table = document.createElement("Table");
  table.id = "table";
  document.getElementById("tableDiv").appendChild(table);

  //1st Row
  const tableRow = document.createElement("TR");
  tableRow.id = "tr";
  document.getElementById("table").appendChild(tableRow);
  const tableData = document.createElement("TD");
  const tableCell = document.createTextNode("Full Name : ");
  const tableCell11 = document.createTextNode(`${fullName}`);
  tableData.appendChild(tableCell);
  tableData.appendChild(tableCell11);
  document.getElementById("tr").appendChild(tableData);

  // 2nd Row
  const tableRow2 = document.createElement("TR");
  tableRow2.id = "tr2";
  document.getElementById("table").appendChild(tableRow2);
  const tableData2 = document.createElement("TD");
  const tableCell21 = document.createTextNode("Father Name : ");
  const tableCell212 = document.createTextNode(`${fatherName}`);
  tableData2.appendChild(tableCell21);
  tableData2.appendChild(tableCell212);
  document.getElementById("tr2").appendChild(tableData2);

  //3rd Row
  const tableRow3 = document.createElement("TR");
  tableRow3.id = "tr3";
  document.getElementById("table").appendChild(tableRow3);
  const tableData3 = document.createElement("TD");
  const tableCell22 = document.createTextNode("Mobile Number : ");
  const tableCell223 = document.createTextNode(`${mobileNumber}`);
  tableData3.appendChild(tableCell22);
  tableData3.appendChild(tableCell223);
  document.getElementById("tr3").appendChild(tableData3);

  //4th Row
  const tableRow4 = document.createElement("TR");
  tableRow4.id = "tr4";
  document.getElementById("table").appendChild(tableRow4);
  const tableData4 = document.createElement("TD");
  const tableCell23 = document.createTextNode("Gmail : ");
  const tableCell2344 = document.createTextNode(`${gmail}`);
  tableData4.appendChild(tableCell23);
  tableData4.appendChild(tableCell2344);
  document.getElementById("tr4").appendChild(tableData4);

  //5th Row
  const tableRow5 = document.createElement("TR");
  tableRow5.id = "tr5";
  document.getElementById("table").appendChild(tableRow5);
  const tableData5 = document.createElement("TD");
  const tableCell46 = document.createTextNode("Password : ");
  const tableCell2444 = document.createTextNode(`${password}`);
  tableData5.appendChild(tableCell46);
  tableData5.appendChild(tableCell2444);
  document.getElementById("tr5").appendChild(tableData5);

  //6th Row
  const tableRow6 = document.createElement("TR");
  tableRow6.id = "tr6";
  document.getElementById("table").appendChild(tableRow6);
  const tableData6 = document.createElement("TD");
  const tableCell25 = document.createTextNode("Confirm Password : ");
  const tableCell255 = document.createTextNode(`${confirmPassowrd}`);
  tableData6.appendChild(tableCell25);
  tableData6.appendChild(tableCell255);
  document.getElementById("tr6").appendChild(tableData6);
}
