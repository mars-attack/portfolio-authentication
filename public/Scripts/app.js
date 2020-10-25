/*
File: app.js
Name: Marianne Palmer
Student#: 301122149
Date: Oct 25th 2020
*/

(function(){
    function Start()
    {
        console.log('App Started....');


        /* BUSINESS CONTACTS LIST PAGE */
        // Asks user to confirm before delete for all delete buttons
        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons) {
            button.addEventListener('click', (event)=> {
                if(!confirm("Are your sure?")) {
                    event.preventDefault();
                }
            });
        }
    
        /* PROJECTS PAGE */
        if(document.title === "Projects") {
            $('.carousel').carousel('pause'); // prevents carousel from auto changing slides
        }

        /* ABOUT PAGE */
        if(document.title === "About") {
            // opens resume in a new window and centers it based on the screen's dimensions
            function openResume(myURL, title, screenWidth, screenHeight) {
                let top = (screen.height - screenHeight) / 2; // calculating the offset values
                let left = (screen.width - screenWidth) / 2;
                window.open(myURL, title, 'width=' + screenWidth + ', height=' + screenHeight + ', top=' + top + ', left=' + left);
            }
             
            let viewResumeBTN = document.getElementById('viewResumeBTN');
            viewResumeBTN.addEventListener('click', () => openResume('/Assets/Marianne_Palmer_Resume.pdf', 'Marianne Palmer - Resume', 850, 750));             
        }

        /* CONTACT PAGE */
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
