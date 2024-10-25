function toggleFaq(element) {
    const content = element.nextElementSibling;
    const isOpen = content.style.display === 'block';
    content.style.display = isOpen ? 'none' : 'block';
    element.querySelector('span').textContent = isOpen ? '+' : '-';
  }
  