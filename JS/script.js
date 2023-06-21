$(document).ready(function () {
    $(".nav a").click(function () {
        $(this).tab('show');
    });
    $("#reg_page .Reg_form .name_btn a").click(function () {
        $(this).tab('show');
    });
    $("#aboutus .aboutus-middle .aboutus tr th  a").click(function () {
        $(this).tab('show');
    });
    
    $("button a").click(function () {
        $(this).tab('show');
    });
    $(".footerall .footer ul li a").click(function () {
        $(this).tab('show');
    });
    $("#sitemap .sitemap table ul li a").click(function () {
        $(this).tab('show');
    });

});


function addDetail(){
    var fname = document.forms.register.firstname.value;
    var mname = document.forms.register.middlename.value;
    var lname = document.forms.register.lastname.value;
    var dateofbirth = document.forms.register.date_of_birth.value;
    var gender = document.forms.register.gender.value;
    var address = document.forms.register.address.value;
    var zipcode = document.forms.register.zipcode.value;
    var email = document.forms.register.email.value;
    var number = document.forms.register.number.value;
    var courses = document.forms.register.courses.value;
    var qualifications = document.forms.register.qualifications.value;

    const detail = JSON.stringify([fname, mname, lname, dateofbirth, gender, address, zipcode, number, qualifications, courses]);
    localStorage.setItem(email, detail);
    showAll();

    console.log(detail);
}

function editDetail(){
    var email = document.forms.register.email.value;
    let data = JSON.parse(localStorage.getItem(email));
    document.forms.register.firstname.value = data[0];
    document.forms.register.middlename.value = data[1];
    document.forms.register.lastname.value = data[2];
    document.forms.register.dateofbirth.value = data[3];
    document.forms.register.gender.value = data[4];
    document.forms.register.address.value = data[5];
    document.forms.register.zipcode.value = data[6];
    document.forms.register.number.value = data[7];
    document.forms.register.qualifications.value = data[8];
    document.forms.register.courses.value = data[9];
}

function deleteDetail(){
    var email = document.forms.register.email.value;
    localStorage.removeItem(email);
    showAll();
}
function clearAll(){
    localStorage.clear();
    showAll();
}


function showAll(){
    var key = "";
    var list = "<tr><th>First Name</th><th>Middle Name</th><th>Last Name</th><th>Date Of Birth</th><th>Gender</th><th>Address</th><th>Zip code</th><th>Email</th><th>Phone Number</th><th>Qualifications</th><th>Courses</th></tr>\n";
    var i= 0;
    if(localStorage.length == 0){
        list += "<tr><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th><th>Empty</th></tr>\n";
    }
    else{
        for(i=0; i<localStorage.length; i++){
            key=localStorage.key(i);
            let data = JSON.parse(localStorage.getItem(key));
            list += "<tr><td>" + data[0] + "</td>\n<td>" + data[1] +
                "</td>\n<td>" + data[2] + "</td>\n<td>" + data[3] +
                "</td>\n<td>" + data[4] + "</td>\n<td>" + data[5] + "</td>\n<td>" + data[6] + "</td>\n<td>" + key + "</td>\n<td>" + data[7] + "</td>\n<td>" + data[8] + "</td>\n<td>" + data[9] + "</td></tr>\n";
        }
    }
    document.getElementById('list').innerHTML = list;
}


