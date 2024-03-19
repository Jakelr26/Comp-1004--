function openTab(evt, tabName) {
    var i, tabContents, TabLink; 
    tabContents = document.getElementsByClassName("tabContents");
    for (i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    TabLink = document.getElementsByClassName("TabLink");
    for (i = 0; i < TabLink.length; i++) {
        TabLink[i].className = TabLink[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}