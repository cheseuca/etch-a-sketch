const div = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    div.appendChild(content);
}
