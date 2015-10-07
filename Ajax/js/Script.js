/**
 * Created with IntelliJ IDEA.
 * User: rchab
 * Date: 7/21/15
 * Time: 4:57 PM
 * To change this template use File | Settings | File Templates.
 */

//window.onload = initAll;


function myFunction(){
    var d = document.getElementById("description");
    var x = document.getElementById("myParagraph");
    if (x.style.color.match("red")) {
        d.innerHTML = "Change to red";
        x.style.fontSize = "50px";
        x.style.color = "blue";
    } else {
        d.innerHTML = "Change to blue";
        x.style.fontSize = "25px";
        x.style.color = "red";
    }
}


