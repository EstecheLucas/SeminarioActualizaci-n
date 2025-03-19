document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showMessageButton');
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    const input = document.getElementById('userInput');

    let colorCycle = 0;
    const colors = [
        { background: 'bg-white', text: 'text-dark' },
        { background: 'bg-dark', text: 'text-white' }, 
        { background: 'bg-info', text: 'text-danger' }, 
    ];

    button.addEventListener('click', () => {
        const userInputValue = input.value;

        //  mensaje
        messageBox.style.display = 'flex';
        messageText.textContent = userInputValue;

        //color
        messageBox.classList.remove(...messageBox.classList);
        messageBox.classList.add('alert', colors[colorCycle].background, colors[colorCycle].text);

        colorCycle = (colorCycle + 1) % colors.length;
    });
});
