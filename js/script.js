function scroller() {
  const section = document.getElementById('two');
  section.scrollIntoView({ behavior: 'smooth' });
  var offsets = section.getBoundingClientRect();
  var top = offsets.top;
  var left = offsets.left;

  let x = window.innerHeight;
  let y = window.scrollY;
  console.log(
    x + 'abc' + y + 'top of section two' + top + 'left of section two' + left
  );
}
