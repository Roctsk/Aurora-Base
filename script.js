/* ============ INITIALIZE LUCIDE ICONS ============ */
    lucide.createIcons();

    /* ============ ELEMENT SDK: EDITABLE CONFIG ============ */
    const defaultConfig = {
      // Colors (5-palette)
      background_color: '#0a0510',      // BACKGROUND
      surface_color: '#1a0d1f',         // SECONDARY_SURFACE
      text_color: '#f4e8dc',            // TEXT
      primary_color: '#ff5722',         // PRIMARY_ACTION (Mars rust)
      accent_color: '#f9a826',          // SECONDARY_ACTION (Dust gold)

      // Font
      font_family: 'Space Grotesk',
      font_size: 16,

      // Text content
      colony_name: 'AURORA',
      hero_tagline: "Перша автономна колонія людства у кратері Єзеро. Ми дихаємо під куполами, вирощуємо їжу в марсіанському ґрунті та будуємо майбутнє за 225 мільйонів кілометрів від дому.",
      author_name: "Мрійник з Землі"
    };

    /* Update UI based on config */
    function onConfigChange(config) {
      const root = document.documentElement;

      // Apply colors
      root.style.setProperty('--c-bg', config.background_color || defaultConfig.background_color);
      root.style.setProperty('--c-surface', config.surface_color || defaultConfig.surface_color);
      root.style.setProperty('--c-text', config.text_color || defaultConfig.text_color);
      root.style.setProperty('--c-primary', config.primary_color || defaultConfig.primary_color);
      root.style.setProperty('--c-accent', config.accent_color || defaultConfig.accent_color);

      // Apply fonts
      const customFont = config.font_family || defaultConfig.font_family;
      const bodyStack = `'${customFont}', 'Space Grotesk', sans-serif`;
      document.body.style.fontFamily = bodyStack;

      // Apply font size proportionally
      const baseSize = config.font_size || defaultConfig.font_size;
      document.body.style.fontSize = baseSize + 'px';

      // Update text content
      const colonyName = config.colony_name || defaultConfig.colony_name;
      const navName = document.getElementById('nav-colony-name');
      const heroName = document.getElementById('hero-colony-name');
      if (navName) navName.textContent = (colonyName + ' BASE').toUpperCase();
      if (heroName) heroName.textContent = colonyName.toUpperCase();

      const taglineEl = document.getElementById('hero-tagline');
      if (taglineEl) taglineEl.textContent = config.hero_tagline || defaultConfig.hero_tagline;

      const authorEl = document.getElementById('author-name');
      if (authorEl) authorEl.textContent = config.author_name || defaultConfig.author_name;

      // Update author avatar initial
      const avatarEl = document.getElementById('author-avatar');
      if (avatarEl) {
        const name = config.author_name || defaultConfig.author_name;
        avatarEl.textContent = name.charAt(0).toUpperCase();
      }
    }

    /* Map capabilities for Canva editor */
    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
          },
          {
            get: () => config.primary_color || defaultConfig.primary_color,
            set: (v) => { config.primary_color = v; window.elementSdk.setConfig({ primary_color: v }); }
          },
          {
            get: () => config.accent_color || defaultConfig.accent_color,
            set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
      };
    }

    /* Map edit panel values */
    function mapToEditPanelValues(config) {
      return new Map([
        ['colony_name', config.colony_name || defaultConfig.colony_name],
        ['hero_tagline', config.hero_tagline || defaultConfig.hero_tagline],
        ['author_name', config.author_name || defaultConfig.author_name]
      ]);
    }

    /* Initialize Element SDK */
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }
    
