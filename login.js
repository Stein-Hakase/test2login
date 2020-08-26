$(document).ready(function(){
    let dummydata=[
        {
            name:'user1',
            login:'user1',
            password:'user1'
        },
        {
            name:'user2',
            login:'user2',
            password:'user2'
        },
        {
            name:'user3',
            login:'user3',
            password:'user3'
        }
    ]
    $('#loginform').submit(()=>{
        event.preventDefault()
        let formData= $('#loginform').serializeArray()
        let loggedin=false
        // getting form data
        let id=formData[0].value
        let password=formData[1].value

        dummydata.map((data )=> {
           
            if (data.login === id && password=== data.password){
                loggedin=true
            }

        })
        
        if (loggedin){
            alert('You succeffully logged in Click OK to Redirected')
            location.href = 'profile.html';

        }else alert('Wrong ID or Password')
    })
  });