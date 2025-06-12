// Deteksi ketika halaman dimuat atau difokuskan kembali
document.addEventListener('DOMContentLoaded', triggerAnimation);
window.addEventListener('pageshow', triggerAnimation);

function triggerAnimation() {
    // Hanya jika di halaman login
    if (window.location.pathname.includes('login.html')) {
        const body = document.body;
        const form = document.querySelector('.form-login');
        
        // Reset animasi dengan reflow
        body.classList.remove('login-page');
        void form.offsetWidth; // Trigger reflow
        body.classList.add('login-page');
        
        // Untuk browser yang support View Transition API
        if ('startViewTransition' in document) {
            document.startViewTransition(() => {
                body.classList.add('login-page');
            });
        }
    }
}

function animasiSelesai() {
    document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('login.html')) {
        if (!sessionStorage.getItem('loginAnimationShown')) {
            document.body.classList.add('animate-login');
            sessionStorage.setItem('loginAnimationShown', 'true');
            
            // Hapus class setelah animasi selesai
            setTimeout(() => {
                document.body.classList.remove('animate-login');
            }, 500);
        }
    } else {
        sessionStorage.removeItem('loginAnimationShown');
    }
});
}

function pengecekanLogin() {
    document.querySelector('.form-login form').addEventListener('submit', function(event) {
     event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields.');
            return;
        }
    console.log('Email:', email);
    console.log('Password:', password);

    alert('Login successful!');
    });
}