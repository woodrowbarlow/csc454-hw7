<?php
  $page_title = "Log In";
  include $_SERVER['DOCUMENT_ROOT'] . "/inc/global/header.php";
?>

<?php
  $username = filter_input(INPUT_POST, 'username');
  if ($username === null) {
?>

  <p>Please log in to continue.</p>

  <?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/forms/account/login.php"; ?>

<?php
  } else {
    createExistingSession($username);
    header('Location: ' . $_SERVER['DOCUMENT_ROOT'] . '/dashboard/');
  }
?>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/global/footer.php"; ?>
