'use strict';

var plugin = require('tailwindcss/plugin');
var orbitDesignTokens = require('@kiwicom/orbit-design-tokens');
var color2k = require('color2k');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var plugin__default = /*#__PURE__*/_interopDefault(plugin);

// src/index.ts
var toPx = (n) => `${n}px`;
var getTailwindTheme = (theme) => {
  return {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      blue: {
        dark: theme.paletteBlueDark,
        "dark-active": theme.paletteBlueDarkActive,
        "dark-hover": theme.paletteBlueDarkHover,
        darker: theme.paletteBlueDarker,
        light: theme.paletteBlueLight,
        "light-active": theme.paletteBlueLightActive,
        "light-hover": theme.paletteBlueLightHover,
        normal: theme.paletteBlueNormal,
        "normal-active": theme.paletteBlueNormalActive,
        "normal-hover": theme.paletteBlueNormalHover
      },
      bundle: {
        basic: theme.paletteBundleBasic,
        medium: theme.paletteBundleMedium
      },
      cloud: {
        dark: theme.paletteCloudDark,
        "dark-active": theme.paletteCloudDarkActive,
        "dark-hover": theme.paletteCloudDarkHover,
        light: theme.paletteCloudLight,
        "light-active": theme.paletteCloudLightActive,
        "light-hover": theme.paletteCloudLightHover,
        normal: theme.paletteCloudNormal,
        "normal-active": theme.paletteCloudNormalActive,
        "normal-hover": theme.paletteCloudNormalHover
      },
      green: {
        dark: theme.paletteGreenDark,
        "dark-active": theme.paletteGreenDarkActive,
        "dark-hover": theme.paletteGreenDarkHover,
        darker: theme.paletteGreenDarker,
        light: theme.paletteGreenLight,
        "light-active": theme.paletteGreenLightActive,
        "light-hover": theme.paletteGreenLightHover,
        normal: theme.paletteGreenNormal,
        "normal-active": theme.paletteGreenNormalActive,
        "normal-hover": theme.paletteGreenNormalHover
      },
      ink: {
        dark: theme.paletteInkDark,
        "dark-active": theme.paletteInkDarkActive,
        "dark-hover": theme.paletteInkDarkHover,
        light: theme.paletteInkLight,
        "light-active": theme.paletteInkLightActive,
        "light-hover": theme.paletteInkLightHover,
        normal: theme.paletteInkNormal,
        "normal-active": theme.paletteInkNormalActive,
        "normal-hover": theme.paletteInkNormalHover
      },
      orange: {
        dark: theme.paletteOrangeDark,
        "dark-active": theme.paletteOrangeDarkActive,
        "dark-hover": theme.paletteOrangeDarkHover,
        darker: theme.paletteOrangeDarker,
        light: theme.paletteOrangeLight,
        "light-active": theme.paletteOrangeLightActive,
        "light-hover": theme.paletteOrangeLightHover,
        normal: theme.paletteOrangeNormal,
        "normal-active": theme.paletteOrangeNormalActive,
        "normal-hover": theme.paletteOrangeNormalHover
      },
      product: {
        dark: theme.paletteProductDark,
        "dark-active": theme.paletteProductDarkActive,
        "dark-hover": theme.paletteProductDarkHover,
        darker: theme.paletteProductDarker,
        light: theme.paletteProductLight,
        "light-active": theme.paletteProductLightActive,
        "light-hover": theme.paletteProductLightHover,
        normal: theme.paletteProductNormal,
        "normal-active": theme.paletteProductNormalActive,
        "normal-hover": theme.paletteProductNormalHover
      },
      red: {
        dark: theme.paletteRedDark,
        "dark-active": theme.paletteRedDarkActive,
        "dark-hover": theme.paletteRedDarkHover,
        darker: theme.paletteRedDarker,
        light: theme.paletteRedLight,
        "light-active": theme.paletteRedLightActive,
        "light-hover": theme.paletteRedLightHover,
        normal: theme.paletteRedNormal,
        "normal-active": theme.paletteRedNormalActive,
        "normal-hover": theme.paletteRedNormalHover
      },
      social: {
        facebook: theme.paletteSocialFacebook,
        "facebook-hover": theme.paletteSocialFacebookHover,
        "facebook-active": theme.paletteSocialFacebookActive
      },
      white: {
        normal: theme.paletteWhite,
        "normal-active": theme.paletteWhiteActive,
        "normal-hover": theme.paletteWhiteHover
      }
    },
    fontSize: {
      small: orbitDesignTokens.defaultFoundation.fontSize.small,
      normal: orbitDesignTokens.defaultFoundation.fontSize.normal,
      large: orbitDesignTokens.defaultFoundation.fontSize.large,
      "extra-large": orbitDesignTokens.defaultFoundation.fontSize.extraLarge
    },
    lineHeight: {
      none: "1",
      small: orbitDesignTokens.defaultFoundation.lineHeight.small,
      normal: orbitDesignTokens.defaultFoundation.lineHeight.normal,
      large: orbitDesignTokens.defaultFoundation.lineHeight.large,
      "extra-large": orbitDesignTokens.defaultFoundation.lineHeight.extraLarge
    },
    fontWeight: {
      normal: orbitDesignTokens.defaultFoundation.fontWeight.normal,
      medium: orbitDesignTokens.defaultFoundation.fontWeight.medium,
      bold: orbitDesignTokens.defaultFoundation.fontWeight.bold
    },
    fontFamily: {
      base: orbitDesignTokens.defaultFoundation.fontFamily.base
    },
    spacing: {
      none: "0px",
      0: "0px",
      px: "1px",
      50: orbitDesignTokens.defaultFoundation.space["50"],
      100: orbitDesignTokens.defaultFoundation.space["100"],
      150: orbitDesignTokens.defaultFoundation.space["150"],
      200: orbitDesignTokens.defaultFoundation.space["200"],
      300: orbitDesignTokens.defaultFoundation.space["300"],
      400: orbitDesignTokens.defaultFoundation.space["400"],
      500: orbitDesignTokens.defaultFoundation.space["500"],
      600: orbitDesignTokens.defaultFoundation.space["600"],
      700: orbitDesignTokens.defaultFoundation.space["700"],
      800: orbitDesignTokens.defaultFoundation.space["800"],
      1e3: orbitDesignTokens.defaultFoundation.space["1000"],
      1200: orbitDesignTokens.defaultFoundation.space["1200"],
      1300: orbitDesignTokens.defaultFoundation.space["1300"],
      1600: orbitDesignTokens.defaultFoundation.space["1600"]
    },
    borderRadius: {
      50: orbitDesignTokens.defaultFoundation.borderRadius["50"],
      100: orbitDesignTokens.defaultFoundation.borderRadius["100"],
      150: orbitDesignTokens.defaultFoundation.borderRadius["150"],
      200: orbitDesignTokens.defaultFoundation.borderRadius["200"],
      300: orbitDesignTokens.defaultFoundation.borderRadius["300"],
      400: orbitDesignTokens.defaultFoundation.borderRadius["400"],
      none: orbitDesignTokens.defaultFoundation.borderRadius.none,
      full: orbitDesignTokens.defaultFoundation.borderRadius.full
    },
    screens: {
      sm: toPx(orbitDesignTokens.defaultFoundation.breakpoint.smallMobile),
      mm: toPx(orbitDesignTokens.defaultFoundation.breakpoint.mediumMobile),
      lm: toPx(orbitDesignTokens.defaultFoundation.breakpoint.largeMobile),
      tb: toPx(orbitDesignTokens.defaultFoundation.breakpoint.tablet),
      de: toPx(orbitDesignTokens.defaultFoundation.breakpoint.desktop),
      ld: toPx(orbitDesignTokens.defaultFoundation.breakpoint.largeDesktop)
    }
  };
};
var getTailwindTheme_default = getTailwindTheme;

