// jQuery code in script.js

$(document).ready(function() {
    // Function to open the login form
    function openForm() {
        $("#myForm").fadeIn();
    }

    // Function to close the login form
    function closeForm() {
        $("#myForm").fadeOut();
    }

    // Function to show book details
    function showBookDetails(title, author, synopsis) {
        $("#bookTitle").text(title);
        $("#bookAuthor").text(author);
        $("#bookSynopsis").text(synopsis);
        $("#bookDetails").fadeIn();
    }

    // Function to close book details
    function closeBookDetails() {
        $("#bookDetails").fadeOut();
    }

    // Attach click events
    $(".book-item").click(function() {
        const title = $(this).find('h2').text();
        const author = $(this).find('p').first().text();
        const synopsis = "Sample Synopsis"; // Replace with actual synopsis
        showBookDetails(title, author, synopsis);
    });

    $(".close").click(function() {
        closeBookDetails();
    });

    // Make openForm and closeForm globally accessible
    window.openForm = openForm;
    window.closeForm = closeForm;

    // Carousel functionality
    const track = $('.carousel-track');
    const slides = Array.from(track.children());
    const nextButton = $('.carousel-next');
    const prevButton = $('.carousel-prev');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to one another
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });

    // Move to the target slide
    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.css('transform', 'translateX(-' + targetSlide.style.left + ')');
        currentSlide.removeClass('current-slide');
        targetSlide.addClass('current-slide');
    };

    // When I click next, move slides to the right
    nextButton.click(() => {
        const currentSlide = track.find('.current-slide');
        const nextSlide = currentSlide.next();

        moveToSlide(track, currentSlide, nextSlide);
    });

    // When I click previous, move slides to the left
    prevButton.click(() => {
        const currentSlide = track.find('.current-slide');
        const prevSlide = currentSlide.prev();

        moveToSlide(track, currentSlide, prevSlide);
    });
});
