const inpkey = document.getElementById("inpkey");
const inpvalue = document.getElementById("inpvalue");
let btn = document.getElementById("btn");
// hämtar element och spara variablerna för att sedan använda dom nedan
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
        // gjort två funktioner, en för när du loggar in där du får en alert och sedan en när du loggar ut där du också får en alert. gjort så när du loggar in så byter knappen namn med hjälp av innerHtml.
        // använt mig utav location.reload när du har loggat ut så att logga in knappen dyker upp igen så att du kan logga in på nytt.  
        // även använt localstorage så att användarnamn och lösenord sparas om man uppdaterar eller stänger ner sidan.    
    }
    else{
        location.reload(alert("Fel användarnamn eller lösenord,försök igen!"));
    }
    // gjort så om man skriver fek användarnamn eller lösenord så får man fram en alert att man har skrivit in fel
};
