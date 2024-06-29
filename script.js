document.addEventListener('DOMContentLoaded', function () {
    // Initialize confetti
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

    // Background music setup
    const backgroundMusic = new Audio('background_music.mp3'); // Replace with your actual MP3 file
    backgroundMusic.loop = true;
    backgroundMusic.volume = 1.0;

    // Show container after modal is closed
    const modal = document.getElementById('birthdayMessage');
    const closeModalButton = document.getElementById('closeMessage');
    const container = document.querySelector('.container');

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
        container.style.display = 'block';

        // Play background music after user interaction
        backgroundMusic.play().catch(error => {
            console.error('Failed to play background music:', error);
        });
    });

    // Add event listeners to images
    const images = document.querySelectorAll('.image-item img');
    images.forEach(image => {
        image.addEventListener('click', () => {
            const questionElement = container.querySelector('.question p');
            questionElement.innerText = "They are all my favorite pictures lol";

            // Hide the image gallery
            const imageGallery = container.querySelector('.image-gallery');
            imageGallery.style.display = 'none';

            // Show the video
            const video = document.createElement('video');
            video.setAttribute('controls', 'controls');
            video.setAttribute('width', '600');
            const source = document.createElement('source');
            source.setAttribute('src', 'video.mp4'); // Replace with your actual video file
            source.setAttribute('type', 'video/mp4');
            video.appendChild(source);

            // Append the video to the container
            container.appendChild(video);

            // Add confetti when an image is clicked
            jsConfetti.addConfetti();

            // Pause background music when video plays
            video.addEventListener('play', () => {
                backgroundMusic.pause();
            });

            // Resume background music when video pauses or ends
            video.addEventListener('pause', () => {
                backgroundMusic.play().catch(error => {
                    console.error('Failed to resume background music:', error);
                });
            });

            video.addEventListener('ended', () => {
                backgroundMusic.play().catch(error => {
                    console.error('Failed to resume background music:', error);
                });
            });
        });
    });
});