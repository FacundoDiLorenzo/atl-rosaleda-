// Interacciones de la web. Todo es mejora progresiva: sin JS, el contenido se ve completo.

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

/* ---------- Revelado al hacer scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------- Cabecera: se esconde al bajar, vuelve al subir ---------- */
function initHeader() {
  const hdr = document.querySelector<HTMLElement>('[data-header]');
  if (!hdr) return;
  let last = window.scrollY;
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingDown = y > last + 4;
        const goingUp = y < last - 4;
        if (goingDown && y > 320) hdr.classList.add('is-hidden');
        else if (goingUp || y < 80) hdr.classList.remove('is-hidden');
        last = y;
        ticking = false;
      });
    },
    { passive: true },
  );
  // Si el foco entra en la cabecera (teclado), siempre visible
  hdr.addEventListener('focusin', () => hdr.classList.remove('is-hidden'));
}

/* ---------- Menú móvil ---------- */
function initDrawer() {
  const drawer = document.querySelector<HTMLElement>('[data-drawer]');
  const openBtn = document.querySelector<HTMLButtonElement>('[data-menu-open]');
  if (!drawer || !openBtn) return;
  const panel = drawer.querySelector<HTMLElement>('.drawer__panel')!;
  let closeTimer = 0;

  const open = () => {
    clearTimeout(closeTimer);
    drawer.hidden = false;
    openBtn.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
    requestAnimationFrame(() => requestAnimationFrame(() => drawer.classList.add('is-open')));
    panel.querySelector<HTMLElement>('button')?.focus();
  };
  const close = () => {
    drawer.classList.remove('is-open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
    // La salida dura 240ms: más rápida que la entrada
    closeTimer = window.setTimeout(() => (drawer.hidden = true), 260);
    openBtn.focus();
  };

  openBtn.addEventListener('click', open);
  drawer.querySelectorAll('[data-menu-close]').forEach((b) => b.addEventListener('click', close));
  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
    if (e.key === 'Tab') {
      const f = panel.querySelectorAll<HTMLElement>('a, button');
      const first = f[0];
      const lastEl = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}

/* ---------- Contadores ---------- */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (!els.length) return;
  const fmt = new Intl.NumberFormat('es-ES');
  const run = (el: HTMLElement) => {
    const to = Number(el.dataset.count);
    if (reduce.matches) {
      el.textContent = fmt.format(to);
      return;
    }
    const dur = 1400;
    const t0 = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 4); // ease-out cuártica: arranca rápido, frena suave
      el.textContent = fmt.format(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          run(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.6 },
  );
  if (reduce.matches) return; // sin animación: se queda el valor final que ya trae el HTML
  els.forEach((el) => {
    el.textContent = '0';
    io.observe(el);
  });
}

/* ---------- Consentimiento de cookies ---------- */
const CONSENT_KEY = 'rosaleda-consentimiento-v1';
type Consent = { externos: boolean; fecha: string };

function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}
function writeConsent(c: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c));
  } catch {
    /* modo privado: se pregunta en cada visita */
  }
  document.dispatchEvent(new CustomEvent('consent', { detail: c }));
}

function initCookies() {
  const box = document.querySelector<HTMLElement>('[data-cookies]');
  if (!box) return;
  const detail = box.querySelector<HTMLElement>('[data-cookie-detail]')!;
  const chk = box.querySelector<HTMLInputElement>('[data-cookie-externos]')!;
  const saveBtn = box.querySelector<HTMLElement>('[data-cookie-save]')!;
  const cfgBtn = box.querySelector<HTMLElement>('[data-cookie-config]')!;

  const show = (withDetail = false) => {
    box.hidden = false;
    detail.hidden = !withDetail;
    saveBtn.hidden = !withDetail;
    cfgBtn.hidden = withDetail;
    chk.checked = readConsent()?.externos ?? false;
    requestAnimationFrame(() => requestAnimationFrame(() => box.classList.add('is-open')));
  };
  const hide = () => {
    box.classList.remove('is-open');
    setTimeout(() => (box.hidden = true), 220);
  };
  const decide = (externos: boolean) => {
    writeConsent({ externos, fecha: new Date().toISOString() });
    hide();
  };

  box.querySelector('[data-cookie-accept]')!.addEventListener('click', () => decide(true));
  box.querySelector('[data-cookie-reject]')!.addEventListener('click', () => decide(false));
  saveBtn.addEventListener('click', () => decide(chk.checked));
  cfgBtn.addEventListener('click', () => {
    detail.hidden = false;
    saveBtn.hidden = false;
    cfgBtn.hidden = true;
  });
  document.querySelectorAll('[data-cookie-settings]').forEach((b) => b.addEventListener('click', () => show(true)));

  if (!readConsent()) setTimeout(() => show(false), 900);
}

