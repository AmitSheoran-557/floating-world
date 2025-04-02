const items = document.querySelectorAll('.heading button');
items.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.parentElement.nextElementSibling;

        items.forEach(btn => {
            const otherContent = btn.parentElement.nextElementSibling;
            if (btn !== button) {
                otherContent.classList.remove('open');
            }
        });

        content.classList.toggle('open');
    });
});  