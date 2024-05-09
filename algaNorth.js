window.onload = function () {

    const spans = ["content", "content2", "content3"]; // Fix typo here

    // Index to keep track of which span is currently visible
    let currentIndex = 0;

    // Function to toggle visibility of spans
    function toggleSpanVisibility() {
        // Hide the current span
        document.getElementById(spans[currentIndex]).style.display = "none";

        // Increment index or loop back to 0 if at the end
        currentIndex = (currentIndex + 1) % spans.length;

        // Show the next span
        document.getElementById(spans[currentIndex]).style.display = "block";
    }

    // Function to change background and info every 5 seconds
    function changeBackgroundAndInfo() {
        // Array of background image URLs
        const backgrounds = ["/fotoalgas2.png", "/fotofondo2.png", "/fotofondo4.png"]; // Remove url() here

        // Change background image
        document.getElementById("introduction").style.backgroundImage = `url(${backgrounds[currentIndex]})`;

        // Toggle span visibility
        toggleSpanVisibility();
    }

    // Call the function initially
    changeBackgroundAndInfo();

    // Set interval to call the function every 5 seconds
    setInterval(changeBackgroundAndInfo, 5000);

    document.getElementById("logo").addEventListener("click", function() {
        window.location.href = "../index.html"; // Replace "index.html" with the path to your main page
    });

};