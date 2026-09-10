/* @ds-bundle: {"format":4,"namespace":"USEReadyDesignSystem_41f54b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StatBlock","sourcePath":"components/core/StatBlock.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"BarChart","sourcePath":"components/data/BarChart.jsx"},{"name":"ChartLegend","sourcePath":"components/data/ChartLegend.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"DonutChart","sourcePath":"components/data/DonutChart.jsx"},{"name":"MetricCard","sourcePath":"components/data/MetricCard.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SideNavItem","sourcePath":"components/navigation/SideNavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3410a6055d53","components/core/Button.jsx":"20c70c81b17c","components/core/Card.jsx":"7931687bdf8b","components/core/Divider.jsx":"ba1bd46b3459","components/core/Eyebrow.jsx":"5c7a23667df2","components/core/Icon.jsx":"d0a43deace32","components/core/IconButton.jsx":"af8f6e8eafba","components/core/Logo.jsx":"5a8e9c394969","components/core/StatBlock.jsx":"80edf007cb55","components/core/Tag.jsx":"716aa5091dac","components/data/BarChart.jsx":"9b64c24f85fa","components/data/ChartLegend.jsx":"ffe9b4aa471a","components/data/DataTable.jsx":"7c3a1fa029f4","components/data/DonutChart.jsx":"40eed456b546","components/data/MetricCard.jsx":"d7019b4a07f1","components/feedback/Alert.jsx":"ce8b62a4843d","components/feedback/EmptyState.jsx":"5d48d7306b77","components/feedback/Modal.jsx":"7625a8ffd99e","components/feedback/ProgressBar.jsx":"0d67e5889e48","components/feedback/Tooltip.jsx":"e6a42389a464","components/forms/Checkbox.jsx":"9f8282593529","components/forms/Field.jsx":"32bbca1bb449","components/forms/Input.jsx":"2cbd3c98a2a3","components/forms/Radio.jsx":"1834aa1af68f","components/forms/Select.jsx":"5b0cdb50f200","components/forms/Switch.jsx":"c12c281859a4","components/forms/Textarea.jsx":"5b8929c79e6c","components/navigation/Breadcrumb.jsx":"a1b15be076f1","components/navigation/SideNavItem.jsx":"f9329a177dc9","components/navigation/Tabs.jsx":"eb78dd830f5a","components/navigation/TopBar.jsx":"aee62b9a4898","ui_kits/console/AppShell.jsx":"f5c93dc6f7b2","ui_kits/console/GovernanceScreen.jsx":"0a08c54187b6","ui_kits/console/MigrationScreen.jsx":"6a721abcacf7","ui_kits/console/OverviewScreen.jsx":"15696cbd3ec8","ui_kits/website/ContactScreen.jsx":"d6dac54d972d","ui_kits/website/HomeScreen.jsx":"5f5638480208","ui_kits/website/Shared.jsx":"579d882e8e15","ui_kits/website/SolutionsScreen.jsx":"f9e08a285f94"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.USEReadyDesignSystem_41f54b = window.USEReadyDesignSystem_41f54b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  accent: 'var(--ur-orange)',
  navy: 'var(--ur-navy)',
  neutral: 'var(--ur-grey-500)',
  success: 'var(--status-success)',
  warning: 'var(--status-warning)',
  danger: 'var(--status-danger)',
  info: 'var(--status-info)'
};

/** Small count or dot indicator. */
function Badge({
  children,
  tone = 'accent',
  dot = false,
  style,
  ...rest
}) {
  const bg = TONES[tone] || TONES.accent;
  const fg = tone === 'warning' ? 'var(--ur-navy)' : '#fff';
  if (dot) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: bg,
      display: 'inline-block',
      ...style
    }
  }, rest));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 20,
      height: 20,
      padding: '0 7px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      font: 'var(--fw-heavy) 11px/1 var(--font-brand)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** White, 8px, hairline border, flat at rest. Shadow only appears on hover when interactive. */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-6)',
  tone = 'default',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const tones = {
    default: {
      background: 'var(--surface-card)',
      borderColor: 'var(--border-subtle)'
    },
    subtle: {
      background: 'var(--ur-grey-050)',
      borderColor: 'var(--border-subtle)'
    },
    inverse: {
      background: 'var(--ur-navy)',
      borderColor: 'var(--border-inverse)'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      borderColor: 'var(--ur-orange-200)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: 'var(--radius-card)',
      border: '1px solid',
      padding,
      transition: 'box-shadow var(--dur-normal) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard)',
      cursor: interactive ? 'pointer' : undefined,
      boxShadow: h ? 'var(--shadow-md)' : 'none',
      ...tones[tone],
      ...(h && tone === 'default' ? {
        background: 'var(--ur-grey-050)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Divider({
  tone = 'subtle',
  accent = false,
  spacing = 'var(--space-6)',
  style,
  ...rest
}) {
  if (accent) return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: 48,
      height: 3,
      background: 'var(--ur-orange)',
      margin: spacing + ' 0',
      ...style
    }
  }, rest));
  const color = tone === 'inverse' ? 'var(--border-inverse)' : tone === 'strong' ? 'var(--border-default)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("hr", _extends({
    style: {
      border: 0,
      borderTop: '1px solid ' + color,
      margin: spacing + ' 0',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** ALL-CAPS wide-tracked label — the brand's defining typographic device. */
function Eyebrow({
  children,
  tone = 'accent',
  rule = false,
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--ur-orange)' : tone === 'inverse' ? 'rgba(255,255,255,.72)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 3,
      background: 'var(--ur-orange)',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) var(--fs-eyebrow)/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide glyph. Requires <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"> on the page. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    if (window.lucide) window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': strokeWidth
      }
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: 'none',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  fontFamily: 'var(--font-brand)',
  fontWeight: 'var(--fw-medium)',
  letterSpacing: 'var(--ls-button)',
  borderRadius: 'var(--radius-control)',
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'var(--transition-control)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const SIZES = {
  sm: {
    fontSize: 13,
    lineHeight: '18px',
    padding: '7px 14px'
  },
  md: {
    fontSize: 14,
    lineHeight: '20px',
    padding: '11px 20px'
  },
  lg: {
    fontSize: 16,
    lineHeight: '22px',
    padding: '14px 28px'
  }
};
const VARIANTS = {
  primary: {
    rest: {
      background: 'var(--ur-orange)',
      color: '#fff'
    },
    hover: {
      background: 'var(--ur-orange-600)'
    },
    active: {
      background: 'var(--ur-orange-700)'
    }
  },
  secondary: {
    rest: {
      background: 'var(--ur-navy)',
      color: '#fff'
    },
    hover: {
      background: 'var(--ur-navy-600)'
    },
    active: {
      background: 'var(--ur-navy-900)'
    }
  },
  outline: {
    rest: {
      background: 'transparent',
      color: 'var(--ur-navy)',
      borderColor: 'var(--border-default)'
    },
    hover: {
      background: 'var(--ur-grey-050)',
      borderColor: 'var(--ur-grey-500)'
    },
    active: {
      background: 'var(--ur-grey-100)'
    }
  },
  ghost: {
    rest: {
      background: 'transparent',
      color: 'var(--ur-orange)'
    },
    hover: {
      background: 'var(--surface-accent-soft)'
    },
    active: {
      background: 'var(--ur-orange-100)'
    }
  },
  inverse: {
    rest: {
      background: '#fff',
      color: 'var(--ur-navy)'
    },
    hover: {
      background: 'var(--ur-grey-100)'
    },
    active: {
      background: 'var(--ur-grey-200)'
    }
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled,
  fullWidth,
  as = 'button',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const state = disabled ? {
    background: 'var(--ur-grey-200)',
    color: 'var(--ur-grey-400)',
    borderColor: 'transparent',
    cursor: 'not-allowed'
  } : {
    ...v.rest,
    ...(h ? v.hover : null),
    ...(a ? v.active : null)
  };
  const El = as;
  const ic = size === 'lg' ? 20 : 16;
  return /*#__PURE__*/React.createElement(El, _extends({
    disabled: as === 'button' ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => setA(true),
    onMouseUp: () => setA(false),
    style: {
      ...BASE,
      ...SIZES[size],
      ...state,
      width: fullWidth ? '100%' : undefined,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: ic
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: ic
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 30,
  md: 38,
  lg: 46
};
const VARIANTS = {
  plain: {
    rest: {
      background: 'transparent',
      color: 'var(--ur-grey-600)',
      borderColor: 'transparent'
    },
    hover: {
      background: 'var(--ur-grey-100)',
      color: 'var(--ur-navy)'
    }
  },
  outline: {
    rest: {
      background: '#fff',
      color: 'var(--ur-navy)',
      borderColor: 'var(--border-default)'
    },
    hover: {
      background: 'var(--ur-grey-050)',
      borderColor: 'var(--ur-grey-500)'
    }
  },
  accent: {
    rest: {
      background: 'var(--ur-orange)',
      color: '#fff',
      borderColor: 'transparent'
    },
    hover: {
      background: 'var(--ur-orange-600)'
    }
  },
  inverse: {
    rest: {
      background: 'transparent',
      color: 'rgba(255,255,255,.8)',
      borderColor: 'transparent'
    },
    hover: {
      background: 'rgba(255,255,255,.12)',
      color: '#fff'
    }
  }
};
function IconButton({
  icon,
  label,
  variant = 'plain',
  size = 'md',
  disabled,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.plain;
  const d = SIZES[size];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-control)',
      border: '1px solid transparent',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...(disabled ? {
        background: 'var(--ur-grey-100)',
        color: 'var(--ur-grey-400)'
      } : {
        ...v.rest,
        ...(h ? v.hover : null)
      }),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 24 : size === 'sm' ? 16 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
const SRC = {
  horizontal: 'assets/logo-horizontal-tagline.svg',
  vertical: 'assets/logo-vertical-tagline.svg'
};

/** Wraps the supplied lockups and enforces the clear-space rule (height of the "i"). */
function Logo({
  variant = 'horizontal',
  height = 40,
  onNavy = false,
  basePath = '',
  clearSpace = true,
  style
}) {
  const pad = clearSpace ? Math.round(height * (variant === 'vertical' ? 0.14 : 0.28)) : 0;
  const img = /*#__PURE__*/React.createElement("img", {
    src: basePath + SRC[variant],
    alt: "USEReady",
    style: {
      height,
      width: 'auto',
      display: 'block'
    }
  });
  if (!onNavy) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      padding: pad,
      ...style
    }
  }, img);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: pad + 8,
      ...style
    }
  }, img);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avenir Black numeral with an ALL-CAPS label. The brand argues with numbers. */
function StatBlock({
  value,
  suffix,
  label,
  tone = 'default',
  size = 'md',
  style,
  ...rest
}) {
  const sizes = {
    sm: 32,
    md: 48,
    lg: 64
  };
  const color = tone === 'inverse' ? '#fff' : 'var(--ur-navy)';
  const labelColor = tone === 'inverse' ? 'rgba(255,255,255,.72)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-black) ' + sizes[size] + 'px/1 var(--font-brand)',
      letterSpacing: '-0.02em',
      color
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ur-orange)'
    }
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 12px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: labelColor,
      marginTop: 10
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    background: 'var(--ur-grey-100)',
    color: 'var(--ur-grey-700)'
  },
  accent: {
    background: 'var(--surface-accent-soft)',
    color: 'var(--ur-orange-700)'
  },
  navy: {
    background: 'var(--ur-navy-050)',
    color: 'var(--ur-navy)'
  },
  success: {
    background: 'var(--status-success-soft)',
    color: '#3f6529'
  },
  warning: {
    background: 'var(--status-warning-soft)',
    color: '#7a6100'
  },
  danger: {
    background: 'var(--status-danger-soft)',
    color: '#b13334'
  },
  info: {
    background: 'var(--status-info-soft)',
    color: '#00707a'
  }
};

