
window.addEventListener("scroll", function() { 

 deplacement = (window.scrollY/(document.body.offsetHeight-window.innerHeight))*100;


document.getElementById('progress_bar').value = deplacement; 
});


function myScroll() { 
    let progress = document.getElementById('progress_bar').value;
    
    value = ((document.body.offsetHeight-window.innerHeight)* progress) / 100;
    
    window.scroll(0, value) 
}

