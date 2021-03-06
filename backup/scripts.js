function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("bottomtext");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function checkOnlineStatus() {
  $.ajax({
    url: '/pyscript.py',
    success: function(result){
      document.getElementById('ServerStatus').innerHTML = 'Server status: ONLINE <button onclick="checkOnlineStatus()">Check</button>';
    },
    error: function(result){
      document.getElementById('ServerStatus').innerHTML = 'Server status: OFFLINE <button onclick="checkOnlineStatus()">Check</button>';
    }
  });
}
