function checkCode(step) {
    const input = document.getElementById('codeInput').value.trim().toUpperCase();
    const expected = "";
    switch (step) {
    case 1:
        expected = "LIVRE";
        break;
    case 2:
        expected = "LIVRE";
        break;
    case 3:
        expected = "LIVRE";
        break;
    case 4:
        expected = "LIVRE";
        break;
    case 5:
        expected = "LIVRE";
        break;
    }
    const success = document.getElementById('successMessage');
    const error = document.getElementById('errorMessage');

    if (input === expected) {
      success.style.display = "block";
      error.style.display = "none";
    } else {
      success.style.display = "none";
      error.style.display = "block";
    }
  }