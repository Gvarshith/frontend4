function calculateAge() {
  const day = parseInt(document.getElementById('date').value);
  const month = parseInt(document.getElementById('mnth').value);
  const year = parseInt(document.getElementById('yr').value);

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    // ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.querySelector('.text.year h1').textContent = ageYears + " Years";
  document.querySelector('.text.months h1').textContent = ageMonths + " Months";
  document.querySelector('.text.days h1').textContent = ageDays + " Days";
}

