window.addEventListener('load', function () {
    var submit_btn = document.getElementById('submit');
    //console.log('lol');
    submit_btn.addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.querySelector('#form > input[name="name"]').value;
    if(name === '')
    {
        alert('Name cannot be empty, try again');
        return;
    }
    var email = document.querySelector('#form > input[name="email"]').value;
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
      if(validateEmail(email) == false)
      {
          alert('Incorrect email, please try again.');
          return;
      }
    var tel = document.querySelector('input[name="tel"]').value;

    if(tel.length != 10)
    {
        alert('Check Phone number, please try again.');
        return;
    }
    var text_about = document.querySelector('input[name="about"]').value;
    var year = document.querySelector('select');
    var year_study;
    //console.log(year);
    //console.log(name);
    for(var i=0;i<year.length;i=i+1)
    {
        if(year[i].selected){
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
    
    fetch('/your_route',{
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
            //console.log('k');
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    
    });
});