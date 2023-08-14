const img = new Image();
img.src = 'https://images.unsplash.com/photo-1590420485404-f86d22b8abf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';
img.onload = function() {
  document.write('width: ' + this.width + "<br>");
  document.write('height: ' + this.height + "<br>");
};
