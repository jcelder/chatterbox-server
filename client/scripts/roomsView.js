var RoomsView = {

  $button: $('#add'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.selectButton();
    RoomsView.realSelectButton();
    RoomsView.goToRoom();
  },

  renderRoom: function(room) {
    RoomsView.$select.append(room);  
  },

  selectButton: function() {
    RoomsView.$button.click(function() {
      var room = prompt('Room Name: ');
      RoomsView.renderRoom(`<option value="<%-room%>">${room}</option>`);
      Rooms.roomNames.push(room);
      //console.log('Rooms.roomNames = ', Rooms.roomNames);
    });
  },

  realSelectButton: function() {
    RoomsView.$select.click(function() {
      RoomsView.populateSelect();
      //MessagesView.renderMessageByRoom($("#selectRoom option:selected").text());
     });
  },

  goToRoom: function() {
    $('#goto').click(function() {
      MessagesView.renderMessageByRoom($("#selectRoom option:selected").text());
    });
  },

  populateSelect: function() {
    RoomsView.$select.html('');
    Rooms.roomNames.forEach(r => {
      RoomsView.$select.append(`<option value="<%-r%>">${r}</option>`)
    });
    //$('#rooms').appendTo(this.$select)
    
  }

};


// populate select with room names - lol
// populate Messages with server messages
// modify message view to display only messages from specific rooms