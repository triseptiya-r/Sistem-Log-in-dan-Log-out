document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const iconEye = togglePassword ? togglePassword.querySelector(".icon-eye") : null;
  const iconEyeOff = togglePassword ? togglePassword.querySelector(".icon-eye-off") : null;
  const loginForm = document.querySelector(".login-form");
  const loginButton = document.querySelector(".btn-login");

  if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", function () {
      const isHidden = passwordInput.type === "password";
      passwordInput.type = isHidden ? "text" : "password";
      togglePassword.setAttribute(
        "aria-label",
        isHidden ? "Sembunyikan password" : "Tampilkan password"
      );
      if (iconEye && iconEyeOff) {
        iconEye.style.display = isHidden ? "none" : "block";
        iconEyeOff.style.display = isHidden ? "block" : "none";
      }
    });
  }

  if (loginForm && loginButton) {
    loginForm.addEventListener("submit", function () {
      loginButton.disabled = true;
      loginButton.textContent = "Memproses...";
    });
  }
});