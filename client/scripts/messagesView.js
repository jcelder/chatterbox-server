var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    this.addFriendBoi();
    
  },

  renderMessage: function(message) {
    var html = "";
    
    html += MessageView.render(message);
    
    MessagesView.$chats.append(html);
  },

  renderMessageByRoom: function(option = 'lobby') {
    this.$chats.html('');

    Messages.messages.forEach(m => {
      if (m.roomname === option) {
        MessagesView.renderMessage(m)
      }
    });
    
  // when the room is changed, the messagesview should display the relevant messages
  // val of room select and get the right messages
  },

  addFriendBoi: function() {
    //console.log($('#username'));
    this.$chats.on('click', '#username', function(username) {
      var username = $(username.target).val();
      console.log(username);
      MessagesView.renderMessageByUser(username);
    });

    $('#username').click(function() {
      var username = $('#username').val();
      console.log(username);
      MessagesView.renderMessageByUser(username);
    });
  },

  renderMessageByUser: function(username) {
    this.$chats.html('');

    Messages.messages.forEach(m => {
      if (m.username === username) {
        MessagesView.renderMessage(m)
      }
    });
  },


};