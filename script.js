function initCVDownload() {
    const btn = document.getElementById('cvBtn');
    const msg = document.getElementById('successMsg');

    if (!btn || !msg) return;

    btn.addEventListener('click', function(e) {
        if (this.classList.contains('downloading')) {
            e.preventDefault();
            return;
        }

        e.preventDefault();
        const url = this.getAttribute('href');

        // Start download animation
        this.classList.add('downloading');

        // Simulate download/preparation
        setTimeout(() => {
            this.classList.remove('downloading');
            msg.classList.add('show');

            // Open the link
            window.open(url, '_blank');

            // Hide success message
            setTimeout(() => {
                msg.classList.remove('show');
            }, 3000);
        }, 2000);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCVDownload);