/** Pill-shaped, non-interactive label — the capsule motif from the logo mark. */
function Tag({
  children,
  tone = 'neutral',
  icon,
  onRemove,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      font: 'var(--fw-medium) 12px/18px var(--font-brand)',
      ...TONES[tone],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16,
    style: {
      width: 14,
      height: 14
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove",
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      marginLeft: 2,
      cursor: 'pointer',
      color: 'inherit',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16,
    style: {
      width: 14,
      height: 14
    }
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/BarChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Vertical bars on the viz palette. Bars are square-topped; the pill radius is for status objects. */
function BarChart({
  data = [],
  height = 180,
  tone = 'default',
  showValues = true,
  style,
  ...rest
}) {
  const max = Math.max(...data.map(d => d.value), 1);
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 'var(--space-3)',
      height
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      gap: 6,
      height: '100%',
      minWidth: 0
    }
  }, showValues && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      textAlign: 'center',
      font: 'var(--fw-medium) 11px/1 var(--font-brand)',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, d.value), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: d.label + ': ' + d.value,
    style: {
      width: '100%',
      height: d.value / max * 100 + '%',
      background: d.color || 'var(--viz-' + (i % 8 + 1) + ')',
      borderRadius: '2px 2px 0 0',
      transition: 'height var(--dur-slow) var(--ease-standard)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 10,
      borderTop: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      paddingTop: 8
    }
  }, data.map(d => /*#__PURE__*/React.createElement("span", {
    key: d.label,
    style: {
      flex: 1,
      textAlign: 'center',
      font: 'var(--fw-book) 11px/1.3 var(--font-body)',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, d.label))));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/data/ChartLegend.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ChartLegend({
  items = [],
  tone = 'default',
  style,
  ...rest
}) {
  const column = style && style.flexDirection === 'column';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexWrap: column ? 'nowrap' : 'wrap',
      gap: 'var(--space-5)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: it.label ?? i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      font: 'var(--fw-book) 12px/1.4 var(--font-body)',
      color: tone === 'inverse' ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: it.color || 'var(--viz-' + (i % 8 + 1) + ')'
    }
  }), it.label, it.value != null && /*#__PURE__*/React.createElement("b", {
    style: {
      color: tone === 'inverse' ? '#fff' : 'var(--text-strong)',
      fontWeight: 'var(--fw-medium)'
    }
  }, it.value))));
}
Object.assign(__ds_scope, { ChartLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ChartLegend.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Dense table: uppercase tracked header, hairline rows, grey-050 hover. */
function DataTable({
  columns = [],
  rows = [],
  sort,
  onSort,
  onRowClick,
  dense = false,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(null);
  const pad = dense ? '9px 14px' : '14px 16px';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: '#fff',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    onClick: () => c.sortable && onSort && onSort(c.key),
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      background: 'var(--ur-grey-050)',
      borderBottom: '1px solid var(--border-subtle)',
      whiteSpace: 'nowrap',
      font: 'var(--fw-medium) 11px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      cursor: c.sortable ? 'pointer' : 'default',
      width: c.width
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, c.label, c.sortable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: sort === c.key ? 'chevron-up' : 'chevrons-up-down',
    size: 16,
    style: {
      width: 12,
      height: 12,
      opacity: sort === c.key ? 1 : .5
    }
  })))))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    onMouseEnter: () => setH(i),
    onMouseLeave: () => setH(null),
    onClick: () => onRowClick && onRowClick(r),
    style: {
      background: h === i ? 'var(--ur-grey-050)' : '#fff',
      cursor: onRowClick ? 'pointer' : 'default',
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || 'left',
      padding: pad,
      borderBottom: i === rows.length - 1 ? 'none' : '1px solid var(--border-subtle)',
      font: 'var(--fw-book) 14px/1.5 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, c.render ? c.render(r) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/DonutChart.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Conic-gradient donut on the viz palette, with an optional centre figure. */
function DonutChart({
  data = [],
  size = 160,
  thickness = 24,
  centerValue,
  centerLabel,
  tone = 'default',
  style,
  ...rest
}) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  let acc = 0;
  const stops = data.map((d, i) => {
    const from = acc / total * 360;
    acc += d.value;
    const to = acc / total * 360;
    const c = d.color || 'var(--viz-' + (i % 8 + 1) + ')';
    return c + ' ' + from + 'deg ' + to + 'deg';
  }).join(',');
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'conic-gradient(' + stops + ')'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: thickness,
      borderRadius: '50%',
      background: inverse ? 'var(--ur-navy)' : '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2
    }
  }, centerValue != null && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) ' + Math.round(size / 6) + 'px/1 var(--font-brand)',
      color: inverse ? '#fff' : 'var(--ur-navy)'
    }
  }, centerValue), centerLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 10px/1.3 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, centerLabel)));
}
Object.assign(__ds_scope, { DonutChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DonutChart.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** KPI tile: Avenir Black figure, label, delta. */
function MetricCard({
  label,
  value,
  unit,
  delta,
  deltaDirection,
  icon,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  const up = deltaDirection === 'up';
  const good = deltaDirection === 'up' ? 'var(--status-success)' : 'var(--status-danger)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: inverse ? 'var(--ur-navy)' : '#fff',
      border: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-5)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 'var(--space-4)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ur-orange)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-black) 34px/1 var(--font-brand)',
      letterSpacing: '-0.02em',
      color: inverse ? '#fff' : 'var(--ur-navy)'
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 15px/1 var(--font-brand)',
      color: inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)'
    }
  }, unit)), delta != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginTop: 10,
      font: 'var(--fw-medium) 12px/1.4 var(--font-brand)',
      color: good
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: up ? 'trending-up' : 'trending-down',
    size: 16,
    style: {
      width: 14,
      height: 14
    }
  }), delta));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    bar: 'var(--status-info)',
    bg: 'var(--status-info-soft)',
    icon: 'info'
  },
  success: {
    bar: 'var(--status-success)',
    bg: 'var(--status-success-soft)',
    icon: 'check-circle'
  },
  warning: {
    bar: 'var(--status-warning)',
    bg: 'var(--status-warning-soft)',
    icon: 'alert-triangle'
  },
  danger: {
    bar: 'var(--status-danger)',
    bg: 'var(--status-danger-soft)',
    icon: 'alert-circle'
  }
};

