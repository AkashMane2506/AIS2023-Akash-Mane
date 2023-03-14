function Validation()
{
    var ContactNumber=document.getElementById("ContactNumber").value
    if(ContactNumber.length==10)
    {
        alert("Contact Number Is Valid");
    }
    else
    {
        alert("Contact Number Must be 10 Digits");
    }
}
   /* const EmailId=document.getElementById(EmailId).value
    if(EmailId.length==8)
    {
        alert("E-Mail Id Is Valid");
    }
    else
    {
        alert("E-Mail Id Contains at lest 8 Characters including numbers with one Special character");
    }
}*/