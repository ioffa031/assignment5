document.addEventListener("DOMContentLoaded", function(){
    const workNineImg = document.querySelector('.work-nine-img');

    workNineImg.addEventListener('click', function(){
        var videoNine = document.createElement('video')
        videoNine.setAttribute('controls', true);
        videoNine.setAttribute('autoplay', true);

        var source = document.createElement('source');
        source.setAttribute('src', './assets/finalanimationsmall.mp4');
        source.setAttribute('type', 'video/mp4');
        videoNine.appendChild(source);

        var workNine = this.parentElement; // Get the parent container
        workNine.replaceChild(videoNine, this); // Rep
    
    // Play the video
        // videoNine.play();
    })
})