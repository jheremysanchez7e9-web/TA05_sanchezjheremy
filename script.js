document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DYNAMIC GREETING (Time based) ---
    const greetingElement = document.getElementById('dynamic-greeting');
    if (greetingElement) {
        const hour = new Date().getHours();
        let greetingText = 'Hello';
        
        if (hour < 12) greetingText = 'Good Morning';
        else if (hour < 18) greetingText = 'Good Afternoon';
        else greetingText = 'Good Evening';
        
        greetingElement.textContent = `${greetingText}, Welcome to my Portfolio.`;
    }

    // --- 2. MOBILE MENU ---
    const toggleBtn = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 3. FORM VALIDATION ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop actual submission for demo
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            
            // Simple validation logic
            if (name.length < 3) {
                alert("Error: Name must be at least 3 characters long.");
                return;
            }
            
            const phonePattern = /^[0-9]{9}$/;
            if (!phonePattern.test(phone)) {
                alert("Error: Phone number must contain exactly 9 digits.");
                return;
            }

            alert("Success! Form validated. Sending data...");
            contactForm.reset();
        });
    }
});
