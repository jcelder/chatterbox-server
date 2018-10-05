var Friends = {
  myFriends: {},

  $button: $('#friendStatus'),

  filterUser: function(username) {
    console.log(username);
    MessagesView.renderMessageByUser(username);
    // insert Username to div
    $('#pagename').html(`<h3>${username}</h3>`)
    // if not friend, insert addFriend button to div
    // if (!Friends.myFriends[username]) {
    //   $('#friendStatus').html(`<button id='add'>Add Friend</button>`);
    //   Friends.$button.click(Friends.addFriend(username));
    // }
    if (!Friends.myFriends.hasOwnProperty(username)) {
      $('#friendStatus').html(`<button id='add'>Add Friend</button>`);
      Friends.$button.click(Friends.addFriend);
    } else {
      $('#friendStatus').html(`<p>You are friends</p>`);
    }

    // !Friends.myFriends[username] && 
    //Friends.myFriends[username] = username;
  },

  addFriend: function(username) {
    //Friends.myFriends[username] = username;
    Friends.myFriends[username] = username;

    $('#friendStatus').html(`<p>Your friend</p`);
    
    //alert(`${username} added!`)
  }
    
};