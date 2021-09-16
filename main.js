window.onload =
  function () {
    const options = {
      textColour: '#fff',
      // freezeActive: true,
      noSelect:true,
      initial: [.2, .2],
      minSpeed: .1,
     };
  try {
    TagCanvas.Start('skills','',options);
  } catch(e) {
    // something went wrong, hide the canvas container
    document.getElementById('skillsDiv').style.display = 'none';
  }
};