/** Inline message. The status colour appears as a top bar, never as a left border. */
function Alert({
  tone = 'info',
  title,
  children,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      border: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 3,
      background: t.bar
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: t.bg,
      padding: 'var(--space-4) var(--space-5)',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: t.bar,
      display: 'flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-heavy) 14px/1.4 var(--font-brand)',
      color: 'var(--ur-navy)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-book) 13px/1.6 var(--font-body)',
      color: 'var(--text-body)',
      marginTop: title ? 4 : 0
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  })));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function EmptyState({
  icon = 'inbox',
  title,
  description,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      padding: 'var(--space-16) var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-lg)',
      background: 'var(--ur-grey-050)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ur-grey-400)',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-heavy) 18px/1.35 var(--font-brand)',
      color: 'var(--ur-navy)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-book) 14px/1.6 var(--font-body)',
      color: 'var(--text-muted)',
      maxWidth: 380,
      margin: '8px auto 0'
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Modal({
  open,
  title,
  children,
  footer,
  onClose,
  width = 520,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60,
      background: 'rgba(16,20,58,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      animation: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-xl)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 'var(--space-5) var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      flex: 1,
      font: 'var(--fw-heavy) 18px/1.35 var(--font-brand)',
      color: 'var(--ur-navy)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: 'var(--space-5) var(--space-6)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--ur-grey-050)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Capsule meter — the logo's shape language applied to progress. */
function ProgressBar({
  value = 0,
  tone = 'accent',
  label,
  showValue = true,
  size = 'md',
  style,
  ...rest
}) {
  const h = size === 'sm' ? 6 : size === 'lg' ? 14 : 10;
  const colors = {
    accent: 'var(--ur-orange)',
    navy: 'var(--ur-navy)',
    success: 'var(--status-success)',
    info: 'var(--status-info)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      font: 'var(--fw-medium) 12px/1.4 var(--font-brand)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-strong)'
    }
  }, Math.round(value), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ur-grey-200)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, value)) + '%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: colors[tone],
      transition: 'width var(--dur-slow) var(--ease-standard)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      whiteSpace: 'nowrap',
      background: 'var(--ur-navy)',
      color: '#fff',
      borderRadius: 'var(--radius-control)',
      padding: '6px 10px',
      font: 'var(--fw-book) 12px/1.4 var(--font-body)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked,
  indeterminate,
  label,
  description,
  disabled,
  onChange,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 3,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (disabled ? 'var(--border-default)' : on ? 'var(--ur-orange)' : 'var(--border-strong)'),
      background: disabled ? 'var(--ur-grey-100)' : on ? 'var(--ur-orange)' : '#fff',
      color: '#fff',
      transition: 'var(--transition-control)',
      marginTop: description ? 2 : 0
    }
  }, on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: indeterminate ? 'minus' : 'check',
    size: 16,
    style: {
      width: 13,
      height: 13
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-book) 14px/1.45 var(--font-body)',
      color: disabled ? 'var(--ur-grey-400)' : 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-book) 12px/1.5 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Label + control + help/error wrapper. */
