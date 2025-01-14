const themeSwitch = document.getElementById('theme-switch');
const sunIcon = themeSwitch.querySelector('.sun');
const moonIcon = themeSwitch.querySelector('.moon');

// Toggle dark mode
themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Toggle icon visibility
    sunIcon.hidden = !sunIcon.hidden;
    moonIcon.hidden = !moonIcon.hidden;
});

window.addEventListener('load', () => {
    document.getElementById('loading-spinner').style.display = 'none';
});
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Open the Help Modal
function openHelpModal() {
    document.getElementById('helpModal').style.display = 'block';
}

// Close the Help Modal
function closeHelpModal() {
    document.getElementById('helpModal').style.display = 'none';
}

// Handle Form Submission
document.getElementById('helpForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form refresh

    const issue = this.querySelector('textarea').value;

    // Simulate sending the issue to your email or server
    console.log('Help Request:', issue);

    alert('Your request has been submitted successfully!');
    this.reset();
    closeHelpModal();
});
const showMoreBtn = document.getElementById("show-more-btn");
const dots = document.getElementById("dots");
const moreText = document.getElementById("more");

showMoreBtn.addEventListener("click", () => {
    if (dots.hidden) {
        // Collapse
        dots.hidden = false;
        moreText.hidden = true;
        showMoreBtn.textContent = "Show More";
        showMoreBtn.classList.remove("show-less");
        showMoreBtn.innerHTML = 'Show More <span class="icon">▼</span>';
    } else {
        // Expand
        dots.hidden = true;
        moreText.hidden = false;
        showMoreBtn.textContent = "Show Less";
        showMoreBtn.classList.add("show-less");
        showMoreBtn.innerHTML = 'Show Less <span class="icon">▲</span>';
    }
});
