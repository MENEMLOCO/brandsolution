/**
 * Renderiza a HTML estático los componentes SVG originales del proyecto,
 * de modo que la versión en HTML use exactamente las mismas ilustraciones.
 */
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Icon } from "../../components/ui/Icon.tsx";
import { Stars as StarsComponent } from "../../components/ui/Stars.tsx";
import { CoverVisual } from "../../components/visuals/CoverVisual.tsx";
import { HeroVisual } from "../../components/visuals/HeroVisual.tsx";
import { PlatformMockup } from "../../components/visuals/PlatformMockup.tsx";
import { CertificateMockup } from "../../components/visuals/CertificateMockup.tsx";

const cache = new Map();

function render(key, element) {
  if (!cache.has(key)) cache.set(key, renderToStaticMarkup(element));
  return cache.get(key);
}

export function icon(name, className = "", title) {
  return render(`i:${name}:${className}:${title ?? ""}`, createElement(Icon, { name, className, title }));
}

export function stars(rating, className = "") {
  return render(`s:${rating}:${className}`, createElement(StarsComponent, { rating, className }));
}

export function cover(visual, tone, { decorative = false, className = "" } = {}) {
  return render(
    `c:${visual}:${tone}:${decorative}:${className}`,
    createElement(CoverVisual, { visual, tone, decorative, className }),
  );
}

export function heroVisual(className = "") {
  return render(`h:${className}`, createElement(HeroVisual, { className }));
}

export function platformMockup(className = "") {
  return render(`p:${className}`, createElement(PlatformMockup, { className }));
}

export function certificateMockup(className = "") {
  return render(`cert:${className}`, createElement(CertificateMockup, { className }));
}

let logoCounter = 0;

/** Marca gráfica de Brand Solutions. El degradado necesita un id único por uso. */
export function logoMark(className = "size-9") {
  const id = `bs-mark-${logoCounter++}`;
  return [
    `<svg viewBox="0 0 44 44" class="${className}" aria-hidden="true" focusable="false">`,
    `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">`,
    `<stop offset="0%" stop-color="#6a37f0"></stop><stop offset="100%" stop-color="#3712b0"></stop>`,
    `</linearGradient></defs>`,
    `<rect width="44" height="44" rx="13" fill="url(#${id})"></rect>`,
    `<path d="M11 30.5 17.6 24l4.4 3.1L31 15" fill="none" stroke="#ffffff" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"></path>`,
    `<circle cx="32.2" cy="14.2" r="4" fill="#cdf564"></circle>`,
    `<path d="M11 36h13" stroke="#ffffff" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round"></path>`,
    `</svg>`,
  ].join("");
}
