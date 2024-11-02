function toggleAccordion(header) {
    const content = header.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        const allContents = document.querySelectorAll('.panel');
        allContents.forEach(item => item.style.display = 'none');
        content.style.display = "block";
    }
}
