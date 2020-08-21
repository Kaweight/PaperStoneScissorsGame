function printMessage(msg) {
    var div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function printMessageWin(win) {
    var div = document.createElement('div');
    div.innerHTML = win;
    document.getElementById('lastMessage').appendChild(div);
}

function showResetButton() {
    var reloadBTN = document.getElementById('reloadBTN');
    reloadBTN.style.display = 'block';
    reload();
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}