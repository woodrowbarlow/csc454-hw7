<?php
function createExistingSession($username) {
  $_SESSION['username'] = $username;
}

function createNewSession($username) {
  $_SESSION['username'] = $username;
}
?>
