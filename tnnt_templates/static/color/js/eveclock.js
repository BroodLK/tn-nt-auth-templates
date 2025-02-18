/* global hljs */

$(document).ready(function () {
    'use strict';

    /**
     * Render a JS clock for Eve time
     *
     * @param element
     * @param {int} utcOffset
     */
    const renderClock = function (element, utcOffset) {
        const today = new Date();
        let h = today.getUTCHours();
        let m = today.getUTCMinutes();
        let s = today.getUTCSeconds();

        h = h + utcOffset;

        if (h > 24) {
            h = h - 24;
        }

        if (h < 0) {
            h = h + 24;
        }

        h = addLeadingZero(h);
        m = addLeadingZero(m);
        s = addLeadingZero(s);

        element.html(h + ':' + m + ':' + s);

        setTimeout(function () {
            renderClock(element, 0);
        }, 500);
    };

    /**
     * Functions that need to be executed on load
     */
    const init = function () {
        externalLinks();
        renderClock($('.eve-time-wrapper .eve-time-clock'), 0);
        hljs.highlightAll();
    };

    /**
     * Start the show
     */
    init();
});
