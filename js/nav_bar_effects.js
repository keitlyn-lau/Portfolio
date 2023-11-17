$(function() {
    var url = window.location.href;

    $('.nav_item a').each(function() {
        if (url == (this.href)) {
            $(this).closest('div').addClass('inner');
            $(this).closest('div').parent().addClass('outer');
            $(this).closest('a').addClass('aposition');
            $(this).css('color', '#1a1a1a');
        }
    });
});