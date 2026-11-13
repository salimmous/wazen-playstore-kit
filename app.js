(() => {
  const tablist = document.querySelector('[role="tablist"]');
  const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
  const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));
  const announcer = document.getElementById('live-announcer');

  function announce(msg) {
    if (!announcer) return;
    announcer.textContent = '';
    requestAnimationFrame(() => {
      announcer.textContent = msg;
    });
  }

  function selectTab(nextTab, focusTab = false) {
    const targetLocale = nextTab.dataset.locale;
    tabs.forEach((tab) => {
      const active = tab === nextTab;
      tab.setAttribute('aria-selected', String(active));
      tab.setAttribute('tabindex', active ? '0' : '-1');
    });

    panels.forEach((panel) => {
      const match = panel.dataset.locale === targetLocale;
      panel.hidden = !match;
    });

    nextTab.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    if (focusTab) nextTab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab, false));

    tab.addEventListener('keydown', (e) => {
      const isRtl = tablist && getComputedStyle(tablist).direction === 'rtl';
      let nextIndex = null;

      if (e.key === 'ArrowRight') {
        nextIndex = isRtl ? (index - 1 + tabs.length) % tabs.length : (index + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = isRtl ? (index + 1) % tabs.length : (index - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        nextIndex = 0;
      } else if (e.key === 'End') {
        nextIndex = tabs.length - 1;
      }

      if (nextIndex !== null) {
        e.preventDefault();
        selectTab(tabs[nextIndex], true);
      }
    });
  });

  // Copy buttons
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-copy-target]');
    if (!btn) return;
    const sourceEl = document.getElementById(btn.dataset.copyTarget);
    if (!sourceEl) return;

    const text = sourceEl.textContent || '';
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }

    const labelEl = btn.querySelector('.copy-label');
    if (labelEl) {
      const orig = labelEl.textContent;
      labelEl.textContent = 'Copied!';
      setTimeout(() => {
        labelEl.textContent = orig;
      }, 1800);
    }
    announce('Copied text to clipboard');
  });

  // Native <dialog> Lightbox Preview
  const dialog = document.getElementById('preview-dialog');
  const dialogImg = document.getElementById('dialog-img');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogDownload = document.getElementById('dialog-download');
  const dialogClose = document.getElementById('dialog-close');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-preview-src]');
    if (!trigger || !dialog) return;

    dialogImg.src = trigger.dataset.previewSrc;
    dialogImg.alt = trigger.dataset.previewTitle || 'Screenshot preview';
    dialogTitle.textContent = trigger.dataset.previewTitle || 'Preview';
    dialogDownload.href = trigger.dataset.previewSrc;
    dialogDownload.download = trigger.dataset.previewFilename || 'wazen-asset.png';
    dialog.showModal();
  });

  if (dialogClose && dialog) {
    dialogClose.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener('close', () => {
      dialogImg.removeAttribute('src');
    });
  }
})();
