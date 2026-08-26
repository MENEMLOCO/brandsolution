/* ============================================================
   Brand Solutions — comportamiento del sitio
   JavaScript sin dependencias. Todo es progresivo: si el script
   no carga, el contenido sigue siendo legible y navegable.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     Configuración editable
     ---------------------------------------------------------- */
  var CONFIG = {
    /**
     * URL que recibe los formularios (lead magnet, newsletter y contacto).
     * Puede ser el webhook de tu plataforma de email marketing o un endpoint
     * propio. Si queda vacía, los formularios simulan el envío.
     */
    formEndpoint: "",

    /**
     * URL base del checkout o de la plataforma de cursos.
     * Si queda vacía, los botones de compra llevan al formulario de contacto.
     */
    checkoutUrl: "",
  };

  var prefersReducedMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  /* ----------------------------------------------------------
     Header sticky
     ---------------------------------------------------------- */
  function initHeader() {
    var header = document.querySelector("[data-header]");
    if (!header) return;

    function update() {
      header.setAttribute("data-scrolled", window.scrollY > 12 ? "true" : "false");
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* ----------------------------------------------------------
     Menú móvil
     ---------------------------------------------------------- */
  function initMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var menu = document.getElementById("menu-movil");
    if (!toggle || !menu) return;

    var iconOpen = toggle.querySelector('[data-menu-icon="open"]');
    var iconClose = toggle.querySelector('[data-menu-icon="close"]');
    var header = document.querySelector("[data-header]");

    function setOpen(open) {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      if (iconOpen) iconOpen.hidden = open;
      if (iconClose) iconClose.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
      if (header && open) header.setAttribute("data-scrolled", "true");
    }

    toggle.addEventListener("click", function () {
      setOpen(menu.hidden);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 1024 && !menu.hidden) setOpen(false);
    });
  }

  /* ----------------------------------------------------------
     Aparición progresiva al hacer scroll
     ---------------------------------------------------------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) {
        el.setAttribute("data-visible", "true");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -12% 0px" },
    );

    Array.prototype.forEach.call(items, function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     Acordeones
     ---------------------------------------------------------- */
  function initAccordions() {
    document.addEventListener("click", function (event) {
      var trigger = event.target.closest("[data-accordion-trigger]");
      if (!trigger) return;

      var item = trigger.closest("[data-accordion-item]");
      var panel = document.getElementById(trigger.getAttribute("aria-controls"));
      if (!item || !panel) return;

      var open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
      item.setAttribute("data-open", String(!open));
      panel.hidden = open;
    });
  }

  /* ----------------------------------------------------------
     Carrusel
     ---------------------------------------------------------- */
  function initCarousels() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-carousel]"), function (root) {
      var track = root.querySelector("[data-carousel-track]");
      var prev = root.querySelector('[data-carousel-nav="prev"]');
      var next = root.querySelector('[data-carousel-nav="next"]');
      if (!track) return;

      function update() {
        if (prev) prev.disabled = track.scrollLeft < 8;
        if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      }

      function step(direction) {
        var first = track.querySelector("[data-carousel-item]");
        var distance = first ? first.offsetWidth + 20 : track.clientWidth * 0.8;
        track.scrollBy({ left: distance * direction, behavior: prefersReducedMotion ? "auto" : "smooth" });
      }

      if (prev) prev.addEventListener("click", function () { step(-1); });
      if (next) next.addEventListener("click", function () { step(1); });
      track.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      update();
    });
  }

  /* ----------------------------------------------------------
     Contadores
     ---------------------------------------------------------- */
  function initCountUp() {
    var nodes = document.querySelectorAll("[data-countup]");
    if (!nodes.length) return;

    var format = function (value) {
      try {
        return new Intl.NumberFormat("es-AR").format(value);
      } catch (error) {
        return String(value);
      }
    };

    function run(node) {
      var target = parseInt(node.getAttribute("data-countup"), 10);
      var suffix = node.getAttribute("data-suffix") || "";
      if (isNaN(target)) return;

      if (prefersReducedMotion) {
        node.textContent = format(target) + suffix;
        return;
      }

      var duration = 1400;
      var start = performance.now();
      function tick(now) {
        var progress = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        node.textContent = format(Math.round(target * eased)) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }

    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(nodes, run);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          run(entry.target);
        });
      },
      { threshold: 0.4 },
    );

    Array.prototype.forEach.call(nodes, function (node) {
      observer.observe(node);
    });
  }

  /* ----------------------------------------------------------
     Filtros de catálogo (cursos, recursos y blog)
     ---------------------------------------------------------- */
  function initFilters() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-catalog]"), function (catalog) {
      var attribute = catalog.getAttribute("data-catalog");
      var buttons = catalog.querySelectorAll("[data-filter]");
      var cards = catalog.querySelectorAll("[data-card]");
      var counter = catalog.querySelector("[data-count]");
      var empty = catalog.querySelector("[data-empty]");
      var singular = catalog.getAttribute("data-singular") || "resultado";
      var plural = catalog.getAttribute("data-plural") || "resultados";

      function apply(value) {
        var visible = 0;
        Array.prototype.forEach.call(cards, function (card) {
          var wrapper = card.closest("[data-card-wrapper]") || card;
          var match = value === "todos" || card.getAttribute("data-" + attribute) === value;
          wrapper.hidden = !match;
          if (match) visible++;
        });

        Array.prototype.forEach.call(buttons, function (btn) {
          btn.setAttribute("aria-pressed", String(btn.getAttribute("data-filter") === value));
        });

        if (counter) counter.textContent = visible + " " + (visible === 1 ? singular : plural);
        if (empty) empty.hidden = visible !== 0;
      }

      Array.prototype.forEach.call(buttons, function (btn) {
        btn.addEventListener("click", function () {
          apply(btn.getAttribute("data-filter"));
        });
      });

      // Filtro inicial desde la URL, por ejemplo ?filtro=gratis
      var requested = new URLSearchParams(window.location.search).get("filtro");
      var available = Array.prototype.map.call(buttons, function (btn) {
        return btn.getAttribute("data-filter");
      });
      apply(requested && available.indexOf(requested) !== -1 ? requested : "todos");
    });
  }

  /* ----------------------------------------------------------
     Barra de inscripción fija
     ---------------------------------------------------------- */
  function initStickyEnroll() {
    var bar = document.querySelector("[data-sticky-enroll]");
    if (!bar) return;

    function update() {
      var nearBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 240;
      var visible = window.scrollY > 620 && !nearBottom;
      bar.setAttribute("data-visible", String(visible));
      bar.setAttribute("aria-hidden", String(!visible));
      var action = bar.querySelector("a");
      if (action) action.tabIndex = visible ? 0 : -1;
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ----------------------------------------------------------
     Enlaces de compra
     ---------------------------------------------------------- */
  function initCheckoutLinks() {
    if (!CONFIG.checkoutUrl) return;

    Array.prototype.forEach.call(document.querySelectorAll("[data-checkout]"), function (link) {
      var parts = link.getAttribute("data-checkout").split(":");
      var separator = CONFIG.checkoutUrl.indexOf("?") !== -1 ? "&" : "?";
      link.href =
        CONFIG.checkoutUrl + separator + "tipo=" + parts[0] + "&item=" + encodeURIComponent(parts[1]);
    });
  }

  /* ----------------------------------------------------------
     Formularios
     ---------------------------------------------------------- */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function showError(input, message) {
    var target = document.querySelector('[data-error-for="' + input.id + '"]');
    if (target) {
      target.textContent = message;
      target.hidden = false;
    }
    input.setAttribute("aria-invalid", "true");
  }

  function clearError(input) {
    var target = document.querySelector('[data-error-for="' + input.id + '"]');
    if (target) {
      target.textContent = "";
      target.hidden = true;
    }
    input.removeAttribute("aria-invalid");
  }

  function validate(form) {
    var valid = true;

    Array.prototype.forEach.call(form.querySelectorAll("input, textarea"), function (input) {
      clearError(input);

      if (input.type === "checkbox") {
        if (input.required || input.name === "consent") {
          if (!input.checked) {
            showError(input, "Necesitamos tu confirmación para poder escribirte.");
            valid = false;
          }
        }
        return;
      }

      var value = (input.value || "").trim();

      if (input.required && value.length === 0) {
        showError(input, "Este campo es obligatorio.");
        valid = false;
        return;
      }

      if (input.type === "email" && value.length > 0 && !EMAIL.test(value)) {
        showError(input, "Ingresá un email válido.");
        valid = false;
        return;
      }

      if (input.name === "name" && input.required && value.length < 2) {
        showError(input, "Contanos tu nombre.");
        valid = false;
        return;
      }

      if (input.tagName === "TEXTAREA" && input.required && value.length < 10) {
        showError(input, "Contanos un poco más para poder ayudarte.");
        valid = false;
      }
    });

    return valid;
  }

  function send(name, payload) {
    if (!CONFIG.formEndpoint) {
      // Modo demostración: no hay endpoint configurado.
      return new Promise(function (resolve) {
        setTimeout(resolve, 650);
      });
    }

    return fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ form: name }, payload)),
    }).then(function (response) {
      if (!response.ok) throw new Error("Error " + response.status);
    });
  }

  function initForms() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-form]"), function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!validate(form)) return;

        var wrapper = form.closest("[data-form-wrapper]");
        var success = wrapper && wrapper.querySelector("[data-form-success]");
        var errorBox = form.querySelector("[data-form-error]");
        var submit = form.querySelector("[data-submit]");
        var label = submit ? submit.innerHTML : "";

        if (errorBox) errorBox.hidden = true;
        if (submit) {
          submit.disabled = true;
          submit.innerHTML = "Enviando…";
        }

        var payload = {};
        Array.prototype.forEach.call(form.querySelectorAll("input, textarea, select"), function (input) {
          if (!input.name) return;
          payload[input.name] = input.type === "checkbox" ? input.checked : input.value;
        });
        if (form.hasAttribute("data-resource")) payload.resource = form.getAttribute("data-resource");

        send(form.getAttribute("data-form"), payload)
          .then(function () {
            form.hidden = true;
            if (success) success.hidden = false;
          })
          .catch(function () {
            if (errorBox) errorBox.hidden = false;
            if (submit) {
              submit.disabled = false;
              submit.innerHTML = label;
            }
          });
      });
    });
  }

  /* ----------------------------------------------------------
     Contacto: precarga el curso o programa desde la URL
     ---------------------------------------------------------- */
  function initContactPrefill() {
    var data = document.getElementById("referencias-contacto");
    if (!data) return;

    var params = new URLSearchParams(window.location.search);
    var slug = params.get("curso") || params.get("programa");
    if (!slug) return;

    var items;
    try {
      items = JSON.parse(data.textContent);
    } catch (error) {
      return;
    }

    var kind = params.get("curso") ? "curso" : "programa";
    var match = items.filter(function (item) {
      return item.slug === slug && item.kind === kind;
    })[0];
    if (!match) return;

    var notice = document.querySelector("[data-selected-notice]");
    var title = document.querySelector("[data-selected-title]");
    if (notice && title) {
      title.textContent = match.title;
      notice.hidden = false;
    }

    var select = document.getElementById("ct-interes");
    if (select) select.value = kind === "programa" ? "programa" : "cursos";

    var message = document.getElementById("ct-mensaje");
    if (message && !message.value) {
      message.value =
        'Hola, me interesa ' +
        (kind === "curso" ? "el curso" : "el programa") +
        ' "' +
        match.title +
        '". Quisiera recibir más información.';
    }
  }

  /* ----------------------------------------------------------
     Año dinámico del pie
     ---------------------------------------------------------- */
  function initYear() {
    Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  }

  ready(function () {
    initHeader();
    initMenu();
    initReveal();
    initAccordions();
    initCarousels();
    initCountUp();
    initFilters();
    initStickyEnroll();
    initCheckoutLinks();
    initForms();
    initContactPrefill();
    initYear();
  });
})();