function Field({
  label,
  htmlFor,
  required,
  help,
  error,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--fw-medium) 13px/1.4 var(--font-brand)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ur-orange)',
      marginLeft: 3
    }
  }, "*")), children, (error || help) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-book) 12px/1.5 var(--font-body)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)'
    }
  }, error || help));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  icon,
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const border = invalid ? 'var(--status-danger)' : f ? 'var(--ur-orange)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: e => {
      setF(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setF(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-strong)',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      padding: '10px 12px',
      transition: 'var(--transition-control)',
      width: '100%',
      outline: 'none',
      paddingLeft: icon ? 38 : 12,
      borderColor: border,
      boxShadow: f && !invalid ? '0 0 0 3px var(--ur-orange-100)' : 'none',
      background: disabled ? 'var(--ur-grey-100)' : '#fff',
      color: disabled ? 'var(--ur-grey-400)' : 'var(--text-strong)',
      cursor: disabled ? 'not-allowed' : 'text',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked,
  label,
  description,
  name,
  value,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'flex',
      gap: 10,
      alignItems: description ? 'flex-start' : 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid ' + (disabled ? 'var(--border-default)' : checked ? 'var(--ur-orange)' : 'var(--border-strong)'),
      background: disabled ? 'var(--ur-grey-100)' : '#fff',
      transition: 'var(--transition-control)',
      marginTop: description ? 2 : 0
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ur-orange)'
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-book) 14px/1.45 var(--font-body)',
      color: disabled ? 'var(--ur-grey-400)' : 'var(--text-body)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--fw-book) 12px/1.5 var(--font-body)',
      color: 'var(--text-muted)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  invalid,
  disabled,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-strong)',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      padding: '10px 12px',
      transition: 'var(--transition-control)',
      width: '100%',
      outline: 'none',
      appearance: 'none',
      paddingRight: 36,
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderColor: invalid ? 'var(--status-danger)' : f ? 'var(--ur-orange)' : 'var(--border-default)',
      boxShadow: f && !invalid ? '0 0 0 3px var(--ur-orange-100)' : 'none',
      background: disabled ? 'var(--ur-grey-100)' : '#fff',
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Capsule toggle — the one interactive control allowed the pill radius, because it is a state object. */
function Switch({
  checked,
  label,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      gap: 10,
      alignItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      flex: 'none',
      position: 'relative',
      background: disabled ? 'var(--ur-grey-200)' : checked ? 'var(--ur-orange)' : 'var(--ur-grey-300)',
      transition: 'background-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: 'var(--radius-pill)',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      transition: 'left var(--dur-fast) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-book) 14px/1.45 var(--font-body)',
      color: disabled ? 'var(--ur-grey-400)' : 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid,
  disabled,
  rows = 4,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: '20px',
      color: 'var(--text-strong)',
      background: '#fff',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-control)',
      padding: '10px 12px',
      transition: 'var(--transition-control)',
      width: '100%',
      outline: 'none',
      resize: 'vertical',
      lineHeight: 1.6,
      borderColor: invalid ? 'var(--status-danger)' : f ? 'var(--ur-orange)' : 'var(--border-default)',
      boxShadow: f && !invalid ? '0 0 0 3px var(--ur-orange-100)' : 'none',
      background: disabled ? 'var(--ur-grey-100)' : '#fff',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      font: 'var(--fw-book) 13px/1.4 var(--font-body)',
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    const label = it.label ?? it;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ur-grey-400)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 16,
      style: {
        width: 14,
        height: 14
      }
    })), last ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-strong)',
        fontWeight: 'var(--fw-medium)'
      }
    }, label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      style: {
        color: 'var(--text-muted)'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNavItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A row in the fixed 240px app rail. Active state is an orange bar plus a tinted ground. */
function SideNavItem({
  icon,
  label,
  active,
  count,
  collapsed,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    title: collapsed ? label : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      border: 0,
      cursor: 'pointer',
      textAlign: 'left',
      padding: collapsed ? '10px 0' : '10px 14px',
      justifyContent: collapsed ? 'center' : 'flex-start',
      borderRadius: 'var(--radius-control)',
      font: 'var(--fw-medium) 14px/20px var(--font-brand)',
      color: active ? '#fff' : h ? '#fff' : 'rgba(255,255,255,.72)',
      background: active ? 'rgba(255,255,255,.10)' : h ? 'rgba(255,255,255,.06)' : 'transparent',
      boxShadow: active ? 'inset 3px 0 0 var(--ur-orange)' : 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), !collapsed && count != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: active ? 'accent' : 'neutral'
  }, count));
}
Object.assign(__ds_scope, { SideNavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tabs — the active tab carries the 3px orange rule. */
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'default',
  style,
  ...rest
}) {
  const [h, setH] = React.useState(null);
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      ...style
    }
  }, rest), items.map(it => {
    const id = it.value ?? it;
    const label = it.label ?? it;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      onMouseEnter: () => setH(id),
      onMouseLeave: () => setH(null),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--fw-medium) 14px/20px var(--font-brand)',
        color: active ? inverse ? '#fff' : 'var(--ur-navy)' : h === id ? inverse ? '#fff' : 'var(--ur-navy)' : inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
        boxShadow: active ? 'inset 0 -3px 0 var(--ur-orange)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, label, it.count != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
      tone: active ? 'accent' : 'neutral'
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Sticky 64px header — white with a hairline, or navy for marketing heroes. */
function TopBar({
  links = [],
  active,
  onNavigate,
  right,
  tone = 'light',
  basePath = '',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  const [h, setH] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      padding: '0 var(--space-8)',
      background: inverse ? 'var(--ur-navy)' : '#fff',
      borderBottom: '1px solid ' + (inverse ? 'var(--border-inverse)' : 'var(--border-subtle)'),
      position: 'sticky',
      top: 0,
      zIndex: 20,
      ...style
    }
  }, rest), inverse ? /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 26,
    onNavy: true,
    basePath: basePath,
    clearSpace: false
  }) : /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 34,
    basePath: basePath,
    clearSpace: false
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      flex: 1
    }
  }, links.map(l => {
    const id = l.value ?? l;
    const label = l.label ?? l;
    const on = id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onNavigate && onNavigate(id),
      onMouseEnter: () => setH(id),
      onMouseLeave: () => setH(null),
      style: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: '4px 0',
        font: 'var(--fw-medium) 14px/20px var(--font-brand)',
        color: on ? inverse ? '#fff' : 'var(--ur-navy)' : h === id ? inverse ? '#fff' : 'var(--ur-navy)' : inverse ? 'rgba(255,255,255,.72)' : 'var(--text-muted)',
        boxShadow: on ? 'inset 0 -3px 0 var(--ur-orange)' : 'none',
        transition: 'var(--transition-control)'
      }
    }, label, l.caret && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-down",
      size: 16,
      style: {
        marginLeft: 4,
        width: 14,
        height: 14
      }
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)'
    }
  }, right));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/AppShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Logo,
  Icon,
  IconButton,
  SideNavItem,
  Input,
  Badge,
  Tooltip,
  Button
} = window.USEReadyDesignSystem_41f54b;
const BASE = '../../';
const NAV = [{
  id: 'overview',
  icon: 'layout-dashboard',
  label: 'Overview'
}, {
  id: 'sources',
  icon: 'database',
  label: 'Sources',
  count: 4
}, {
  id: 'migrations',
  icon: 'git-branch',
  label: 'Migrations',
  count: 12
}, {
  id: 'governance',
  icon: 'shield-check',
  label: 'Governance'
}, {
  id: 'agents',
  icon: 'bot',
  label: 'Agents'
}];
function SideRail({
  route,
  onRoute
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 240,
      flex: 'none',
      background: 'var(--ur-navy)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 16px 22px'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    height: 26,
    onNavy: true,
    basePath: BASE,
    clearSpace: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement(SideNavItem, _extends({
    key: n.id
  }, n, {
    active: route === n.id,
    onClick: () => onRoute(n.id)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12,
      borderTop: '1px solid var(--border-inverse)'
    }
  }, /*#__PURE__*/React.createElement(SideNavItem, {
    icon: "settings",
    label: "Settings"
  }), /*#__PURE__*/React.createElement(SideNavItem, {
    icon: "life-buoy",
    label: "Support"
  })));
}
function AppBar({
  title,
  crumbs,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flex: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      padding: '0 var(--space-8)',
      background: '#fff',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, crumbs, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-heavy) 19px/1.3 var(--font-brand)',
      color: 'var(--ur-navy)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search workbooks, sources\u2026"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Notifications"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 4,
      right: 4
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    dot: true
  })))), actions, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ur-navy)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-heavy) 12px/1 var(--font-brand)'
    }
  }, "JR"));
}
function Panel({
  title,
  action,
  children,
  padding = 'var(--space-6)',
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-card)',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '16px var(--space-6)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: 1,
      font: 'var(--fw-heavy) 15px/1.4 var(--font-brand)',
      color: 'var(--ur-navy)'
    }
  }, title), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(window, {
  SideRail,
  AppBar,
  Panel,
  NAV,
  BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/GovernanceScreen.jsx
try { (() => {
const {
  DataTable,
  Tag,
  Button,
  ChartLegend,
  DonutChart,
  Checkbox,
  Alert,
  Breadcrumb,
  Tooltip,
  IconButton
} = window.USEReadyDesignSystem_41f54b;
const POLICIES = [{
  id: 1,
  name: 'PII masking — customer table',
  scope: 'Snowflake · RAW.CUSTOMER',
  owner: 'Data Office',
  state: 'Enforced',
  reviewed: 'Aug 12'
}, {
  id: 2,
  name: 'Certified metric — Net Written Premium',
  scope: 'Semantic layer',
  owner: 'Finance',
  state: 'Enforced',
  reviewed: 'Aug 09'
}, {
  id: 3,
  name: 'Row-level security — broker view',
  scope: 'Tableau · Broker Book',
  owner: 'Distribution',
  state: 'Review due',
  reviewed: 'Jun 30'
}, {
  id: 4,
  name: 'Retention — claims documents',
  scope: 'S3 · claims-archive',
  owner: 'Legal',
  state: 'Enforced',
  reviewed: 'Jul 22'
}, {
  id: 5,
  name: 'Access review — analytics engineers',
  scope: 'Snowflake roles',
  owner: 'Data Office',
  state: 'Overdue',
  reviewed: 'Mar 04'
}];
const PTONE = {
  Enforced: 'success',
  'Review due': 'warning',
  Overdue: 'danger'
};
function GovernanceScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "One access review is overdue"
  }, "Analytics engineer roles were last reviewed in March. Regulated estates require quarterly review."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Policy coverage"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    size: 160,
    thickness: 24,
    data: [{
      label: 'Enforced',
      value: 72,
      color: 'var(--status-success)'
    }, {
      label: 'Review due',
      value: 19,
      color: 'var(--status-warning)'
    }, {
      label: 'Overdue',
      value: 9,
      color: 'var(--status-danger)'
    }],
    centerValue: "92%",
    centerLabel: "Coverage"
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    style: {
      justifyContent: 'center'
    },
    items: [{
      label: 'Enforced',
      value: '72',
      color: 'var(--status-success)'
    }, {
      label: 'Review due',
      value: '19',
      color: 'var(--status-warning)'
    }, {
      label: 'Overdue',
      value: '9',
      color: 'var(--status-danger)'
    }]
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Policies",
    padding: "0",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "plus"
    }, "New policy")
  }, /*#__PURE__*/React.createElement(DataTable, {
    columns: [{
      key: 'sel',
      label: '',
      width: 44,
      render: () => /*#__PURE__*/React.createElement(Checkbox, null)
    }, {
      key: 'name',
      label: 'Policy',
      sortable: true
    }, {
      key: 'scope',
      label: 'Scope',
      width: 210
    }, {
      key: 'owner',
      label: 'Owner',
      width: 140
    }, {
      key: 'state',
      label: 'State',
      width: 130,
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: PTONE[r.state]
      }, r.state)
    }, {
      key: 'reviewed',
      label: 'Reviewed',
      align: 'right',
      width: 110
    }],
    rows: POLICIES,
    style: {
      border: 0,
      borderRadius: 0
    }
  }))));
}
Object.assign(window, {
  GovernanceScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/GovernanceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/MigrationScreen.jsx
try { (() => {
const {
  Tabs,
  Tag,
  Button,
  Card,
  DataTable,
  ProgressBar,
  Breadcrumb,
  Modal,
  Checkbox,
  Select,
  Field,
  Switch,
  Icon,
  EmptyState,
  MetricCard
} = window.USEReadyDesignSystem_41f54b;
const OBJECTS = [{
  id: 1,
  name: 'Regional Sales Performance',
  type: 'Workbook',
  sheets: 12,
  status: 'Validated',
  diff: '0'
}, {
  id: 2,
  name: 'Claims Ratio Monitor',
  type: 'Workbook',
  sheets: 8,
  status: 'In flight',
  diff: '—'
}, {
  id: 3,
  name: 'Liquidity Coverage Ratio',
  type: 'Workbook',
  sheets: 21,
  status: 'Blocked',
  diff: '3 measures'
}, {
  id: 4,
  name: 'gl_transactions_daily',
  type: 'Pipeline',
  sheets: '—',
  status: 'Validated',
  diff: '0'
}, {
  id: 5,
  name: 'policy_dim_scd2',
  type: 'Pipeline',
  sheets: '—',
  status: 'Validated',
  diff: '0'
}, {
  id: 6,
  name: 'Broker Commission Detail',
  type: 'Workbook',
  sheets: 6,
  status: 'In flight',
  diff: '—'
}];
function MigrationScreen() {
  const [tab, setTab] = React.useState('all');
  const [open, setOpen] = React.useState(false);
  const [rls, setRls] = React.useState(true);
  const rows = tab === 'all' ? OBJECTS : OBJECTS.filter(o => tab === 'blocked' ? o.status === 'Blocked' : o.status === 'In flight');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Objects in batch",
    value: "248",
    icon: "layers"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Validated",
    value: "169",
    delta: "68% of batch",
    deltaDirection: "up",
    icon: "check-circle"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "In flight",
    value: "65",
    icon: "loader"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Blocked",
    value: "14",
    delta: "-2 today",
    deltaDirection: "down",
    icon: "octagon-alert"
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Batch 07 \xB7 QlikView \u2192 Tableau",
    padding: "0",
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 'var(--space-3)'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "settings-2",
      onClick: () => setOpen(true)
    }, "Configure"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconLeft: "play",
      onClick: () => setOpen(true)
    }, "Run validation"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 68,
    label: "Validation progress",
    size: "lg"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: 'all',
      label: 'All objects',
      count: OBJECTS.length
    }, {
      value: 'inflight',
      label: 'In flight'
    }, {
      value: 'blocked',
      label: 'Blocked',
      count: 1
    }]
  })), rows.length ? /*#__PURE__*/React.createElement(DataTable, {
    dense: true,
    columns: [{
      key: 'name',
      label: 'Object',
      sortable: true
    }, {
      key: 'type',
      label: 'Type',
      width: 130
    }, {
      key: 'sheets',
      label: 'Sheets',
      align: 'right',
      width: 90
    }, {
      key: 'diff',
      label: 'Validation diff',
      width: 160
    }, {
      key: 'status',
      label: 'Status',
      align: 'right',
      width: 140,
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: TONE[r.status]
      }, r.status)
    }],
    rows: rows,
    style: {
      border: 0,
      borderRadius: 0
    }
  }) : /*#__PURE__*/React.createElement(EmptyState, {
    icon: "search-x",
    title: "Nothing in this state",
    description: "Every object in Batch 07 has moved on."
  })), /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: () => setOpen(false),
    title: "Run validation on Batch 07",
    width: 560,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setOpen(false),
      iconRight: "play"
    }, "Start run"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)'
    }
  }, "248 objects will be compared against their QlikView source output. You can stop the run at any point."), /*#__PURE__*/React.createElement(Field, {
    label: "Target environment"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Staging warehouse', 'Production warehouse']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Comparison tolerance",
    help: "Rows differing by less than this are treated as matching."
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Exact match', '0.01%', '0.1%']
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: true,
    label: "Include archived workbooks",
    description: "Adds ~1,200 objects to the scan."
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: rls,
    onChange: () => setRls(!rls),
    label: "Apply row-level security during comparison"
  }))));
}
Object.assign(window, {
  MigrationScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/MigrationScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/OverviewScreen.jsx
try { (() => {
const {
  MetricCard,
  BarChart,
  DonutChart,
  ChartLegend,
  DataTable,
  Tag,
  Button,
  Alert,
  ProgressBar,
  Breadcrumb
} = window.USEReadyDesignSystem_41f54b;
const RECENT = [{
  id: 1,
  name: 'Regional Sales Performance',
  source: 'QlikView',
  owner: 'A. Mehta',
  status: 'Validated',
  updated: '4 min ago'
}, {
  id: 2,
  name: 'Claims Ratio Monitor',
  source: 'Cognos',
  owner: 'J. Okafor',
  status: 'In flight',
  updated: '22 min ago'
}, {
  id: 3,
  name: 'Liquidity Coverage Ratio',
  source: 'MicroStrategy',
  owner: 'S. Reyes',
  status: 'Blocked',
  updated: '1 hr ago'
}, {
  id: 4,
  name: 'Broker Commission Detail',
  source: 'QlikView',
  owner: 'A. Mehta',
  status: 'Validated',
  updated: '2 hrs ago'
}, {
  id: 5,
  name: 'Reinsurance Exposure',
  source: 'Cognos',
  owner: 'M. Lindqvist',
  status: 'In flight',
  updated: '3 hrs ago'
}];
const TONE = {
  Validated: 'success',
  'In flight': 'info',
  Blocked: 'danger'
};
function OverviewScreen({
  onOpen
}) {
  const [sort, setSort] = React.useState('name');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Credential expires in 3 days"
  }, "The Snowflake service account used by Batch 07 needs rotation before Friday."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(MetricCard, {
    label: "Workbooks migrated",
    value: "4,182",
    delta: "+312 this week",
    deltaDirection: "up",
    icon: "layers"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Pipelines modernized",
    value: "12,904",
    delta: "+1,102",
    deltaDirection: "up",
    icon: "git-branch"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Blocked objects",
    value: "37",
    delta: "-8 this week",
    deltaDirection: "down",
    icon: "octagon-alert"
  }), /*#__PURE__*/React.createElement(MetricCard, {
    label: "Governance coverage",
    value: "92",
    unit: "%",
    tone: "inverse",
    icon: "shield-check"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Objects migrated by month",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      iconRight: "arrow-right"
    }, "Full report")
  }, /*#__PURE__*/React.createElement(BarChart, {
    height: 200,
    data: [{
      label: 'Jan',
      value: 320
    }, {
      label: 'Feb',
      value: 486
    }, {
      label: 'Mar',
      value: 454
    }, {
      label: 'Apr',
      value: 612
    }, {
      label: 'May',
      value: 598
    }, {
      label: 'Jun',
      value: 746
    }, {
      label: 'Jul',
      value: 690
    }, {
      label: 'Aug',
      value: 812
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Estate status"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    size: 148,
    thickness: 22,
    data: [{
      label: 'Migrated',
      value: 62
    }, {
      label: 'In flight',
      value: 24
    }, {
      label: 'Blocked',
      value: 14
    }],
    centerValue: "62%",
    centerLabel: "Complete"
  }), /*#__PURE__*/React.createElement(ChartLegend, {
    style: {
      flexDirection: 'column',
      gap: 12
    },
    items: [{
      label: 'Migrated',
      value: '2,594'
    }, {
      label: 'In flight',
      value: '1,004'
    }, {
      label: 'Blocked',
      value: '584'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 68,
    label: "Batch 07 validation"
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 91,
    tone: "success",
    label: "Batch 06 validation"
  })))), /*#__PURE__*/React.createElement(Panel, {
    title: "Recently updated",
    padding: "0",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      iconLeft: "download"
    }, "Export")
  }, /*#__PURE__*/React.createElement(DataTable, {
    sort: sort,
    onSort: setSort,
    onRowClick: onOpen,
    columns: [{
      key: 'name',
      label: 'Workbook',
      sortable: true
    }, {
      key: 'source',
      label: 'Source platform',
      width: 180
    }, {
      key: 'owner',
      label: 'Owner',
      width: 160
    }, {
      key: 'status',
      label: 'Status',
      width: 140,
      render: r => /*#__PURE__*/React.createElement(Tag, {
        tone: TONE[r.status]
      }, r.status)
    }, {
      key: 'updated',
      label: 'Updated',
      align: 'right',
      width: 130
    }],
    rows: RECENT,
    style: {
      border: 0,
      borderRadius: 0
    }
  })));
}
Object.assign(window, {
  OverviewScreen,
  RECENT,
  TONE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Eyebrow,
  Card,
  Field,
  Input,
  Select,
  Textarea,
  Checkbox,
  Alert
} = window.USEReadyDesignSystem_41f54b;
function ContactScreen() {
  const [sent, setSent] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 80,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-heavy) 44px/1.14 var(--font-brand)',
      letterSpacing: '-0.02em',
      color: 'var(--ur-navy)',
      marginTop: 16
    }
  }, "Tell us what your data is stopping you from doing"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) 18px/1.75 var(--font-body)',
      color: 'var(--text-body)',
      marginTop: 16
    }
  }, "A senior consultant replies within one business day \u2014 not a sequence, not a chatbot."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, [['map-pin', '1407 Broadway, Suite 721, New York, NY 10018'], ['phone', '+1 (212) 370-0000'], ['mail', 'marketing@useready.com']].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ur-orange)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-book) 15px/1.6 var(--font-body)',
      color: 'var(--text-body)'
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, ['New York', 'New Jersey', 'Toronto', 'Bangalore', 'Singapore'].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, c)))), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-10)"
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Thanks \u2014 we have it."
  }, "A consultant will be in touch within one business day.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Jordan"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Reyes"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    required: true,
    help: "We reply within one business day."
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "mail",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Company"
  }, /*#__PURE__*/React.createElement(Input, {
    icon: "building-2",
    placeholder: "Northbank Insurance"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Current BI platform"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Tableau', 'Power BI', 'QlikView', 'Cognos', 'MicroStrategy', 'Other']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Where you are"
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Exploring', 'Planning a migration', 'Mid-migration', 'Post-migration']
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "What are you trying to do?"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "Retiring an eleven-year-old QlikView estate before the licence renews in Q3."
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: consent,
    onChange: () => setConsent(!consent),
    label: "Send me the quarterly data-leadership brief."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    iconRight: "arrow-right",
    onClick: () => setSent(true)
  }, "Talk to us")))));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Eyebrow,
  Tag,
  Card,
  StatBlock,
  Divider
} = window.USEReadyDesignSystem_41f54b;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--ur-navy)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: BASE + 'assets/bg-tech-dark.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: .34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--ur-navy) 32%, rgba(16,20,58,.72) 70%, rgba(16,20,58,.45) 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      padding: '112px 40px 104px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "inverse",
    style: {
      marginBottom: 22
    }
  }, "Intelligent transformation"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-heavy) 64px/1.08 var(--font-brand)',
      letterSpacing: '-0.02em',
      color: '#fff',
      maxWidth: 780
    }
  }, "We empower people to succeed with data"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) 20px/1.7 var(--font-body)',
      color: 'rgba(255,255,255,.78)',
      maxWidth: 620,
      marginTop: 24
    }
  }, "We give Chief Data & Analytics Officers the strategy, tools and capacity to modernize their platforms, engineer reliable data, and get AI-ready \u2014 without pausing the business."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right"
  }, "Talk to us"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => onNavigate('solutions')
  }, "See our solutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    size: "sm",
    value: "30,000",
    suffix: "+",
    label: "Reports modernized"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    size: "sm",
    value: "100,000",
    suffix: "+",
    label: "Pipelines migrated"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    size: "sm",
    value: "2011",
    label: "Serving data leaders since"
  }))));
}
const PARTNERS = ['Tableau', 'Salesforce', 'Snowflake', 'Starburst', 'AWS', 'Alteryx'];
function PartnerStrip() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ur-grey-050)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Partnered with"), PARTNERS.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      font: 'var(--fw-heavy) 18px/1 var(--font-brand)',
      color: 'var(--ur-grey-400)',
      letterSpacing: '-0.01em'
    }
  }, p))));
}
const CAPABILITIES = [{
  icon: 'database',
  title: 'Data readiness',
  body: 'Assess, rationalize and prepare the estate so every downstream decision starts from trustworthy data.'
}, {
  icon: 'git-branch',
  title: 'Platform modernization',
  body: 'Move off legacy BI and on-premise warehouses with a plan-migrate-validate framework and no lost use cases.'
}, {
  icon: 'shield-check',
  title: 'Governance',
  body: 'Access control, lineage, certification and audit — designed for regulated financial services and insurance.'
}, {
  icon: 'line-chart',
  title: 'Decision intelligence',
  body: 'Turn insight into action across sales, marketing, finance and risk with measurable decision workflows.'
}, {
  icon: 'bot',
  title: 'Agentic AI',
  body: 'Put agents to work on the analytics backlog, grounded in a semantic layer your business already agrees on.'
}, {
  icon: 'users',
  title: 'Enablement',
  body: 'Training, community and data literacy programs that make self-service actually self-serving.'
}];
function Capabilities() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "light"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Services",
    title: "Everything between raw data and a decision",
    lead: "Five practices, one delivery model. We start where your estate actually is, not where a reference architecture says it should be."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, CAPABILITIES.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    interactive: true
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-accent-soft)',
      color: 'var(--ur-orange)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-heavy) 20px/1.35 var(--font-brand)',
      color: 'var(--ur-navy)',
      marginTop: 20
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-book) 15px/1.65 var(--font-body)',
      color: 'var(--text-body)',
      marginTop: 10
    }
  }, c.body)))));
}
function ProofBand() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    pad: 88
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "inverse",
    style: {
      marginBottom: 20
    }
  }, "Proof"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      font: 'var(--fw-light) 32px/1.4 var(--font-brand)',
      color: '#fff',
      letterSpacing: '-0.01em'
    }
  }, "\u201CThey retired eleven years of legacy reporting without a single business day of downtime.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-medium) 13px/1.5 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.6)',
      marginTop: 24
    }
  }, "Chief Data Officer \xB7 Global insurance carrier")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "11",
    suffix: "yrs",
    label: "Legacy retired"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "0",
    label: "Days of downtime"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "248",
    label: "Workbooks migrated"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "inverse",
    value: "94",
    suffix: "%",
    label: "First-pass validation"
  }))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ur-grey-050)',
      backgroundImage: 'url(' + BASE + 'assets/bg-rings-light.jpg)',
      backgroundSize: 'cover',
      padding: '88px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-heavy) 40px/1.18 var(--font-brand)',
      letterSpacing: '-0.01em',
      color: 'var(--ur-navy)'
    }
  }, "Start with an honest assessment"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) 18px/1.7 var(--font-body)',
      color: 'var(--text-body)',
      marginTop: 12,
      maxWidth: 560
    }
  }, "Two weeks, your real estate, a scored readiness report. No commitment beyond the read-out.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    iconRight: "arrow-right"
  }, "Talk to us")));
}
function HomeScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(PartnerStrip, null), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(ProofBand, null), /*#__PURE__*/React.createElement(CTA, null));
}
Object.assign(window, {
  HomeScreen,
  Hero,
  PartnerStrip,
  Capabilities,
  ProofBand,
  CTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Logo,
  Eyebrow,
  Tag,
  Card,
  StatBlock,
  Divider,
  TopBar
} = window.USEReadyDesignSystem_41f54b;
const BASE = '../../';
function Section({
  children,
  tone = 'light',
  pad = 96,
  style
}) {
  const bg = tone === 'navy' ? 'var(--ur-navy)' : tone === 'subtle' ? 'var(--ur-grey-050)' : '#fff';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: pad + 'px 40px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, children));
}
function SectionHead({
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  max = 720
}) {
  const inv = tone === 'navy';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: max,
      marginBottom: 48,
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0,
      textAlign: align
    }
  }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
    rule: align !== 'center',
    tone: inv ? 'inverse' : 'accent',
    style: {
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      marginBottom: 16
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-heavy) 40px/1.18 var(--font-brand)',
      letterSpacing: '-0.01em',
      color: inv ? '#fff' : 'var(--ur-navy)'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) 18px/1.75 var(--font-body)',
      color: inv ? 'rgba(255,255,255,.72)' : 'var(--text-body)',
      marginTop: 16
    }
  }, lead));
}
function SiteHeader({
  active,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(TopBar, {
    basePath: BASE,
    links: [{
      value: 'home',
      label: 'Home'
    }, {
      value: 'services',
      label: 'Services',
      caret: true
    }, {
      value: 'solutions',
      label: 'Solutions',
      caret: true
    }, {
      value: 'about',
      label: 'About'
    }],
    active: active,
    onNavigate: onNavigate,
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Careers"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      iconRight: "arrow-right"
    }, "Talk to us"))
  });
}
function SiteFooter() {
  const cols = [['Services', ['Data readiness', 'Platform modernization', 'Governance', 'Decision intelligence', 'Agentic AI']], ['Solutions', ['MigrationWorks', 'Storm', 'DRE', 'Refactory.ai', 'Finomenal', 'SemaBridge']], ['Company', ['About', 'Careers', 'Newsroom', 'Partners', 'Contact']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ur-navy)',
      padding: '72px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(3, 1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Logo, {
    height: 34,
    onNavy: true,
    basePath: BASE,
    clearSpace: false
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-book) 14px/1.7 var(--font-body)',
      color: 'rgba(255,255,255,.72)',
      marginTop: 20,
      maxWidth: 280
    }
  }, "1407 Broadway, Suite 721", /*#__PURE__*/React.createElement("br", null), "New York, NY 10018", /*#__PURE__*/React.createElement("br", null), "+1 (212) 370-0000"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:marketing@useready.com",
    style: {
      display: 'inline-block',
      marginTop: 12,
      font: 'var(--fw-medium) 14px/1.6 var(--font-brand)'
    }
  }, "marketing@useready.com")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 11px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)',
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: 'var(--fw-book) 14px/1.5 var(--font-body)',
      color: 'rgba(255,255,255,.8)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-inverse)',
      marginTop: 48,
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 12px/1.4 var(--font-brand)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, "We empower people to succeed with data"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-book) 12px/1.4 var(--font-body)',
      color: 'rgba(255,255,255,.5)'
    }
  }, "\xA9 2026 USEReady"))));
}
Object.assign(window, {
  Section,
  SectionHead,
  SiteHeader,
  SiteFooter,
  BASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SolutionsScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Eyebrow,
  Tag,
  Card,
  Divider,
  Tabs
} = window.USEReadyDesignSystem_41f54b;
const PRODUCTS = [{
  id: 'migrationworks',
  name: 'MigrationWorks',
  kicker: 'Legacy BI migration',
  body: 'A plan-migrate-validate framework that moves QlikView, Cognos and MicroStrategy estates onto Tableau with every use case accounted for.',
  tags: ['Tableau', 'QlikView', 'Validation'],
  icon: 'git-branch'
}, {
  id: 'storm',
  name: 'Storm',
  kicker: 'Analytics operations',
  body: 'Continuous monitoring for dashboards and pipelines — freshness, usage, cost and failure, in one operational view.',
  tags: ['Monitoring', 'FinOps'],
  icon: 'activity'
}, {
  id: 'dre',
  name: 'DRE',
  kicker: 'Data readiness engine',
  body: 'Scores your estate against the readiness dimensions that actually predict AI success, then sequences the remediation.',
  tags: ['Assessment', 'Governance'],
  icon: 'gauge'
}, {
  id: 'refactory',
  name: 'Refactory.ai',
  kicker: 'Code modernization',
  body: 'Refactors legacy transformation logic into governed, testable pipelines on your target warehouse.',
  tags: ['Snowflake', 'dbt'],
  icon: 'code'
}, {
  id: 'finomenal',
  name: 'Finomenal',
  kicker: 'Financial services accelerator',
  body: 'Pre-built models and reporting for regulated finance — liquidity, claims, exposure and capital.',
  tags: ['Banking', 'Insurance'],
  icon: 'landmark'
}, {
  id: 'semabridge',
  name: 'SemaBridge',
  kicker: 'Semantic interoperability',
  body: 'Keeps business definitions consistent across BI tools and cloud data platforms, so AI answers agree with the boardroom.',
  tags: ['Semantic layer', 'Snowflake'],
  icon: 'link'
}];
function SolutionsScreen() {
  const [filter, setFilter] = React.useState('all');
  const [open, setOpen] = React.useState('migrationworks');
  const shown = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.tags.some(t => t.toLowerCase().includes(filter)));
  const active = PRODUCTS.find(p => p.id === open);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ur-navy)',
      padding: '72px 40px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    tone: "inverse",
    style: {
      marginBottom: 18
    }
  }, "Solutions"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--fw-heavy) 52px/1.1 var(--font-brand)',
      letterSpacing: '-0.02em',
      color: '#fff',
      maxWidth: 760
    }
  }, "Our IP, built from the migrations we kept repeating"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) 18px/1.75 var(--font-body)',
      color: 'rgba(255,255,255,.72)',
      maxWidth: 620,
      marginTop: 18
    }
  }, "Six products that shorten the distance between a legacy estate and an AI-ready one."))), /*#__PURE__*/React.createElement(Section, {
    tone: "light",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      value: 'all',
      label: 'All solutions',
      count: PRODUCTS.length
    }, {
      value: 'tableau',
      label: 'Tableau'
    }, {
      value: 'snowflake',
      label: 'Snowflake'
    }, {
      value: 'governance',
      label: 'Governance'
    }],
    value: filter,
    onChange: setFilter
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-6)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.id,
    interactive: true,
    onClick: () => setOpen(p.id),
    style: open === p.id ? {
      borderColor: 'var(--ur-orange)',
      boxShadow: 'var(--shadow-md)'
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ur-orange)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: p.icon,
    size: 20
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, p.kicker)), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--fw-heavy) 22px/1.3 var(--font-brand)',
      color: 'var(--ur-navy)',
      marginTop: 14
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-book) 15px/1.65 var(--font-body)',
      color: 'var(--text-body)',
      marginTop: 10
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 18
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))), shown.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      marginTop: 32
    }
  }, "No solutions match that filter.")), /*#__PURE__*/React.createElement(Section, {
    tone: "subtle",
    pad: 72
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, active.kicker), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--fw-heavy) 36px/1.18 var(--font-brand)',
      color: 'var(--ur-navy)',
      marginTop: 16
    }
  }, active.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--fw-light) 18px/1.75 var(--font-body)',
      color: 'var(--text-body)',
      marginTop: 14
    }
  }, active.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right"
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline"
  }, "Read the brief"))), /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ur-navy)',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: active.icon,
    size: 16,
    style: {
      color: 'var(--ur-orange)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 13px/1 var(--font-brand)',
      color: '#fff'
    }
  }, active.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, ['Discover', 'Plan', 'Migrate', 'Validate'].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      background: i < 3 ? 'var(--ur-orange)' : 'var(--ur-grey-200)',
      color: i < 3 ? '#fff' : 'var(--ur-grey-500)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--fw-heavy) 12px/1 var(--font-brand)',
      flex: 'none'
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 15px/1.4 var(--font-brand)',
      color: 'var(--ur-navy)',
      flex: 1
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 2,
      height: 8,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--ur-grey-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: [100, 100, 62, 0][i] + '%',
      background: 'var(--ur-orange)',
      borderRadius: 'var(--radius-pill)'
    }
  })))))))));
}
Object.assign(window, {
  SolutionsScreen,
  PRODUCTS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SolutionsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.ChartLegend = __ds_scope.ChartLegend;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DonutChart = __ds_scope.DonutChart;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SideNavItem = __ds_scope.SideNavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
