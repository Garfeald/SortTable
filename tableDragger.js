tableDragger(el)

var el = document.getElementById('table');
var dragger = tableDragger(el, {
  mode: 'row',
  dragHandler: '.drop',
  onlyBody: true,
  animation: 300
});
dragger.on('drop',function(from, to){
  console(from);
  console(to);
});