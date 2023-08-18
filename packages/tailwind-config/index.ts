import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  darkMode: ['class'],
  content: ['src/**/*.{js,ts,jsx,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    screens: {
      _1921: '1921px',
    },

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    colors: {
      wigPageBackground: 'var(--wig-page-background)',
      wigNavBackground: 'var(--wig-nav-background)',
      divider: 'var(--divider)',
      hoverOverlay: 'var(--hover-overlay)',
      primaryDeemphasizedButtonBackground:
        'var(--primary-deemphasized-button-background)',
      secondaryIcon: 'var(--secondary-icon)',
      primaryButtonBackground: 'var(--primary-button-background)',
      tooltipBackground: 'var(--tooltip-background)',
      tooltipBackground_dark: 'var(--tooltip-background-dark)',

      primaryText: 'var(--primary-text)',
      primaryText_dark: 'var(--primary-text-dark)',

      toastBackground: 'var(--toast-background)',
      toastText: 'var(--toast-text)',
      toastTextLink: 'var(--toast-text-link)',
    },

    extend: {
      transitionDuration: {
        fdsDurationExtraExtraShortIn:
          'var(--fds-duration-extra-extra-short-in)',
        fdsDurationExtraExtraShortOut:
          'var(--fds-duration-extra-extra-short-out)',
        fdsDurationExtraShortIn: 'var(--fds-duration-extra-short-in)',
        fdsDurationExtraShortOut: 'var(--fds-duration-extra-short-out)',
        fdsDurationShortIn: 'var(--fds-duration-short-in)',
        fdsDurationShortOut: 'var(--fds-duration-short-out)',
        fdsDurationMediumIn: 'var(--fds-duration-medium-in)',
        fdsDurationMediumOut: 'var(--fds-duration-medium-out)',
        fdsDurationLongIn: 'var(--fds-duration-long-in)',
        fdsDurationLongOut: 'var(--fds-duration-long-out)',
        fdsDurationExtraLongIn: 'var(--fds-duration-extra-long-in)',
        fdsDurationExtraLongOut: 'var(--fds-duration-extra-long-out)',
        fdsDurationNone: 'var(--fds-duration-none)',
        fdsFast: 'var(--fds-fast)',
        fdsSlow: 'var(--fds-slow)',
      },

      transitionTimingFunction: {
        fdsAnimationEnterExitIn: 'var(--fds-animation-enter-exit-in)',
        fdsAnimationEnterExitOut: 'var(--fds-animation-enter-exit-out)',
        fdsAnimationSwapShuffleIn: 'var(--fds-animation-swap-shuffle-in)',
        fdsAnimationSwapShuffleOut: 'var(--fds-animation-swap-shuffle-out)',
        fdsAnimationMoveIn: 'var(--fds-animation-move-in)',
        fdsAnimationMoveOut: 'var(--fds-animation-move-out)',
        fdsAnimationExpandCollapseIn: 'var(--fds-animation-expand-collapse-in)',
        fdsAnimationExpandCollapseOut:
          'var(--fds-animation-expand-collapse-out)',
        fdsAnimationPassiveMoveIn: 'var(--fds-animation-passive-move-in)',
        fdsAnimationPassiveMoveOut: 'var(--fds-animation-passive-move-out)',
        fdsAnimationQuickMoveIn: 'var(--fds-animation-quick-move-in)',
        fdsAnimationQuickMoveOut: 'var(--fds-animation-quick-move-out)',
        fdsAnimationFadeIn: 'var(--fds-animation-fade-in)',
        fdsAnimationFadeOut: 'var(--fds-animation-fade-out)',
      },

      colors: {
        // shad
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      boxShadow: {
        tooltipBoxShadow: 'var(--tooltip-box-shadow)',
      },

      padding: {
        toastContainerPaddingHorizontal:
          'var(--toast-container-padding-horizontal)',
        toastContainerPaddingVertical:
          'var(--toast-container-padding-vertical)',

        toastAddonPaddingHorizontal: 'var(--toast-addon-padding-horizontal)',
        toastAddonPaddingVertical: 'var(--toast-addon-padding-vertical)',
      },

      maxWidth: {
        toastContainerMaxWidth: 'var(--toast-container-max-width)',
      },

      minWidth: {
        toastContainerMinWidth: 'var(--toast-container-min-width)',
      },

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
        //
        toastCornerRadius: 'var(--toast-corner-radius)',
        tooltipCornerRadius: 'var(--tooltip-corner-radius)',
      },

      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
