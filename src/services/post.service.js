import { storageService } from './storage.service';
import { utilService } from './util.service';

const POST_KEY = 'post_DB';
const gNames = ['John', 'Nina', 'Torri', 'Ashley', 'Phillipe', 'Bob'];

export const postService = {
    query,
    savePostsToStorage
}

var gPosts = storageService.load(POST_KEY) || null;

function query() {
    if (gPosts) return Promise.resolve(gPosts);
    gPosts = _getDefaultPosts();
    savePostsToStorage()
    return Promise.resolve(gPosts);   
}


function _getDefaultPosts() {
    const productNames = [
        'Sony Playstation', 
        'Heinz Yellow Mustard',
        'Typing Machine',
        'Nike Shoes',
        'Apple AirPods 2',
        'Android Smartwatch'
    ];
    const imgUrls = [
        'https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1587538536686-297eb401edd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80'
    ]
    const posts = gNames.map((name, idx) => _createDefaultPost(name, productNames[idx], imgUrls[idx]))
    return posts;
}

function _createDefaultPost(name, productName, imgUrl) {
    const defaultComments = ['WOW! That\'s awesome!', 'I Wanna buy it!', 'Looks good :)', 'Oh it\'s very cool', 'Can i get a little discount?', 'I wanted one of these forever!', 'Is it in a good condition?', 'I LIKE IT! <3'];
    var commentsLength = utilService.getRandomInt(0,8);
    const comments = [];
    for (let i = 0; i < commentsLength; i++) {
        var currComment = {
            name: gNames[utilService.getRandomInt(0, gNames.length - 1)],
            content: defaultComments[utilService.getRandomInt(0, defaultComments.length - 1)]
        }
        comments.push(currComment);        
    }

    return {
        _id: utilService.makeId(),
        createdAt: Date.now(),
        likes: utilService.getRandomInt(10, 98),
        author : {
            name,
            avatar: `https://robohash.org/${name}?set=set5`,
        },
        product: {
            productName,
            imgUrl,
            price: utilService.getRandomPrice(19, 100)
        },
        comments
    }
}

function savePostsToStorage() {
    storageService.save(POST_KEY, gPosts);
}