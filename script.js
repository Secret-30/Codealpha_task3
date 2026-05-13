/**
 * SPA Section Switching Logic
 * Ensures that when you click a link, only that section shows
 * and the page does not reload.
 */
function showSection(id) {
    // 1. Hide all sections by removing the 'active' class
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Show the target section by adding the 'active' class
    const target = document.getElementById(id);
    if (target) {
        target.classList.add('active');
    }

    // 3. Update navigation link highlighting
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    const activeLink = document.getElementById('link-' + id);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // 4. Reset scroll position to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Manual Contact Form Submission
 * This replaces the standard form submit to prevent the "Blink/Home Jump" issue.
 */
function submitMessage() {
    // Get values from input fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    // Simple validation to ensure fields aren't empty
    if (name.trim() && email.trim() && msg.trim()) {
        // Hide the input fields container
        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            formContainer.style.display = 'none';
        }

        // Show the "Thank You" message
        const thankYouBox = document.getElementById('thank-you');
        if (thankYouBox) {
            thankYouBox.style.display = 'block';
        }

        console.log("Message simulation for Samruddhi Shimpi successful!");
    } else {
        alert("Please fill out all fields (Name, Email, and Message) before sending.");
    }
}

/**
 * Magical Click Spark Effect
 * Creates a blue glowing ring wherever the user clicks on the screen.
 */
document.addEventListener('click', (e) => {
    const spark = document.createElement('div');
    spark.className = 'click-spark';
    
    // Position the spark at mouse coordinates
    spark.style.left = e.pageX + 'px';
    spark.style.top = e.pageY + 'px';
    
    document.body.appendChild(spark);
    
    // Remove the spark element after the animation (600ms) to keep the DOM clean
    setTimeout(() => {
        spark.remove();
    }, 600);
});

/**
 * Optional: Form Reset Functionality
 * If you want a button to let users send another message later.
 */
function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('msg').value = "";
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('thank-you').style.display = 'none';
}