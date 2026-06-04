// OTP INPUTS

const otpBoxes = document.querySelectorAll(".otp-box");

otpBoxes.forEach((box, index) => {
  box.addEventListener("input", () => {
    if (box.value.length === 1) {
      if (index < otpBoxes.length - 1) {
        otpBoxes[index + 1].focus();
      }
    }
  });

  box.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && box.value === "") {
      if (index > 0) {
        otpBoxes[index - 1].focus();
      }
    }
  });
});

// VERIFY OTP

const verifyBtn = document.getElementById("verifyBtn");
const message = document.getElementById("message");

verifyBtn.addEventListener("click", () => {
  let enteredOTP = "";

  otpBoxes.forEach((box) => {
    enteredOTP += box.value;
  });

  const savedOTP = localStorage.getItem("generatedOTP");

  if (!savedOTP) {
    message.innerHTML = "⚠ No OTP found. Please sign up again.";
    message.style.color = "orange";
    return;
  }

  if (enteredOTP === savedOTP) {
    message.innerHTML = "✅ Verification Successful!";
    message.style.color = "green";

    localStorage.removeItem("generatedOTP");

    setTimeout(() => {
      alert("Welcome to Netora!");

      // redirect after success
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    message.innerHTML = "❌ Invalid OTP";
    message.style.color = "red";
  }
});

// RESEND OTP

const resendBtn = document.getElementById("resendBtn");

resendBtn.addEventListener("click", () => {
  const newOTP = Math.floor(100000 + Math.random() * 900000).toString();

  localStorage.setItem("generatedOTP", newOTP);

  message.innerHTML = "📨 New OTP generated!";
  message.style.color = "#2154ff";

  console.log("New OTP:", newOTP);
});
