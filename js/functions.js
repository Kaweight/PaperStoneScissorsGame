function printMessage(msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function printMessageWin(win) {
    const div = document.createElement('div');
    div.innerHTML = win;
    document.getElementById('lastMessage').appendChild(div);
    div.style.border = '1px solid #131313';
    div.style.borderTopColor = '#fff';
    div.style.borderLeftColor = '#fff';
    div.style.padding = '5px 10px';
}

function showResetButton() {
    const reloadBTN = document.getElementById('reloadBTN');
    reloadBTN.style.display = 'block';
}

function hangeDisplayText() {
    const messages = document.getElementById('messages');
    messages.style.display = 'none';
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}