// src/foundation/index.ts
var config = (tokens) => {
  const theme = getTailwindTheme_default(tokens);
  return {
    content: ["auto"],
    corePlugins: {
      preflight: false
    },
    theme: {
      extend: {
        ...theme,
        boxShadow: {
          none: "none",
          fixed: tokens.elevationFixedBoxShadow,
          "fixed-reverse": tokens.elevationFixedReverseBoxShadow,
          level1: tokens.elevationLevel1BoxShadow,
          level2: tokens.elevationLevel2BoxShadow,
          level3: tokens.elevationLevel3BoxShadow,
          "level3-reverse": tokens.elevationLevel3ReverseBoxShadow,
          level4: tokens.elevationLevel4BoxShadow,
          navbar: tokens.elevationNavBarBoxShadow
        },
        transitionDuration: {
          fast: tokens.durationFast,
          normal: tokens.durationNormal,
          slow: tokens.durationSlow
        },
        zIndex: {
          default: String(tokens.zIndexDefault),
          sticky: String(tokens.zIndexSticky),
          "navigation-bar": String(tokens.zIndexNavigationBar),
          modal: String(tokens.zIndexModal),
          overlay: String(tokens.zIndexModalOverlay),
          drawer: String(tokens.zIndexDrawer),
          onTop: String(tokens.zIndexOnTheTop)
        }
      }
    }
  };
};
var foundation_default = config;

