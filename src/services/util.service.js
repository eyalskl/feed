export const utilService = {
    makeId,
    getRandomInt,
    getRandomPrice
}

function makeId(length = 10) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function getRandomPrice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var randNum = Math.floor(Math.random() * (max - min) + min);
    randNum += (Math.floor(Math.random() * (99 - 1) + 1) / 100)
    return randNum
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}