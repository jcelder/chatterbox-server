var FormView = {

  $form: $('form'),
 
  //username: window.location.search.slice(10),

  initialize: function() {
    

    FormView.$form.on('submit', FormView.handleSubmit);

  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // event.preventDefault();
    App.send($("#message").val(), $("#selectRoom option:selected").text());
    //console.log($("#selectRoom option:selected").text());
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};