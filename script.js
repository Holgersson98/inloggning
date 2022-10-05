const inpkey = document.getElementById("inpkey");
const inpvalue = document.getElementById("inpvalue");
let btn = document.getElementById("btn");

btn.onclick = function () {
    const key = inpkey.value;
    const value = inpvalue.value;
    if (key == "Sara" && value == "qwe123") {
        localStorage.setItem(key,value);
        alert("Välkommen,du är nu inloggad");
        document.getElementById("btn").innerHTML ="Logga ut";
        btn.onclick = function(){
            if (key == "Sara" && value == "qwe123") {
                location.reload(alert("Du är nu utloggad"));
                localStorage.clear()
                
            }
        };
       
    }
    else{
        location.reload(alert("Fel användarnamn eller lösenord,försök igen!"));
    }
    
};
