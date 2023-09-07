

        
            function validateForm() {
                const username = document.getElementById("username").value;
                const password = document.getElementById("password").value;
                const passwordStrength = document.getElementById("password-strength");
                const progressBar = passwordStrength.querySelector(".progress-bar");

                // Check if the password meets the criteria
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasNumber = /\d/.test(password);
                const isMinimumLength = password.length >= 8;

                if (hasUpperCase && hasLowerCase && hasNumber && isMinimumLength) {
                    return true; // Form submission allowed
                } else {
                    alert("Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number.");
                    return false; // Prevent form submission
                }
            }

            function checkPasswordStrength() {
                const password = document.getElementById("password").value;
                const passwordStrength = document.getElementById("password-strength");
                const progressBar = passwordStrength.querySelector(".progress-bar");

                // Calculate password strength score (0 to 4)
                let strength = 0;

                if (password.length >= 8) {
                    strength += 1;
                }

                if (/[A-Z]/.test(password)) {
                    strength += 1;
                }

                if (/[a-z]/.test(password)) {
                    strength += 1;
                }

                if (/\d/.test(password)) {
                    strength += 1;
                }

                // Update the progress bar based on the score
                progressBar.style.width = (strength / 4) * 100 + "%";

                // Apply color classes based on the score
                if (strength === 0) {
                    progressBar.className = "progress-bar bg-danger";
                } else if (strength === 1) {
                    progressBar.className = "progress-bar bg-warning";
                } else if (strength >= 2) {
                    progressBar.className = "progress-bar bg-success";
                }
            }
        



