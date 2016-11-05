<?php
  $page_title = "Log In or Create Account";
  include $_SERVER['DOCUMENT_ROOT'] . "/inc/global/header.php";
?>

<div class="row">
  <h2>Welcome</h2>

  <p>
    Please <a href="/login">log in</a> or <a href="/register">create an account</a> to continue.
  </p>
</div>

<div class="row">
  <div class="column">
    <h2>Log In</h2>

    <?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/forms/account/login.php"; ?>
  </div>

  <div class="column">
    <h2>Create Account</h2>

    <?php include $_SERVER['DOCUMENT_ROOT'] . "/inc/forms/account/register.php"; ?>
  </div>
</div>

<? include $_SERVER['DOCUMENT_ROOT'] . "/inc/global/footer.php"; ?>
