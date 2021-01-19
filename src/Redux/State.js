import { getIdUrl } from '../utils';
const THIS_USER_ID = 6;

const store = {
  _users: [
    { id: 0, name: `Honza Příkopa`, description: `Pohodix-bombix` },
    { id: 1, name: `Pavel Bílek`, description: `Rád jezdím na Vysočinu` },
    { id: 2, name: `Vladimir Polishchuk ml.`, description: `King of Excel` },
    { id: 3, name: `Jakub Chabr`, description: `Čekám až se fitky otevřou...` },
    { id: 4, name: `Petr Hromíř`, description: `Holá říť po práci` },
    { id: 5, name: `Jana Schejbalová`, description: `Hned po zkušebce` },
    { id: 6, name: `Alexander Morlock`, description: `Graphic designer, frontend developer and just a nice guy` }
  ],

  _friends: [
    { userId: 0 },
    { userId: 1 },
    { userId: 2 },
    { userId: 3 },
    { userId: 4 },
    { userId: 5 }
  ],

  _dialogs: [
    { id: 0, name: `Honza Příkopa` },
    { id: 1, name: `Pavel Bílek` },
    { id: 2, name: `Vladimir Polishchuk ml.` },
    { id: 3, name: `Jakub Chabr` },
    { id: 4, name: `Petr Hromíř` }
  ],

  _messages: [
    { id: 0, userId: 1, type: `in`, text: `Co oběd? ;)` },
    { id: 1, userId: 1, type: `in`, text: `Dáme dnes Vartu?` },
    { id: 2, userId: 1, type: `out`, text: `No právě ta Varta dnes pro mě nic moc` },
    { id: 3, userId: 1, type: `in`, text: `Máš s sebou?` },
    { id: 4, userId: 1, type: `out`, text: `Nemám, ale tam bych nejel` },
    { id: 5, userId: 0, type: `in`, text: `Pohodix bombix!` },
    { id: 6, userId: 0, type: `out`, text: `Ok cajk ok!` }
  ],

  _posts: [
    { id: 0, likesCount: 10, text: `This is my first post` },
    { id: 1, likesCount: 21, text: `Are you gonna sleep with me?` },
    { id: 2, likesCount: 3, text: `Oh, damn!` },
  ],

  _reRenderAll() {
    return null;
  },

  _formNewMessageText: ``,

  _clearFormNewMessage() {
    this._formNewMessageText = ``;
  },

  updateFormNewMessage(text) {
    this._formNewMessageText = text;
    this._reRenderAll(this.state);
  },

  getFormNewMessage() {
    return this._formNewMessageText;
  },

  addNewPost() {
    this._posts.push({ id: +this._posts.length, likesCount: 0, text: this._formNewMessageText });
    this._clearFormNewMessage();
    this._reRenderAll(this.state);
  },

  addNewMessage() {
    this._messages.push({ id: +this._posts.length, type: `out`, userId: getIdUrl(), text: this._formNewMessageText });
    this._clearFormNewMessage();
    this._reRenderAll(this.state);
  },

  sendRerenderAllToState(callback) {
    this._reRenderAll = callback;
    this._reRenderAll(this.state);
  },

  get dialogs() {
    return this._dialogs;
  },

  get messages() {
    return this._messages;
  },

  get friends() {
    return this._friends;
  },

  get users() {
    return this._users;
  },

  get state() {
    return {
      THIS_USER_ID,
      profilePage: {
        posts: this._posts,
        getFormNewMessage: this.getFormNewMessage.bind(this),
        updateFormNewMessage: this.updateFormNewMessage.bind(this),
        addNewPost: this.addNewPost.bind(this)
      },
      messagesPage: {
        dialogs: this.dialogs,
        messages: this.messages,
        getFormNewMessage: this.getFormNewMessage.bind(this),
        updateFormNewMessage: this.updateFormNewMessage.bind(this),
        addNewMessage: this.addNewMessage.bind(this)
      },
      friends: this.friends,
      users: this.users
    };
  }
};

export default store;
