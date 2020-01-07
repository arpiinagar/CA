window.addEventListener('load', function () {
    var submit_btn = document.getElementById('submit');
    console.log('h1');
    submit_btn.addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.querySelector('#form > input[name="name"]').value;
    var email = document.querySelector('#form > input[name="email"]').value;
    var tel = document.querySelector('input[name="tel"]').value;
    var text_about = document.querySelector('input[name="about"]').value;
    var year = document.querySelector('input[name="year-study"]');
    var year_study;
    console.log(name);
    for(var i=0;i<year.length;i=i+1)
    {
        if(year[i].checked){
            year_study = year[i].value;
        }
    }
    
    data = {
        "name":name,
        "email":email,
        "phone_no":tel,
        "about":text_about,
        "year":year_study
    }
    
    console.log(data);
    
    fetch('/route',{
        method: 'POST',
        headerheaders: {
            "Content-Type": "application/JSON",
        },
        credentials: 'include',
                    body: JSON.stringify(data),
                    redirect: 'error'
    }).then(res =>{
        return res.json();
    })
    .then( json => {
        if(!json.success) alert(json.msg);
        else
        {
            var thank = document.getElementById('thanks');
            thank.innerHTML='Thank you for registering!';
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    
    });
});