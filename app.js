const videos = document.querySelectorAll('.animation');

videos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });
});

function copyEmail(){
    var email = "jessesmithart@icloud.com";

    navigator.clipboard.writeText(email); //Copy email to clipboard
    alert("Email Copied to Clipboard! \n " + email)
}