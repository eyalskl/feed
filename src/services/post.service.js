import { storageService } from './storage.service';
import { utilService } from './util.service';

const POST_KEY = 'post_DB';

export const postService = {
    query
}

function query() {
    var posts = storageService.load(POST_KEY);
    if (posts) return Promise.resolve(posts);
    posts = _getDefaultPosts();
    storageService.save(POST_KEY, posts);
    return Promise.resolve(posts);   
}


function _getDefaultPosts() {
    const names = ['John', 'Nina', 'Torri', 'Ashley', 'Phillipe', 'Bob']
    const posts = names.map(name => _createDefaultPost(name))
    return posts;
}

function _createDefaultPost(createdBy) {
    return {
        _id: utilService.makeId(),
        createdBy,
        createdAt: Date.now(),
        price: utilService.getRandomInt(19, 100),
        likes: 0,
        comments: [],
    }
}