(function() {
  var form = document.getElementById('newPwd');
  var password = document.getElementById('pwd');
  var submit = document.getElementById('submit');

  var submitted = false;

  submit.disabled = true;
  submit.className = 'disabled';

  addEvent(password, 'input', function(e) {
    var target = e.target || e.srcElement;
    submit.disabled = submitted || !target.value;
    submit.className = (!target.value || submitted) ? 'disabled' : 'enabled';
  });

  addEvent(form, 'submit', function(e) {
    if (submit.disabled || submitted) {
      e.preventDefault();
      return;
    }
    submit.disabled = true;
    submitted = true;
    submit.className = 'disabled';

    e.preventDefault();
    alert('Password is ' + password.value);
  });
}());
