document.addEventListener("DOMContentLoaded", function () {

    const timeline =
        document.querySelector(".timeline");

    const marker =
        document.getElementById("timelineMarker");

    const items =
        document.querySelectorAll(".timeline-item");

    if (!timeline || !marker || items.length === 0) {
        return;
    }


    function moveMarker() {

        const timelineRect =
            timeline.getBoundingClientRect();

        const screenCenter =
            window.innerHeight * 0.50;

        let closestItem = null;

        let closestDistance = Infinity;


        /* Find the timeline block
           closest to the screen center */

        items.forEach(function (item) {

            const dot =
                item.querySelector(".timeline-dot");

            if (!dot) {
                return;
            }

            const dotRect =
                dot.getBoundingClientRect();

            const dotCenter =
                dotRect.top +
                dotRect.height / 2;

            const distance =
                Math.abs(
                    dotCenter - screenCenter
                );


            if (distance < closestDistance) {

                closestDistance = distance;

                closestItem = item;
            }

        });


        if (!closestItem) {
            return;
        }


        /* Get current dot */

        const dot =
            closestItem.querySelector(".timeline-dot");

        const dotRect =
            dot.getBoundingClientRect();


        /* Position large marker */

        const markerPosition =
            dotRect.top +
            dotRect.height / 2 -
            timelineRect.top -
            32;


        marker.style.top =
            markerPosition + "px";


        /* Highlight current block */

        items.forEach(function (item) {

            item.classList.remove("active");

        });


        closestItem.classList.add("active");

    }


    /* Initial position */

    moveMarker();


    /* Move while scrolling */

    window.addEventListener(
        "scroll",
        moveMarker,
        {
            passive: true
        }
    );


    /* Recalculate when window changes */

    window.addEventListener(
        "resize",
        moveMarker
    );

});