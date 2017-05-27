/*global $*/
$(document).ready(function() {
    'use strict';
    $('.info-list li').click(function () {
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
});
