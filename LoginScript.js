function checkCreds()
{


var codeName = document.getElementById("codeName").value;
var guild = document.getElementById("guild").value;
var badgeId = document.getElementById("badgeNum").value;
var userInfo = codeName + " " + guild;

if(userInfo.length > 20 || userInfo.length <4)
    {
       alert("Code Name + Guild must be max 20 characters"); 
    }
if (badgeId >999|| badgeId<100)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge ID"; 
    }

else if(userInfo.length <= 20 || userInfo.length <=4)
    {
    document.getElementById("loginStatus").innerHTML = "User Info: " + userInfo + " " + badgeId;
    alert("Congrats - you are now logged on - hit enter to go to the next page");
    }
}
