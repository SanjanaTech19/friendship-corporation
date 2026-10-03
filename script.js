document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("complaintForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    const name = form.querySelector('input[name="name"]')?.value?.trim();
    const email = form.querySelector('input[name="email"]')?.value?.trim();
    const subject = form.querySelector('input[name="subject"]')?.value?.trim();
    const message = form.querySelector('textarea[name="message"]')?.value?.trim();

    if (!name || !email || !subject || !message) {
      event.preventDefault();
      alert("Please complete every field before submitting your concern.");
      return;
    }

    const confirmation = `Thank you, ${name}. Your concern has been recorded and forwarded to the appropriate emotional operations committee.`;
    alert(confirmation);
  });
});
