$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function () {
  if ($("#our-skill-section").isInViewport()) {
    $(".single-skill-img-1").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#30bae7" },
    });

    $(".single-skill-img-2").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#d74680" },
    });

    $(".single-skill-img-3").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#15c7a8" },
    });

    $(".single-skill-img-4").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#eb7d4b" },
    });
    $(".single-skill-img-5").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#008080" },
    });
    $(".single-skill-img-6").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#d1b432" },
    });
    $(".single-skill-img-7").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#17b4c9" },
    });
    $(".single-skill-img-8").circleProgress({
      value: 1,
      size: 150,
      startAngle: -Math.PI,
      reverse: !1,
      thickness: 10,
      lineCap: "butt",
      fill: { color: "#887BB0" },
    });
  }
});
