function checkCode(step) {
    const input = document.getElementById('codeInput').value.trim().toUpperCase();
    if (input === "") {
        const success = document.getElementById('success-message');
        const error = document.getElementById('error-message');
        success.style.display = "none";
        error.style.display = "none";
        return;
    }
    let expected = "";
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
        expected = "La soile";
        break;
    case 5:
        expected = "LIVRE";
        break;
    }
    const success = document.getElementById('success-message');
    const error = document.getElementById('error-message');

    if (input === expected) {
      success.style.display = "block";
      error.style.display = "none";
    } else {
      success.style.display = "none";
      error.style.display = "block";
    }
  }