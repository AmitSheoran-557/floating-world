const items = document.querySelectorAll('.heading button');
items.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling;
        const icon = button.querySelector('.down-arrow-icon');

        content.classList.toggle('open');
        icon.classList.toggle('rotate-180');

        items.forEach(btn => {
            if (btn !== button) {
                const otherContent = btn.parentElement.nextElementSibling;
                const otherIcon = btn.querySelector('.down-arrow-icon');
                otherContent.classList.remove('open');
                otherIcon.classList.remove('rotate-180');
            }
        });
    });
});

// ================================= basic advance btn js ===============================
function togglePlan(plan) {
    const basicContent = document.querySelector('.basicContent');
    const advancedContent = document.querySelector('.advancedContent');
    const basicBtn = document.querySelector('.basicBtn');
    const advancedBtn = document.querySelector('.advancedBtn');
    const activeIndicator = document.getElementById('activeIndicator');

    if (plan === 'basic') {
        basicContent.classList.remove('hidden');
        advancedContent.classList.add('hidden');
        basicBtn.classList.add('active');
        advancedBtn.classList.remove('active');
        activeIndicator.style.transform = 'translateX(0)';
    } else {
        basicContent.classList.add('hidden');
        advancedContent.classList.remove('hidden');
        basicBtn.classList.remove('active');
        advancedBtn.classList.add('active');
        activeIndicator.style.transform = 'translateX(100%)';
    }
}
// ============================ tabs js ============================
document.addEventListener('DOMContentLoaded', function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabContents[0].classList.add('active');
    tabBtns[0].classList.add('active-tab');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const tabId = this.getAttribute('data-tab');
            tabBtns.forEach(btn => btn.classList.remove('active-tab'));
            tabContents.forEach(content => content.classList.remove('active'));
            this.classList.add('active-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
});

