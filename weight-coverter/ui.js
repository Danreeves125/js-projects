class UI {

    showAlert(msg, className) {
        // Clear alert so only one is showing at a time
        this.clearAlert();
        // Create div
        const alert = document.createElement('div');
        // Add Classes
        alert.className = `${className}`;
        // Add text child
        alert.appendChild(document.createTextNode(`${msg}`));
    
        // get h1
        const container = document.querySelector('.convertContainer');
        // Get card
        const card = document.querySelector('.containerInner');

        //Insert alert
        container.insertBefore(alert, card);
        
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
        
    }

    clearAlert() {
        const activeAlert = document.querySelector('.alert');

        if(activeAlert) {
            activeAlert.remove();
        }
    }
}