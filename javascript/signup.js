// PASSWORD TOGGLE

const eyeIcons = document.querySelectorAll(".fa-eye");

eyeIcons.forEach((icon) => {
  icon.style.cursor = "pointer";

  icon.addEventListener("click", () => {
    const input = icon.previousElementSibling;

    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });
});

// BUTTON ANIMATION

const createBtn = document.querySelector(".create-btn");

createBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const originalText = this.innerHTML;

  this.innerHTML = "🚀 Creating Account...";
  this.style.transform = "scale(0.98)";

  setTimeout(() => {
    this.innerHTML = "✅ Account Created!";
    this.style.transform = "scale(1)";

    setTimeout(() => {
      this.innerHTML = originalText;
    }, 2000);
  }, 1500);
});

// INPUT FOCUS EFFECT

const inputs = document.querySelectorAll(".input-box");

inputs.forEach((box) => {
  const field = box.querySelector("input, select");

  field.addEventListener("focus", () => {
    box.style.borderColor = "#2154ff";
    box.style.boxShadow = "0 0 10px rgba(33,84,255,.2)";
  });

  field.addEventListener("blur", () => {
    box.style.borderColor = "#d9dfeb";
    box.style.boxShadow = "none";
  });
});

// SIMPLE FORM VALIDATION

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const requiredInputs = document.querySelectorAll(
    'input[type="text"], input[type="email"], input[type="password"]',
  );

  let valid = true;

  requiredInputs.forEach((input) => {
    if (input.value.trim() === "") {
      valid = false;

      input.parentElement.style.borderColor = "red";

      setTimeout(() => {
        input.parentElement.style.borderColor = "#d9dfeb";
      }, 2000);
    }
  });

  if (valid) {
    createBtn.innerHTML = "🎉 Welcome to Netora!";

    setTimeout(() => {
      createBtn.innerHTML = "Create ISP Account";
    }, 3000);
  }
});

// FEATURE HOVER EFFECT

const features = document.querySelectorAll(".feature");

features.forEach((feature) => {
  feature.style.transition = "0.3s";

  feature.addEventListener("mouseenter", () => {
    feature.style.transform = "translateX(8px)";
  });

  feature.addEventListener("mouseleave", () => {
    feature.style.transform = "translateX(0)";
  });
});

// PAGE LOAD ANIMATION

window.addEventListener("load", () => {
  document.querySelector(".left-panel").style.opacity = "0";
  document.querySelector(".right-panel").style.opacity = "0";

  document.querySelector(".left-panel").style.transform = "translateX(-40px)";

  document.querySelector(".right-panel").style.transform = "translateX(40px)";

  document.querySelector(".left-panel").style.transition = "0.8s ease";

  document.querySelector(".right-panel").style.transition = "0.8s ease";

  setTimeout(() => {
    document.querySelector(".left-panel").style.opacity = "1";
    document.querySelector(".right-panel").style.opacity = "1";

    document.querySelector(".left-panel").style.transform = "translateX(0)";

    document.querySelector(".right-panel").style.transform = "translateX(0)";
  }, 100);
});
