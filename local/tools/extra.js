export function throttle(fn, delay = 500, mustRunDelay = 1000) {
  var timer = null;
  var t_start;
  return function(){
    var context = this, args = arguments, t_curr = +new Date();
    clearTimeout(timer);
    if(!t_start){
      t_start = t_curr;
    }
    if(t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args);
      t_start = t_curr;
    }
    else {
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  };
}

export function changeTitle(title){
  document.setTitle = function(t) {
    document.title = t;
    var i = document.createElement('iframe');
    i.src = 'https://img.maihaoche.com/ico/favicon.ico';
    i.style.display = 'none';
    i.onload = function() {
      setTimeout(function(){
        i.remove();
      }, 9)
    }
    document.body.appendChild(i);
  }
  setTimeout(function(){
    document.setTitle(title)
  }, 0);
}