/* ---------- Mapa (solo con consentimiento) ---------- */
function initMap() {
  document.querySelectorAll<HTMLElement>('[data-map]').forEach((wrap) => {
    const load = () => {
      if (wrap.querySelector('iframe')) return;
      const f = document.createElement('iframe');
      f.src = wrap.dataset.src!;
      f.title = 'Mapa de la sede del Atlético Rosaleda FS';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      wrap.appendChild(f);
    };
    if (readConsent()?.externos) load();
    document.addEventListener('consent', (e) => {
      if ((e as CustomEvent<Consent>).detail.externos) load();
    });
    wrap.querySelector('[data-map-load]')?.addEventListener('click', () => {
      writeConsent({ externos: true, fecha: new Date().toISOString() });
      load();
    });
  });
}

/* ---------- Formulario de contacto con antispam ---------- */
function initForms() {
  document.querySelectorAll<HTMLFormElement>('[data-form]').forEach((form) => {
    const started = Date.now();
    const t = form.querySelector<HTMLInputElement>('input[name="_t"]');
    if (t) t.value = String(started);
    const status = form.querySelector<HTMLElement>('[data-status]')!;

    const fields = ['nombre', 'email', 'telefono', 'mensaje', 'privacidad'];
    const validate = (name: string) => {
      const input = form.elements.namedItem(name) as HTMLInputElement | null;
      const err = form.querySelector<HTMLElement>(`[data-err-for="${name}"]`);
      if (!input || !err) return true;
      const ok = input.checkValidity();
      input.setAttribute('aria-invalid', ok ? 'false' : 'true');
      err.classList.toggle('is-shown', !ok);
      if (err.id === '') err.id = `${form.id}-err-${name}`;
      if (!ok) input.setAttribute('aria-describedby', err.id);
      else input.removeAttribute('aria-describedby');
      return ok;
    };
    fields.forEach((n) => {
      const input = form.elements.namedItem(n) as HTMLInputElement | null;
      input?.addEventListener('blur', () => input.value && validate(n));
      input?.addEventListener('input', () => input.getAttribute('aria-invalid') === 'true' && validate(n));
      input?.addEventListener('change', () => input.type === 'checkbox' && validate(n));
    });

    const setStatus = (msg: string, kind: 'ok' | 'error' | '') => {
      status.textContent = msg;
      status.className = `cf__status ${kind ? `is-${kind}` : ''}`;
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      setStatus('', '');
      const allOk = fields.map(validate).every(Boolean);
      if (!allOk) {
        form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
        return;
      }

      const data = new FormData(form);
      // Antispam: honeypot relleno o envío en menos de 3 segundos = bot. Fingimos éxito.
      const tooFast = Date.now() - started < 3000;
      if (String(data.get('web_empresa') ?? '').trim() !== '' || tooFast) {
        setStatus('¡Gracias! Te responderemos pronto.', 'ok');
        form.reset();
        return;
      }
      // Antispam: máximo un envío por minuto desde el mismo navegador
      try {
        const lastSent = Number(localStorage.getItem('rosaleda-ultimo-envio') ?? 0);
        if (Date.now() - lastSent < 60_000) {
          setStatus('Acabas de enviarnos un mensaje. Espera un minuto antes de enviar otro.', 'error');
          return;
        }
      } catch {
        /* sin almacenamiento: seguimos */
      }

      const endpoint = form.dataset.endpoint;
      const nombre = String(data.get('nombre'));
      const categoria = String(data.get('categoria'));
      const resumen = `Nombre: ${nombre}\nCorreo: ${data.get('email')}\nTeléfono: ${data.get('telefono') || '—'}\nInterés: ${categoria}\n\n${data.get('mensaje')}`;

      if (!endpoint) {
        // Sin servicio configurado: abrimos el correo con el mensaje ya escrito
        const mail = `mailto:${form.dataset.mailto}?subject=${encodeURIComponent(`Consulta web · ${categoria}`)}&body=${encodeURIComponent(resumen)}`;
        window.location.href = mail;
        setStatus('Abrimos tu aplicación de correo con el mensaje listo para enviar.', 'ok');
        return;
      }

      form.classList.add('is-sending');
      try {
        const payload: Record<string, string> = {
          subject: `Consulta web · ${categoria}`,
          from_name: 'Web Atlético Rosaleda',
          nombre,
          email: String(data.get('email')),
          telefono: String(data.get('telefono') ?? ''),
          categoria,
          mensaje: String(data.get('mensaje')),
          botcheck: '',
        };
        if (form.dataset.accessKey) payload.access_key = form.dataset.accessKey;
        const turnstile = data.get('cf-turnstile-response');
        if (turnstile) payload['cf-turnstile-response'] = String(turnstile);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(String(res.status));
        try {
          localStorage.setItem('rosaleda-ultimo-envio', String(Date.now()));
        } catch {
          /* ignorar */
        }
        form.reset();
        setStatus(`¡Gracias, ${nombre.split(' ')[0]}! Te responderemos lo antes posible.`, 'ok');
      } catch {
        setStatus('No pudimos enviar el mensaje. Prueba de nuevo o escríbenos por WhatsApp.', 'error');
      } finally {
        form.classList.remove('is-sending');
      }
    });
  });
}

function init() {
  initReveal();
  initHeader();
  initDrawer();
  initCounters();
  initCookies();
  initMap();
  initForms();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
