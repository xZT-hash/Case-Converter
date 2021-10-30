let textArea = document.getElementById('a');

document.querySelector('#lower-case').addEventListener('click', () => {
    let text = textArea.value;
    textArea.value = text.toLowerCase();

});

document.querySelector('#upper-case').addEventListener('click', () => {
    let text = textArea.value;
    textArea.value = text.toUpperCase();
});

document.querySelector('#proper-case').addEventListener('click', () => {
    let text = textArea.value.toLowerCase();
    textArea.value = text.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
});

document.querySelector('#sentence-case').addEventListener('click', () => {
    let text = textArea.value.toLowerCase();
    textArea.value = text.split('. ').map((sentence) => sentence[0].toUpperCase() + sentence.slice(1)). join('. ');
})

document.querySelector('#save-text-file').addEventListener('click', () => {
    let element = document.createElement('a');
    let text = textArea.value;

    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

});