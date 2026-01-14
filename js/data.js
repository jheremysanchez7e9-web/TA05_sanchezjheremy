function updateDate() {
    const now = new Date();
    const dateDisplay = document.getElementById('date-display');
    const yearDisplay = document.getElementById('current-year');
    
    if(dateDisplay) {
        const d = String(now.getDate()).padStart(2, '0');
        const m = String(now.getMonth() + 1).padStart(2, '0');
        dateDisplay.innerText = `${d}.${m}.${now.getFullYear()}`;
    }
    
    if(yearDisplay) {
        yearDisplay.innerText = now.getFullYear();
    }
}
