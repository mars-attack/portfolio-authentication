(function(){
    function Start()
    {
        console.log('App Started....');
        $('.carousel').carousel('pause');

 
        const viewResumeBTN = document.getElementById("viewResumeBTN");
        viewResumeBTN.addEventListener('click', ()=>{window.open('/Assets/Marianne_Palmer_Resume.pdf', '_blank', 'fullscreen=yes')});

    }
    window.addEventListener('load', Start);
})();
