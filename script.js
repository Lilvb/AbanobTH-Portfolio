function initCVDownload() {
    const btn = document.getElementById('cvBtn');
    const msg = document.getElementById('successMsg');

    if (!btn || !msg) return;

    btn.addEventListener('click', function(e) {
        // We don't prevent default anymore to avoid popup blocker issues
        // and to allow the browser to handle the link naturally.

        if (this.classList.contains('downloading')) {
            return;
        }

        // Start visual feedback animation
        this.classList.add('downloading');

        // Success message after the "preparation" time
        setTimeout(() => {
            this.classList.remove('downloading');
            msg.classList.add('show');

            setTimeout(() => {
                msg.classList.remove('show');
            }, 3000);
        }, 2000);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCVDownload);
