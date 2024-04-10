

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




function test(){ 
    const weekdaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


    const date = new Date();

    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const firstOfMonth = new Date(year, month, 1);
    const monthDays = new Date(year, month + 1, 0).getDate();
    
    const options = {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
      };
    const dateString = firstOfMonth.toLocaleDateString('en-gb', options);
    const inbetweenDays = weekdaysArr.indexOf(dateString);
    console.log(inbetweenDays);
    const firstDayName = dateString.split(',')
    console.log(year, monthArr[month+1]);
}


$(document).ready(function(){
    footerAlign();
    setSideNavHeight();
    test();
  });