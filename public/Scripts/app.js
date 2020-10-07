(function(){
    function Start()
    {
        console.log('App Started....');
        $('.carousel').carousel('pause');

        // opens resume in a new window ans centers it based on the screen's dimensions
        function openResume(myURL, title, screenWidth, screenHeight) {
            let top = (screen.height - screenHeight) / 2;
            let left = (screen.width - screenWidth) / 2;
            window.open(myURL, title, 'width=' + screenWidth + ', height=' + screenHeight + ', top=' + top + ', left=' + left);
        }
         
        const viewResumeBTN = document.getElementById("viewResumeBTN");
        viewResumeBTN.addEventListener('click', () => openResume('/Assets/Marianne_Palmer_Resume.pdf', 'Marianne Palmer - Resume', 1050, 550)); 
    }
    window.addEventListener('load', Start);
})();
