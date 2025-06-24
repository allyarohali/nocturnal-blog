function showLinks(card) {
    const links = card.querySelector('.links');
    // Toggle the display of the links
    if (links.style.display === 'none' || links.style.display === '') {
        links.style.display = 'block';
    } else {
        links.style.display = 'none';
    }
}