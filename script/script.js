function checkCode(step) {
    const input = document.getElementById('codeInput').value.trim().toUpperCase();
    let expected = "";
    if (input === "") {
        const success = document.getElementById('success-message');
        const error = document.getElementById('error-message');
        success.style.display = "none";
        error.style.display = "none";
    } else {
        switch (step) {
            case 2:
                expected = "LIVRE";
                break;
            case 3:
                expected = "FLEUR";
                break;
            case 4:
                expected = "LA SOILE";
                break;
            case 5:
                expected = "LES PETITES ABEILLES";
                break;
            case 6:
                expected = "691";
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
    
    
  }