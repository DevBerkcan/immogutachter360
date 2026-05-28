import { useEffect } from 'react';

const LS_KEY = 'pe_seal_dismissed';

function findSeal(): HTMLElement | null {
  return (
    (document.querySelector('[class*="pe-pro-seal"]') as HTMLElement) ||
    (document.querySelector('[id*="pe-pro-seal"]') as HTMLElement) ||
    (document.querySelector('.pe-widget-seal') as HTMLElement)
  );
}

function hideSeal() {
  const seal = findSeal();
  if (seal) {
    seal.style.display = 'none';
    return true;
  }
  return false;
}

function injectCloseButton(seal: HTMLElement) {
  if (seal.querySelector('.pe-close-btn')) return;

  const btn = document.createElement('button');
  btn.className = 'pe-close-btn';
  btn.setAttribute('aria-label', 'Bewertungssiegel schließen');
  btn.setAttribute('title', 'Schließen');
  btn.textContent = '×';
  Object.assign(btn.style, {
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '22px',
    height: '22px',
    background: 'rgba(0,0,0,0.35)',
    border: 'none',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '15px',
    lineHeight: '1',
    cursor: 'pointer',
    zIndex: '10001',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0',
    fontFamily: 'system-ui, sans-serif',
  });
  btn.onmouseenter = () => { btn.style.background = 'rgba(0,0,0,0.6)'; };
  btn.onmouseleave = () => { btn.style.background = 'rgba(0,0,0,0.35)'; };
  btn.onclick = (e) => {
    e.stopPropagation();
    seal.style.transition = 'opacity 0.2s ease';
    seal.style.opacity = '0';
    setTimeout(() => { seal.style.display = 'none'; }, 200);
    localStorage.setItem(LS_KEY, '1');
  };

  // Seal needs position: relative so the button can be absolute inside it
  const currentPosition = window.getComputedStyle(seal).position;
  if (currentPosition === 'static') seal.style.position = 'relative';

  seal.appendChild(btn);
}

export default function ProSealDismissible() {
  useEffect(() => {
    // Already dismissed — hide as soon as it appears
    if (localStorage.getItem(LS_KEY)) {
      if (!hideSeal()) {
        const obs = new MutationObserver(() => {
          if (hideSeal()) obs.disconnect();
        });
        obs.observe(document.body, { childList: true, subtree: true });
        return () => obs.disconnect();
      }
      return;
    }

    // Not dismissed — wait for ProSeal to render, then add close button
    const seal = findSeal();
    if (seal) {
      injectCloseButton(seal);
    } else {
      const obs = new MutationObserver(() => {
        const s = findSeal();
        if (s) {
          injectCloseButton(s);
          // Keep observing in case widget re-renders
        }
      });
      obs.observe(document.body, { childList: true, subtree: true });
      return () => obs.disconnect();
    }
  }, []);

  return null;
}
