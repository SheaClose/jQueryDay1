$(document).ready(function() {
  // $('#error_msg').hide();
  var user = 'Shea';
  var pass = '1234';
  $('#button').click(function() {
    var userName = $('#input');
    var password = $('#password');

    password.css('box-shadow', '0 0 0 5px transparent');

    if (!userName.val()) {
      userName.css('box-shadow', '0 0 0 5px red');
      console.log(userName.css('box-shadow'));
      $('#container').prepend(
        '<p id="error_msg" style="color:red; font-size:12px;"> Please ensure username is provided </p>'
      );
    }
    if (!password.val()) {
      password.css('box-shadow', '0 0 0 5px red');
      $('#container').prepend(
        '<p id="error_msg" style="color:red; font-size:12px;"> Please ensure password is provided </p>'
      );
    }
    if (userName.val() === user && password.val() === pass) {
      console.log("You're in");
    } else {
      $('#container').prepend(
        '<p id="error_msg" style="color:red; font-size:12px;"> Please double check username and password </p>'
      );
    }
  });

  $('#input').on('keydown', function(event) {
    console.log(event.target.value);
  });
});
