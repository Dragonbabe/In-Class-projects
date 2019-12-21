var next = document.querySelector('nextButton');
var previous = document.querySelector('previousButton');

function imageNext (event);
event.stopPropagation();
function imagePrevious (event);
event.stopPropagation();

next.addEventListener ('click', imageNext);
previous.addeventListener ('click', imagePrevious);