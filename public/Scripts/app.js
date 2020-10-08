(function(){
    function Start()
    {
        console.log('App Started....');


        if(document.title === "Projects") {
            $('.carousel').carousel('pause'); // prevents carousel from auto changing slides
        }

        if(document.title === "About") {
            // opens resume in a new window ans centers it based on the screen's dimensions
            function openResume(myURL, title, screenWidth, screenHeight) {
                let top = (screen.height - screenHeight) / 2;
                let left = (screen.width - screenWidth) / 2;
                window.open(myURL, title, 'width=' + screenWidth + ', height=' + screenHeight + ', top=' + top + ', left=' + left);
            }
             
            let viewResumeBTN = document.getElementById('viewResumeBTN');
            viewResumeBTN.addEventListener('click', () => openResume('/Assets/Marianne_Palmer_Resume.pdf', 'Marianne Palmer - Resume', 1050, 550));             
        }

        if(document.title === "Contact") {
            let sendButton = document.getElementById('sendButton');
            let cancelButton = document.getElementById('cancelButton');
        
            let firstName = document.getElementById('firstName');
            let lastName = document.getElementById('lastName');
            let emailAddress = document.getElementById('emailAddress');
            let contactNumber = document.getElementById('contactNumber');
            let message = document.getElementById('message');
            
            sendButton.addEventListener('click', (event)=> {
                event.preventDefault();
                console.log(
                    `
                    First Name: ${firstName.value}
                    Last Name:  ${lastName.value}
                    Email:      ${emailAddress.value}
                    Contact#:   ${contactNumber.value}
                    Message:    ${message.value}
                    `
                );
            } );
            
            cancelButton.addEventListener('click', (event)=> {
                event.preventDefault();
                if(confirm("Are your sure?")) {
                    location.href = "/home";
                }
            } );
        }
    }
    window.addEventListener('load', Start);
})();
