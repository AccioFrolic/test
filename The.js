function checv(){
    if(document.getElementById("Usernamef").value == "" || document.getElementById("password-field").value == "")
    {
        document.getElementById("foc").classList.add("was-validated")
        console.log("hi")
    }
    else
    {
        window.location.href='Dashboard.html'
    }
}
function adds_t()
{
    let a=document.getElementById("floatingInput").value;
        // let b=document.getElementById("dateto").value;
    if(a!='')
    {
        document.getElementById("lis").innerHTML += '<div class="mt-5 bg-body-tertiary bg-opacity-10 rounded-pill pt-2"><div class="container"><div class="row align-items-center"><label class="checkbox-wrap checkbox-primary col-9 ps-5">'+a+'<input type="checkbox" checked><span class="checkmark ps-3"></span></label><div class="col-3"><div class="text-end"><i class="fa-solid fa-pen p-2 text-success"></i><i class="fa-solid fa-trash p-2 text-danger"></i></div><div class="d-flex justify-content-end align-items-center"><i class="fa-solid fa-circle-info me-2"></i>28th jun 2020</div></div></div></div></div>'
        document.getElementById("floatingInput").value=''
    }
}
