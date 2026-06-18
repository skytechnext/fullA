/* TechNext Academy — shared interactions */
(function () {
  // Reading progress bar
  var bar = document.querySelector(".progress-bar");
  if (bar) {
    var update = function () {
      var h = document.documentElement;
      var scrolled = h.scrollTop;
      var height = h.scrollHeight - h.clientHeight;
      bar.style.width = (height > 0 ? (scrolled / height) * 100 : 0) + "%";
    };
    document.addEventListener("scroll", update, { passive: true });
    update();
  }

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".navlinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  // Scrollspy for the table of contents
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if (tocLinks.length) {
    var sections = tocLinks
      .map(function (a) {
        var id = a.getAttribute("href").slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    var spy = function () {
      var pos = window.scrollY + 120;
      var current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= pos) current = sections[i];
      }
      tocLinks.forEach(function (a) {
        a.classList.toggle(
          "active",
          current && a.getAttribute("href") === "#" + current.id
        );
      });
    };
    document.addEventListener("scroll", spy, { passive: true });
    spy();
  }

  // Roles dropdown (click toggle; works on desktop and touch)
  var drop = document.querySelector(".navdrop");
  if (drop) {
    var dbtn = drop.querySelector(".navdrop-btn");
    dbtn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = drop.classList.toggle("open");
      dbtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function () {
      drop.classList.remove("open");
      dbtn.setAttribute("aria-expanded", "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") drop.classList.remove("open");
    });
  }
})();
