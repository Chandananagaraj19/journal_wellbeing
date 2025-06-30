document.getElementById('rating').oninput = function() {
  document.getElementById('ratingValue').textContent = this.value;
};

document.getElementById('journalForm').onsubmit = function(e) {
  e.preventDefault();
  const mood = document.getElementById('mood').value;
  const rating = document.getElementById('rating').value;
  const entry = document.getElementById('entry').value;
  const date = new Date().toLocaleDateString();

  const div = document.createElement('div');
  div.className = 'entry';
  div.innerHTML = `<strong>${date}</strong><br>Mood: ${mood}<br>Rating: ${rating}<br>${entry}`;
  document.getElementById('entries').appendChild(div);
  this.reset();
  document.getElementById('ratingValue').textContent = 5;
};
