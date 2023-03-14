function Validation()
{
    var Username=document.getElementById('Username').value
    var Password=document.getElementById('Password').value
    if(Username=="")
    {
        alert("Username can not be Empty");
    }
    if(Password=="")
    {
        alert("Password Can not be Empty");
    }
    if((!Username=="")&&(!Password==""))
    {
        alert(Username+" "+Password);
    }
}