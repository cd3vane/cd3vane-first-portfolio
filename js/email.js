(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_fmjOL1kBvhDpFauHYBmiw');
})();

window.onload = function() {
    var frm = document.getElementById('contact-form')
    frm.addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        if(validateForm() && ValidateEmail()){
            emailjs.sendForm('service_i2st2jh', 'template_2clwecr', this)
            .then(function() {
                console.log('SUCCESS!');
                frm.reset();
                alert("Email successafully sent!");
                
            }, function(error) {
                console.log('FAILED...', error);
                frm.reset();
                alert("Something went wrong, try again");
            });
        };
    });
  
}

function validateForm() {
    var name = document.forms["contact-form"]["user_name"].value;
    var message = document.forms["contact-form"]["message"].value;

    console.log(message);
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }else if(message == ""){
      alert("Email must contain a message");
      return false;
    }
    return true
  }

  function ValidateEmail() 
{
    var email = document.forms["contact-form"]["user_email"].value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    {
        return (true)
    }
        alert("You have entered an invalid email address!")
        return (false)
}
