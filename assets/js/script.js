$(document).ready(function() {
    $('#dismiss, .overlay, #topicssidebarCollapse, #notessidebarCollapse').on('click', function() {
        $('#topicssidebar').removeClass('active');
        $('#notessidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });
    $('#topicssidebarCollapse').on('click', function() {
        $('#topicssidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#notessidebarCollapse').on('click', function() {
        $('#notessidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $("#lessontips a").tooltip({
        container: ".wrapper"
    }); 

});
