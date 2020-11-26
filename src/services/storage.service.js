export const storageService = {
    load,
    save
}

function load(KEY) {
    return JSON.parse(localStorage.getItem(KEY));
}

function save(KEY, value) {
    localStorage.setItem(KEY, JSON.stringify(value));
}