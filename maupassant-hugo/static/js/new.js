// Bind the hashchange event listener
$(window).bind('hashchange', function (event) {
    $.smoothScroll({
        // Replace '#/' with '#' to go to the correct target
        scrollTarget: decodeURI(location.hash.replace(/^\#\/?/, '#'))
    });
});

$('a[href*="#"]')
    .bind('click', function (event) {
        // Remove '#' from the hash.
        var hash = this.hash.replace(/^#/, '')
        if (this.pathname === location.pathname && hash) {
            event.preventDefault();
            // Change '#' (removed above) to '#/' so it doesn't jump without the smooth scrolling
            location.hash = '#/' + hash;
        }
    });

// Trigger hashchange event on page load if there is a hash in the URL.
if (location.hash) {
    $(window).trigger('hashchange');
}