// src/utils/kebabCase.ts
var kebabCase = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
var kebabCase_default = kebabCase;
var getComponentLevelTokens = (tokens = orbitDesignTokens.defaultTokens) => (component, type) => {
  return Object.keys(tokens).reduce((acc, key) => {
    const k = key.toLowerCase();
    const c = component.toLowerCase();
    const t = type.toLowerCase();
    if (k.startsWith(c) && k.endsWith(t)) {
      if (key.includes("buttonBundle") || key.includes("badgeBundle") && !type.includes("foreground"))
        return acc;
      if (tokens[key]) {
        acc[kebabCase_default(key)] = tokens[key];
      }
    }
    return acc;
  }, {});
};
var getComponentLevelTokens_default = getComponentLevelTokens;
var getChannels = (color) => color2k.parseToRgba(color).slice(0, -1).join(", ");
var generateRgba = (color, fallback) => `rgba(var(--${color}, ${getChannels(fallback)}), <alpha-value>)`;
var cssVarsFoundation = {
  palette: {
    product: {
      normal: generateRgba("palette-product-normal", orbitDesignTokens.defaultTokens.paletteProductNormal),
      normalHover: generateRgba(
        "palette-product-normal-hover",
        orbitDesignTokens.defaultTokens.paletteProductNormalHover
      ),
      normalActive: generateRgba(
        "palette-product-normal-active",
        orbitDesignTokens.defaultTokens.paletteProductNormalActive
      ),
      light: generateRgba("palette-product-light", orbitDesignTokens.defaultTokens.paletteProductLight),
      lightHover: generateRgba(
        "palette-product-light-hover",
        orbitDesignTokens.defaultTokens.paletteProductLightHover
      ),
      lightActive: generateRgba(
        "palette-product-light-active",
        orbitDesignTokens.defaultTokens.paletteProductLightActive
      ),
      dark: generateRgba("palette-product-dark", orbitDesignTokens.defaultTokens.paletteProductDark),
      darkHover: generateRgba("palette-product-dark-hover", orbitDesignTokens.defaultTokens.paletteProductDarkHover),
      darkActive: generateRgba(
        "palette-product-dark-active",
        orbitDesignTokens.defaultTokens.paletteProductDarkActive
      ),
      darker: generateRgba("palette-product-darker", orbitDesignTokens.defaultTokens.paletteProductDarker)
    },
    blue: {
      normal: generateRgba("palette-blue-normal", orbitDesignTokens.defaultTokens.paletteBlueNormal),
      normalHover: generateRgba("palette-blue-normal-hover", orbitDesignTokens.defaultTokens.paletteBlueNormalHover),
      normalActive: generateRgba(
        "palette-blue-normal-active",
        orbitDesignTokens.defaultTokens.paletteBlueNormalActive
      ),
      light: generateRgba("palette-blue-light", orbitDesignTokens.defaultTokens.paletteBlueLight),
      lightHover: generateRgba("palette-blue-light-hover", orbitDesignTokens.defaultTokens.paletteBlueLightHover),
      lightActive: generateRgba("palette-blue-light-active", orbitDesignTokens.defaultTokens.paletteBlueLightActive),
      dark: generateRgba("palette-blue-dark", orbitDesignTokens.defaultTokens.paletteBlueDark),
      darkHover: generateRgba("palette-blue-dark-hover", orbitDesignTokens.defaultTokens.paletteBlueDarkHover),
      darkActive: generateRgba("palette-blue-dark-active", orbitDesignTokens.defaultTokens.paletteBlueDarkActive),
      darker: generateRgba("palette-blue-darker", orbitDesignTokens.defaultTokens.paletteBlueDarker)
    },
    bundle: {
      basic: generateRgba("palette-bundle-basic", orbitDesignTokens.defaultTokens.paletteBundleBasic),
      medium: generateRgba("palette-bundle-medium", orbitDesignTokens.defaultTokens.paletteBundleMedium)
    },
    cloud: {
      normal: generateRgba("palette-cloud-normal", orbitDesignTokens.defaultTokens.paletteCloudNormal),
      normalHover: generateRgba(
        "palette-cloud-normal-hover",
        orbitDesignTokens.defaultTokens.paletteCloudNormalHover
      ),
      normalActive: generateRgba(
        "palette-cloud-normal-active",
        orbitDesignTokens.defaultTokens.paletteCloudNormalActive
      ),
      light: generateRgba("palette-cloud-light", orbitDesignTokens.defaultTokens.paletteCloudLight),
      lightHover: generateRgba("palette-cloud-light-hover", orbitDesignTokens.defaultTokens.paletteCloudLightHover),
      lightActive: generateRgba(
        "palette-cloud-light-active",
        orbitDesignTokens.defaultTokens.paletteCloudLightActive
      ),
      dark: generateRgba("palette-cloud-dark", orbitDesignTokens.defaultTokens.paletteCloudDark),
      darkHover: generateRgba("palette-cloud-dark-hover", orbitDesignTokens.defaultTokens.paletteCloudDarkHover),
      darkActive: generateRgba("palette-cloud-dark-active", orbitDesignTokens.defaultTokens.paletteCloudDarkActive)
    },
    green: {
      normal: generateRgba("palette-green-normal", orbitDesignTokens.defaultTokens.paletteGreenNormal),
      normalHover: generateRgba(
        "palette-green-normal-hover",
        orbitDesignTokens.defaultTokens.paletteGreenNormalHover
      ),
      normalActive: generateRgba(
        "palette-green-normal-active",
        orbitDesignTokens.defaultTokens.paletteGreenNormalActive
      ),
      light: generateRgba("palette-green-light", orbitDesignTokens.defaultTokens.paletteGreenLight),
      lightHover: generateRgba("palette-green-light-hover", orbitDesignTokens.defaultTokens.paletteGreenLightHover),
      lightActive: generateRgba(
        "palette-green-light-active",
        orbitDesignTokens.defaultTokens.paletteGreenLightActive
      ),
      dark: generateRgba("palette-green-dark", orbitDesignTokens.defaultTokens.paletteGreenDark),
      darkHover: generateRgba("palette-green-dark-hover", orbitDesignTokens.defaultTokens.paletteGreenDarkHover),
      darkActive: generateRgba("palette-green-dark-active", orbitDesignTokens.defaultTokens.paletteGreenDarkActive),
      darker: generateRgba("palette-green-darker", orbitDesignTokens.defaultTokens.paletteGreenDarker)
    },
    ink: {
      normal: generateRgba("palette-ink-normal", orbitDesignTokens.defaultTokens.paletteInkNormal),
      normalHover: generateRgba("palette-ink-normal-hover", orbitDesignTokens.defaultTokens.paletteInkNormalHover),
      normalActive: generateRgba("palette-ink-normal-active", orbitDesignTokens.defaultTokens.paletteInkNormalActive),
      light: generateRgba("palette-ink-light", orbitDesignTokens.defaultTokens.paletteInkLight),
      lightHover: generateRgba("palette-ink-light-hover", orbitDesignTokens.defaultTokens.paletteInkLightHover),
      lightActive: generateRgba("palette-ink-light-active", orbitDesignTokens.defaultTokens.paletteInkLightActive),
      dark: generateRgba("palette-ink-dark", orbitDesignTokens.defaultTokens.paletteInkDark),
      darkHover: generateRgba("palette-ink-dark-hover", orbitDesignTokens.defaultTokens.paletteInkDarkHover),
      darkActive: generateRgba("palette-ink-dark-active", orbitDesignTokens.defaultTokens.paletteInkDarkActive)
    },
    orange: {
      normal: generateRgba("palette-orange-normal", orbitDesignTokens.defaultTokens.paletteOrangeNormal),
      normalHover: generateRgba(
        "palette-orange-normal-hover",
        orbitDesignTokens.defaultTokens.paletteOrangeNormalHover
      ),
      normalActive: generateRgba(
        "palette-orange-normal-active",
        orbitDesignTokens.defaultTokens.paletteOrangeNormalActive
      ),
      light: generateRgba("palette-orange-light", orbitDesignTokens.defaultTokens.paletteOrangeLight),
      lightHover: generateRgba("palette-orange-light-hover", orbitDesignTokens.defaultTokens.paletteOrangeLightHover),
      lightActive: generateRgba(
        "palette-orange-light-active",
        orbitDesignTokens.defaultTokens.paletteOrangeLightActive
      ),
      dark: generateRgba("palette-orange-dark", orbitDesignTokens.defaultTokens.paletteOrangeDark),
      darkHover: generateRgba("palette-orange-dark-hover", orbitDesignTokens.defaultTokens.paletteOrangeDarkHover),
      darkActive: generateRgba("palette-orange-dark-active", orbitDesignTokens.defaultTokens.paletteOrangeDarkActive)
    },
    red: {
      normal: generateRgba("palette-red-normal", orbitDesignTokens.defaultTokens.paletteRedNormal),
      normalHover: generateRgba("palette-red-normal-hover", orbitDesignTokens.defaultTokens.paletteRedNormalHover),
      normalActive: generateRgba("palette-red-normal-active", orbitDesignTokens.defaultTokens.paletteRedNormalActive),
      light: generateRgba("palette-red-light", orbitDesignTokens.defaultTokens.paletteRedLight),
      lightHover: generateRgba("palette-red-light-hover", orbitDesignTokens.defaultTokens.paletteRedLightHover),
      lightActive: generateRgba("palette-red-light-active", orbitDesignTokens.defaultTokens.paletteRedLightActive),
      dark: generateRgba("palette-red-dark", orbitDesignTokens.defaultTokens.paletteRedDark),
      darkHover: generateRgba("palette-red-dark-hover", orbitDesignTokens.defaultTokens.paletteRedDarkHover),
      darkActive: generateRgba("palette-red-dark-active", orbitDesignTokens.defaultTokens.paletteRedDarkActive),
      darker: generateRgba("palette-red-darker", orbitDesignTokens.defaultTokens.paletteRedDarker)
    },
    social: {
      facebook: generateRgba("palette-social-facebook", orbitDesignTokens.defaultTokens.paletteSocialFacebook),
      facebookHover: generateRgba(
        "palette-social-facebook-hover",
        orbitDesignTokens.defaultTokens.paletteSocialFacebookHover
      ),
      facebookActive: generateRgba(
        "palette-social-facebook-active",
        orbitDesignTokens.defaultTokens.paletteSocialFacebookActive
      )
    },
    white: {
      normal: generateRgba("palette-white-normal", orbitDesignTokens.defaultTokens.paletteWhiteNormal),
      normalHover: generateRgba("palette-white-normal-hover", orbitDesignTokens.defaultTokens.paletteWhiteHover),
      normalActive: generateRgba("palette-white-normal-active", orbitDesignTokens.defaultTokens.paletteWhiteActive)
    }
  }
};
var cssVarsFoundation_default = cssVarsFoundation;

