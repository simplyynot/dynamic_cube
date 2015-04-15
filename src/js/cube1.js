var init = function() {
  var box = document.querySelector('#main_content').children[0],
      showPanelButtons = document.querySelectorAll('div #show-buttons'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
        box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
  document.getElementById('toggle-backface-visibility').addEventListener( 'click', function(){
    box.toggleClassName('panels-backface-invisible');
  }, false);
  
};
  
window.addEventListener( 'DOMContentLoaded', init, false);