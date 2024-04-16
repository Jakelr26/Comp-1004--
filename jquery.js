

function footerAlign() {
    $('footer').css('display', 'block');
    $('footer').css('height', 'auto');
    var footerHeight = $('footer').outerHeight();
    $('body').css('padding-bottom', footerHeight);
    $('footer').css('height', footerHeight);

    var mainContentHeight = $('.sidenav').outerHeight();
    $(mainContentHeight).height('90vh')

}
  
function setSideNavHeight() {
    var mainContentHeight = $('#tabContents').outerHeight();
    $('.sidenav').height(mainContentHeight);
    
}






$(document).ready(function(){
    footerAlign();
    setSideNavHeight();
    test();
  });