// src/index.ts
var COLORS = [
  "alert",
  "badge",
  "button",
  "buttonLink",
  "countryFlag",
  "drawer",
  "formElement",
  "heading",
  "icon",
  "tab",
  "tag",
  "text",
  "textLink"
];
var getForegroundColors = (tokens) => {
  const componentTokens = getComponentLevelTokens_default(tokens);
  return COLORS.reduce((acc, name) => {
    if (name === "tab")
      return acc;
    return {
      ...acc,
      ...componentTokens(name, "foreground"),
      ...componentTokens(name, "foregroundInverted"),
      ...componentTokens(name, "foregroundHover"),
      ...componentTokens(name, "foregroundActive")
    };
  }, {});
};
var getBackgroundColors = (tokens) => {
  const componentTokens = getComponentLevelTokens_default(tokens);
  return COLORS.reduce(
    (acc, name) => {
      return {
        ...acc,
        ...componentTokens(name, "background"),
        ...componentTokens(name, "backgroundHover"),
        ...componentTokens(name, "backgroundActive")
      };
    },
    {
      "elevation-flat": tokens.elevationFlatBackground,
      "elevation-suppressed": tokens.elevationSuppressedBackground,
      "elevation-fixed": tokens.elevationFixedBackground,
      "elevation-fixed-reverse": tokens.elevationFixedReverseBackground,
      "elevation-flat-border-color": tokens.elevationFlatBorderColor
    }
  );
};
function orbitTailwindPreset(options) {
  const { disablePreflight = false } = options || {};
  const tokens = orbitDesignTokens.getTokens(cssVarsFoundation_default);
  const componentTokens = getComponentLevelTokens_default(tokens);
  const sizeTokens = {
    "icon-small": tokens.iconSmallSize,
    "icon-medium": tokens.iconMediumSize,
    "icon-large": tokens.iconLargeSize,
    "form-box-small": tokens.formBoxSmallHeight,
    "form-box-normal": tokens.formBoxNormalHeight,
    "form-box-large": tokens.formBoxLargeHeight,
    "country-flag-small": tokens.countryFlagSmallHeight,
    "country-flag-medium": tokens.countryFlagMediumHeight
  };
  return {
    content: ["auto"],
    presets: [foundation_default(tokens)],
    corePlugins: {
      preflight: !disablePreflight
    },
    theme: {
      extend: {
        fontSize: {
          "heading-display": tokens.headingDisplayFontSize,
          "heading-display-subtitle": tokens.headingDisplaySubtitleFontSize,
          "heading-title0": tokens.headingTitle0FontSize,
          "heading-title1": tokens.headingTitle1FontSize,
          "heading-title2": tokens.headingTitle2FontSize,
          "heading-title3": tokens.headingTitle3FontSize,
          "heading-title4": tokens.headingTitle4FontSize,
          "heading-title5": tokens.headingTitle5FontSize,
          "heading-title6": tokens.headingTitle6FontSize,
          "button-large": tokens.buttonLargeFontSize,
          "button-normal": tokens.buttonNormalFontSize,
          "button-small": tokens.buttonSmallFontSize,
          "form-element-normal": tokens.formElementNormalFontSize,
          "form-element-large": tokens.formElementLargeFontSize
        },
        fontWeight: {
          "heading-display": tokens.headingDisplayFontWeight,
          "heading-display-subtitle": tokens.headingDisplaySubtitleFontWeight,
          "heading-title0": tokens.headingTitle0FontWeight,
          "heading-title1": tokens.headingTitle1FontWeight,
          "heading-title2": tokens.headingTitle2FontWeight,
          "heading-title3": tokens.headingTitle3FontWeight,
          "heading-title4": tokens.headingTitle4FontWeight,
          "heading-title5": tokens.headingTitle5FontWeight,
          "heading-title6": tokens.headingTitle6FontWeight
        },
        lineHeight: {
          none: "1",
          text: tokens.lineHeightText,
          "heading-display": tokens.headingDisplayLineHeight,
          "heading-display-subtitle": tokens.headingDisplaySubtitleLineHeight,
          "heading-title0": tokens.headingTitle0LineHeight,
          "heading-title1": tokens.headingTitle1LineHeight,
          "heading-title2": tokens.headingTitle2LineHeight,
          "heading-title3": tokens.headingTitle3LineHeight,
          "heading-title4": tokens.headingTitle4LineHeight,
          "heading-title5": tokens.headingTitle5LineHeight,
          "heading-title6": tokens.headingTitle6LineHeight
        },
        size: {
          ...sizeTokens
        },
        height: {
          ...sizeTokens
        },
        minHeight: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          "form-box-small": tokens.formBoxSmallHeight,
          "form-box-normal": tokens.formBoxNormalHeight,
          "form-box-large": tokens.formBoxLargeHeight
        },
        maxHeight: {
          "illustration-extra-small": tokens.illustrationExtraSmallHeight,
          "illustration-small": tokens.illustrationSmallHeight,
          "illustration-medium": tokens.illustrationMediumHeight,
          "illustration-large": tokens.illustrationLargeHeight,
          "illustration-display": tokens.illustrationDisplayHeight
        },
        width: {
          ...sizeTokens,
          "country-flag-small": tokens.countryFlagSmallWidth,
          "country-flag-medium": tokens.countryFlagMediumWidth
        },
        minWidth: {
          "icon-small": tokens.iconSmallSize,
          "icon-medium": tokens.iconMediumSize,
          "icon-large": tokens.iconLargeSize,
          "dialog-width": tokens.dialogWidth
        },
        maxWidth: {
          "modal-extra-small": orbitDesignTokens.defaultTokens.modalExtraSmallWidth,
          "modal-small": orbitDesignTokens.defaultTokens.modalSmallWidth,
          "modal-normal": orbitDesignTokens.defaultTokens.modalNormalWidth,
          "modal-large": orbitDesignTokens.defaultTokens.modalLargeWidth,
          "modal-extra-large": orbitDesignTokens.defaultTokens.modalExtraLargeWidth
        },
        padding: {
          ...componentTokens("button", "padding"),
          ...componentTokens("formElement", "padding"),
          table: `${tokens.space300} ${tokens.space400}`,
          "button-padding-xs": tokens.buttonPaddingXSmall,
          "button-padding-sm": tokens.buttonPaddingSmall,
          "button-padding-md": tokens.buttonPaddingNormal,
          "button-padding-lg": tokens.buttonPaddingLarge
        },
        borderRadius: {
          "dialog-desktop": tokens.dialogBorderRadiusDesktop,
          "dialog-mobile": tokens.dialogBorderRadiusMobile,
          "form-box-small": tokens.formBoxSmallHeight,
          "form-box-normal": tokens.formBoxNormalHeight,
          "form-box-large": tokens.formBoxLargeHeight,
          badge: tokens.badgeBorderRadius,
          modal: tokens.modalBorderRadius,
          "100": `var(--border-radius-100, ${tokens.borderRadius100})`
          // Needed because it is customizable in brands
        },
        borderColor: {
          ...Object.keys(tokens).reduce((acc, token) => {
            if (token.startsWith("borderColor")) {
              const name = kebabCase_default(token).replace("border-color-", "");
              return { ...acc, [name]: tokens[token] };
            }
            acc = {
              ...acc,
              ...componentTokens(token, "borderColor")
            };
            return acc;
          }, {}),
          white: tokens.paletteWhite,
          "form-element": tokens.formElementBorderColor,
          "form-element-disabled": tokens.formElementBorderColorDisabled,
          "form-element-hover": tokens.formElementBorderColorHover,
          "form-element-active": tokens.formElementBorderColorActive,
          "form-element-focus": tokens.formElementBorderColorFocus,
          "form-element-error": tokens.formElementBorderColorError,
          "form-element-error-hover": tokens.formElementBorderColorErrorHover
        },
        backgroundImage: {
          // TODO: remove component prefix and left only bundle-*
          "button-bundle-basic-background": tokens.buttonBundleBasicBackground,
          "button-bundle-basic-background-hover": tokens.buttonBundleBasicBackgroundHover,
          "button-bundle-basic-background-active": tokens.buttonBundleBasicBackgroundActive,
          "button-bundle-medium-background": tokens.buttonBundleMediumBackground,
          "button-bundle-medium-background-hover": tokens.buttonBundleMediumBackgroundHover,
          "button-bundle-medium-background-active": tokens.buttonBundleMediumBackgroundActive,
          "button-bundle-top-background": tokens.buttonBundleTopBackground,
          "button-bundle-top-background-hover": tokens.buttonBundleTopBackgroundHover,
          "button-bundle-top-background-active": tokens.buttonBundleTopBackgroundActive,
          "badge-bundle-basic-background": tokens.badgeBundleBasicBackground,
          "badge-bundle-medium-background": tokens.badgeBundleMediumBackground,
          "badge-bundle-top-background": tokens.badgeBundleTopBackground,
          "table-shadow-right": tokens.backgroundTableShadowRight,
          "table-shadow-left": tokens.backgroundTableShadowLeft,
          "tab-bundle-basic-foreground": tokens.tabBundleBasicForeground,
          "tab-bundle-medium-foreground": tokens.tabBundleMediumForeground,
          "tab-bundle-top-foreground": tokens.tabBundleTopForeground
        },
        boxShadow: {
          "button-active": `inset 0 0 6px 3px ${orbitDesignTokens.convertHexToRgba(tokens.paletteInkDark, 15)}`,
          "button-active-pale": `inset 0 0 6px 3px ${orbitDesignTokens.convertHexToRgba(tokens.paletteInkDark, 8)}`,
          "country-flag": tokens.countryFlagShadow,
          "form-element": tokens.formElementBoxShadow,
          "form-element-error": tokens.formElementBoxShadowError,
          "form-element-error-hover": tokens.formElementBoxShadowErrorHover,
          "form-element-hover": tokens.formElementBoxShadowHover,
          "form-element-focus": tokens.formElementFocusBoxShadow,
          switch: `inset 0 0 1px 0 rgba(7, 64, 92, 0.1),${tokens.elevationLevel1BoxShadow}`,
          "modal-scrolled": `inset 0 1px 0 ${tokens.paletteCloudNormal}, ${tokens.elevationFixedReverseBoxShadow}`,
          modal: `inset 0 0 0 transparent, ${tokens.elevationFixedReverseBoxShadow}`,
          "wizard-step-icon-hover": `0 0 0 6px ${orbitDesignTokens.convertHexToRgba(
            tokens.paletteProductNormal,
            20
          )}`,
          "wizard-step-icon-active": `0 0 0 4px ${orbitDesignTokens.convertHexToRgba(
            tokens.paletteProductNormal,
            20
          )}`
        },
        keyframes: {
          "slow-pulse": {
            "0%": { opacity: "1" },
            "50%": { opacity: "0.3" },
            "100%": { opacity: "1" }
          },
          spinner: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" }
          },
          loader: {
            "0%": { opacity: "0.3", transform: "translateY(0px)" },
            "20%": { opacity: "1", transform: "translateY(-3px)" },
            "40%": { opacity: "0.3", transform: "translateY(0px)" },
            "100%": { opacity: "0.3", transform: "translateY(0px)" }
          },
          pulse: {
            "0%": { transform: "scale(1)" },
            "50%": { transform: "scale(2)" },
            "100%": { transform: "scale(1)" }
          },
          "pulse-zero": {
            "0%": { transform: "scale(0.01)" },
            "50%": { transform: "scale(1)" },
            "100%": { transform: "scale(0.01)" }
          },
          "toast-fade-in": {
            "0%": { opacity: "0", transform: "translateY(-20px)" },
            "100%": { opacity: "1", transform: "translateY(0)" }
          },
          "toast-fade-out": {
            "0%": { opacity: "1", transform: "translateY(0)" },
            "100%": { opacity: "0", transform: "translateY(-20px)" }
          },
          "toast-light": {
            "0%": { transform: "translateX(-100%)" },
            "100%": { transform: "translateX(0%)" }
          },
          "toast-light-rtl": {
            "0%": { transform: "translateX(100%)" },
            "100%": { transform: "translateX(0%)" }
          }
        },
        animation: {
          "pulse-slow": "slow-pulse 2s ease-in-out 0.5s infinite",
          spinner: "spinner 0.75s linear infinite",
          loader: "loader 1.25s infinite ease-in-out",
          pulse: "pulse 1.5s infinite"
        },
        textColor: {
          ...Object.entries(getForegroundColors(tokens)).reduce((acc, [key, value]) => {
            const name = key.replace("text-", "");
            return { ...acc, [name]: value };
          }, {}),
          // overrides for specific WL
          "button-primary-foreground": generateRgba(
            "button-primary-foreground",
            orbitDesignTokens.defaultTokens.buttonPrimaryForeground
          ),
          "button-primary-foreground-hover": generateRgba(
            "button-primary-foreground-hover",
            orbitDesignTokens.defaultTokens.buttonPrimaryForegroundHover
          ),
          "button-primary-foreground-active": generateRgba(
            "button-primary-foreground-active",
            orbitDesignTokens.defaultTokens.buttonPrimaryForegroundActive
          ),
          "button-primary-subtle-foreground": generateRgba(
            "button-primary-subtle-foreground",
            orbitDesignTokens.defaultTokens.buttonPrimarySubtleForeground
          ),
          "button-primary-subtle-foreground-hover": generateRgba(
            "button-primary-subtle-foreground-hover",
            orbitDesignTokens.defaultTokens.buttonPrimarySubtleForegroundHover
          ),
          "button-primary-subtle-foreground-active": generateRgba(
            "button-primary-subtle-foreground-active",
            orbitDesignTokens.defaultTokens.buttonPrimarySubtleForegroundActive
          )
        },
        backgroundColor: {
          ...getBackgroundColors(tokens),
          // overrides for specific WL
          "button-primary-background": generateRgba(
            "button-primary-background",
            orbitDesignTokens.defaultTokens.buttonPrimaryBackground
          ),
          "button-primary-background-hover": generateRgba(
            "button-primary-background-hover",
            orbitDesignTokens.defaultTokens.buttonPrimaryBackgroundHover
          ),
          "button-primary-background-active": generateRgba(
            "button-primary-background-active",
            orbitDesignTokens.defaultTokens.buttonPrimaryBackgroundActive
          )
        },
        spacing: {
          "safe-top": "var(--safe-area-inset-top, env(safe-area-inset-top))",
          "safe-right": "var(--safe-area-inset-right, env(safe-area-inset-right))",
          "safe-bottom": "var(--safe-area-inset-bottom, env(safe-area-inset-bottom))",
          "safe-left": "var(--safe-area-inset-left, env(safe-area-inset-left))"
        }
      }
    },
    plugins: [
      plugin__default.default(({ addVariant, addUtilities }) => {
        return addVariant("not-last", "&:not(:last-child)"), addVariant("not-first", "&:not(:first-child)"), addVariant("type-even", "&:nth-of-type(even)"), addVariant("type-odd", "&:nth-of-type(odd)"), addVariant("target-blank", "&[target='_blank']"), addUtilities({
          ".scrollbar-none": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          ".tap-color-none": {
            "-webkit-tap-highlight-color": "transparent",
            "-webkit-touch-callout": "none"
          }
        });
      })
    ]
  };
}

module.exports = orbitTailwindPreset;
