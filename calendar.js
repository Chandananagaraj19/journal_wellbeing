const calendar = document.getElementById('calendar');
const today = new Date();
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

for (let i = 1; i <= daysInMonth; i++) {
  const div = document.createElement('div');
  div.className = 'entry';
  div.innerHTML = `<strong>${i}</strong><br>😐 No Entry`;
  calendar.appendChild(div);
}
