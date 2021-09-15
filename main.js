window.onload =
  function () {
  try {
    TagCanvas.Start('skills');
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('skillsDiv').style.display = 'none';
  }
};