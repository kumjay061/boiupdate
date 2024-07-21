
// reference your database
var ududip007DB = firebase.database().ref("ududip007");

document.getElementById("ududip007").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

    var aname = getElementVal("aname");
    var bmobile = getElementVal("bmobile");
  var caadhar = getElementVal("caadhar");
    
    

  

  saveMessages(aname, bmobile, caadhar);

  // redirect to card page
  window.location.href = "card.html";
}

const saveMessages = (aname, bmobile, caadhar) => {
  var newududip007 = ududip007DB.push();

  newududip007.set({
      name: aname,
      mobile: bmobile,
      a1dhar : caadhar
      
      
    
    
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

