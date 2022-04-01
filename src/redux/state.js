let store = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: "Hey, what's up?", likesCount: 1},
                {id: 2, message: "It's my first post", likesCount: 23},]
            , newPostText: 'Write text here'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "Mother"},
                {id: 3, message: "Fucker"}],
            dialogs: [
                {id: 1, name: "Xaxage"},
                {id: 2, name: "Nigger"},
                {id: 3, name: "Cunt"}]
        }


    },
    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State was changed")
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}


window.store = store;


export default store;