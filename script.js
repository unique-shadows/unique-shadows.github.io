const themeSwitch = document.getElementById('themeSwitch');
const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme === 'dark' || savedTheme === null;

themeSwitch.checked = isDark;
setTheme(isDark ? 'dark' : 'light');

themeSwitch.addEventListener('change', () => {
  setTheme(themeSwitch.checked ? 'dark' : 'light');
});

function setTheme(mode) {
  document.body.classList.toggle('dark', mode === 'dark');
  localStorage.setItem('theme', mode);
}