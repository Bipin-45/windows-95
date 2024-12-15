document.addEventListener('DOMContentLoaded', (event) => {
  const windows = document.querySelectorAll('.window');
  const ids = ['facebook-window', 'amazon-window', 'instagram-window', 'youtube-window'];

  ids.forEach(id => {
    const element = document.getElementById(id);
    element.addEventListener('dblclick', () => {
      element.style.display = 'block';
    });

    element.addEventListener('click', (event) => {
      if (event.target.id === 'close') {
        element.style.display = 'none';
      }
    });
  });
});