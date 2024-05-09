window.onload = function() {

    document.getElementById("scrollButton").addEventListener("click", function() {
        window.scrollBy(0, 1000);
    });

    const redirectDiv = document.querySelector('.logo');
    console.log("hello")
    redirectDiv.addEventListener('click',
        function(e) {
            window.location.href = '/index.html';
        }
    );

    const spans = ["conent1", "content2", "content3"];

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
    print("hello")
    // Function to change background and info every 5 seconds
    function changeBackgroundAndInfo() {
        // Array of background image URLs
        const backgrounds = [url("/fotoalgas2.png"), url("/fotofondo2.png"), url("/fotofondo3.png")];
    
        // Change background image
        document.getElementById("intro").style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    
        // Toggle span visibility
        toggleSpanVisibility();
    }
    
    // Call the function initially
    changeBackgroundAndInfo();
    
    // Set interval to call the function every 5 seconds
    setInterval(changeBackgroundAndInfo, 5000);
    
};