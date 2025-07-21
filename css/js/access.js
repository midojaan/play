window.addEventListener("load", () => {
  if (!localStorage.getItem("accessGranted")) {
    document.getElementById("access-box").style.display = "flex";
    return;
  }
  startSplash();
});

function checkAccess() {
  const input = document.getElementById("access-input");
  const errorMsg = document.getElementById("access-error");
  const correctCode = "114456";
  if (input.value === correctCode) {
    localStorage.setItem("accessGranted", "true");
    document.getElementById("access-box").style.display = "none";
    startSplash();
  } else {
    errorMsg.textContent = "تصريح الدخول غير صحيح. حاول مرة أخرى.";
  }
}
