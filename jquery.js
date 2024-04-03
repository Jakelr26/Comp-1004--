$(document).ready(function() {
    function setSideNavHeight() {
        var mainContentHeight = $('#tabContents').outerHeight();
        $('.sidenav').height(mainContentHeight);
    }
    setSideNavHeight();
    $(window).resize(setSideNavHeight);
});
$(document).ready(function() {
    document.getElementById('Aim').addEventListener('keypress', function(event) {
        if (event.key === "Enter") {
        event.preventDefault();
        function setSideNavHeight() {
            var mainContentHeight = $('#tabContents').outerHeight();
            $('.sidenav').height(mainContentHeight);
        }
        setSideNavHeight();
        $(window).resize(setSideNavHeight);
        }
    });
});