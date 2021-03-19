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
    });
  
}