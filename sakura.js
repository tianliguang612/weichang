/* 樱花飘落特效 v2 —— 粉色樱花花瓣 + 鼠标互动吹散 */
(function () {
  var PETALS = {
  "round": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACBElEQVR4nO2cy00DQRAF24g7kUAGHEiCIEmCAxlAJEQAp5HQgi28nu7Xb1x19FqrnlfTO/uxNwIAAAAAAAAAAAAAIJ2DuoA9fL28vR/bdnh+fKis5VJsBJwK/RgOMtoL2BP8ls4ibtQFnGJG+DP3k0FbAbND6yqhpYCssDpKaCcgO6RuEloJqAqnkwT5WZA6DPUZkkyAOvgtKhGSQ1C38CN0NZUL6Bj+QFFbqYDO4Q+qaywT4BD+oLLWEgFO4Q+qak4X4Bj+oKL2Vhdi10iqAOfZP8geAx0gJk3ACrN/kDkWOkBMioCVZv8ga0x0gBgEiEGAmOkCVjz+DzLGdjt7h2U83d/9+uz141NQyUX4Cfgr+O02IxFea8Cp8Pd8rwE+As4N1USCj4BF8RCwdzYbdIGHgIVBgBgEiJkuQP1Tv0wyxubRAXsvrAwuyDwELIyPgHNns8Hsj0gSkLYO/DfUhPCzxuR3M26Eu8jd0NT/B6zybCDzzM5nDViUVAErXBNkj4EOEIMAMekCnA9DFbXTAWIQIAYBYkoEOK4DVTXTAWLKBDh1QWWtdICYUgEOXVBdIx0gplxA5y5Q1CbpgI4Srup9QRG9JChrka4BHSSoa5AvwsoA1OFHNBAQoQmiQ/gRDd6auCX7QX6X4AftBPzknNfUr/RKewAAAAAAAAAAAAAAAJjIN7V9t3dOfraGAAAAAElFTkSuQmCC",
  "wide": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAB20lEQVR4nO3cwVHDQAyFYYXJnU6ogBK40gQF0QRXSqACOkkFcNqZTLAZbCQ9af1/xySTaPVWcexJYgYAAAAAAAAAAAAAAEKc1AVs8fX6/vnXx55enh4ia/FSPoAtTV9TOYySAXg0fU21MO7UBdyKbH7G829VZgIUjakwDSUmQLUrK0yDPAB1E9SvLw1AvfhBWYcsgCrNH1T1pB6EqzV9TebBOW0CujTfLLfW8Ano1Pgl0dMQOgHdm28Wv4awAGZo/hC5lpAAZmr+ELUm9wBmbP4QsTbXAGZu/uC9RvmliKNzC+AIu3/wXCsTIOZyIibZ/c+P9z9ue/u4ZJbgcZJ29igk1VLjb+9LDuI/er0F/db8PY8roE8AW5vaJIQ+AUyqRwB7d3ODKegRwMQIQMwlgArfr8nmtWYmQMwtgNAp2HtiFXRC5rlWJkDMNYBSU9Bg95sFTECJEJo036zjxbjR3AJXQz30C2Bo2OwlHITFCECMAMRCApjx0kTUmpgAsbAAZpqCyLUwAWKhAcwwBa1/H2DWO4SM2lPegjqGkFVz2jGgUwhT/kjPrEcI2TXK/iui2repVZtD9jG00jQoaznsv6VU2QBlArgWFUaVpgMAAAAAAAAAAAAAAADBvgEJDKjFLXrjEgAAAABJRU5ErkJggg==",
  "narrow": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACPElEQVR4nO2dMVLDQBAEVxQ5jyB3gB/hN/MICMh5BC+A6KpcIGPr5NvekaZDy6pabe/cWQrkCIMy0QX08P369jH3+XQ6HrJrWcsDXcBSLjX/2rGqyCRgaXNV0iCRgJ7JVklDeQFrGqkgobyArVNawD0muHoKSm3CWc2qtEGXEEBNaQUR+BJELhEVlidUQIUG0DVgAugLP4esBRFQqfkNqiZ8D9g76QIqTn+DqM0JgEkVUHn6G9k1OgEwaQIUpr+RWasTAJMiQGn6G1k1OwEwFgBjATDDBSiu/42M2p0AGAuAsQCYoQKU1//G6GtwAmAsAMYCYCwAxgJghgnYwi+gxshrcQJgLADGAmAsAMYCYB7pArp5eX7689n75xdQySr0BMw1/vcxIRFaS9B/ze/5XgF0BCxtqogEHQEbRUNA7zQLpEBDwIaxABgLgLEAGA0BvTdWAjdkGgI2jI6ApdMsMP0RAwUMeRHGrU29c/NHvtRD72Fca66fhsIINnsOnT1go1gAjAXADBVQ4ZVgaxl9DU4AjAXAWADMcAHK+0BG7U4AjAXAWABMigDFfSCrZicAJk2AUgoya3UCYFIFKKQgu0YnAMYCYCwAxgJg0gVU3oiJ2pwAGAuAQQRUXIaompwAGExApRSQtTgBMKiACimga3ACYHAB5ATS0x9RQMDeKSGAmMQK0x9RREBEbkOqND+ikICI5Y2ZTsdDzznLqhpLKQERtzfo/Hs951ShxF+aX2LuhanXmthzjjHG7JQfG0az/JhHum0AAAAASUVORK5CYII=",
  "heart": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAACC0lEQVR4nO2dsVHDUBBED4YIAjohoARSmqA0miClBAI6IYCY6M8wGuOxZOl2V34vtB2s9/37smXLrgIAAAAAAAAAgEvhSh1gKd+v75/T2+5enh4UWc4hSsCh0v8jRca1OsCpzCl/yeNVRAhYWmaCBHsB55boLsFawFrlOUuwFbB2aa4S7F4FbV2U26sjCwGq1ekgQ74FKbcGh21JKsChAHUGmQD1E/+LMotEgFP5A1WmdgGO5Q8U2eQH4UunVYDz6h90Z2QCxLQJSFj9g86sTICYFgFJq3/QlZkJEIMAMZsLSNx+Bh3ZmQAxCBCDADEIELOpgOQD8GDr58AEiLlRB1jK7fPj/fS2n7ePL0WWc4gTcKj46X1JIqK2oGPlL3mcAzEC5paaIiFGwF6JELB0NSdMQYSAPYMAMQgQgwAxmwpY6+vfS99YrfGGbOuvsDMBYmIEzF3NKacjYgRUnV5qSvlVgSfjRrl7ORvaco1Y6gczHdeQRW1BewQBYloEOFwOOpeuzEyAmDYBSVPQmZUJENMqIGEKujMyAWIQIAYBYtoFOB8HFNmYADEIECMR4LgNqTIxAWJkApymQJmFCRAjFeAwBeoMTIAYuQDlClSv/ioDAVWaIhzKrzIRUNVbiEv5VUYCqnqKcSq/ykxA1bYFuZVfZfLj3ceY82c9e/ljHwAAAAAAAAAAAID98QsC8LkhRnpemAAAAABJRU5ErkJggg=="
};
  var keys = Object.keys(PETALS);
  var container = document.createElement("div");
  container.id = "sakura-container";
  Object.assign(container.style, {
    position: "fixed", top: "0", left: "0", width: "100%", height: "100%",
    pointerEvents: "none", zIndex: "9998", overflow: "hidden"
  });
  document.body.appendChild(container);

  var COUNT = 38;          // 花瓣数量
  var WIND = 60;           // 水平漂移幅度(px)
  var mouse = { x: -9999, y: -9999, active: false };
  var petals = [];

  function rand(a, b) { return Math.random() * (b - a) + a; }

  for (var i = 0; i < COUNT; i++) {
    var img = document.createElement("img");
    img.src = PETALS[keys[Math.floor(Math.random() * keys.length)]];
    var size = rand(18, 34);
    Object.assign(img.style, {
      position: "absolute", top: "-40px",
      width: size + "px", height: size + "px",
      opacity: rand(0.55, 0.95),
      filter: "drop-shadow(0 1px 2px rgba(255,180,200,.4))",
      willChange: "transform, opacity"
    });
    container.appendChild(img);
    petals.push({
      el: img,
      x: rand(0, window.innerWidth),
      y: rand(-window.innerHeight, 0),
      vy: rand(1.2, 3.0),
      vx: rand(-0.4, 0.4),
      sway: rand(0.02, 0.05),
      phase: rand(0, Math.PI * 2),
      rot: rand(-180, 180),
      vr: rand(-2, 2),
      baseSize: size,
      blown: 0
    });
  }

  document.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
  });
  document.addEventListener("mouseleave", function () { mouse.active = false; });

  function tick() {
    var w = window.innerWidth, h = window.innerHeight;
    for (var i = 0; i < petals.length; i++) {
      var p = petals[i];
      // 鼠标吹散：靠近鼠标的花瓣被向右下/外推
      if (mouse.active) {
        var dx = p.x - mouse.x, dy = p.y - mouse.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          var force = (140 - dist) / 140;
          p.blown += force * 4;
          p.vx += (dx / dist) * force * 0.6;
          p.vy += force * 0.8;
          p.vr += force * 3;
        }
      }
      p.blown *= 0.92;
      p.phase += p.sway;
      p.x += p.vx + Math.sin(p.phase) * 0.8 + p.blown * 0.3;
      p.y += p.vy + p.blown * 0.2;
      p.rot += p.vr;
      p.vr *= 0.98;

      if (p.y > h + 40) { p.y = -40; p.x = rand(0, w); p.blown = 0; p.vx = rand(-0.4, 0.4); }
      if (p.x > w + 60) p.x = -40;
      if (p.x < -60) p.x = w + 40;

      p.el.style.transform = "translate3d(" + p.x + "px," + p.y + "px,0) rotate(" + p.rot + "deg) scale(" + (1 - p.blown * 0.02) + ")";
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
