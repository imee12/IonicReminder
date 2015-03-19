var client = require('./client');

var call = {
  triggerCall: function(reminder) {
    return client.makeCall({
      to: reminder.user.phone,
      from: '+18437799077',
      url: 'http://7c149e33.ngrok.com -> 127.0.0.1:80/call/twiml/' + reminder.user._id + '/' + reminder._id
    ////

    }, function(error, response) {
      console.log(error || response);
    });
  }
}

module.exports = call;
