module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e5631',
        'primary-light': '#3a7d4d',
        'primary-dark': '#0d3f1f',
        'accent': '#fbbf24',
        'accent-light': '#fcd34d',
        'secondary': '#4338ca',
        'secondary-light': '#6366f1',
        'light-bg': '#fff8e1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 90% 70%, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-slower': 'float 14s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.3s forwards',
        'fade-in-delay-long': 'fadeIn 0.8s ease-out 0.6s forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-very-slow': 'pulse 7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 12s linear infinite reverse',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'tilt': 'tilt 10s infinite linear',
        'morph': 'morph 8s ease-in-out infinite',
        'bounce-mild': 'bounceMild 2s infinite',
        'shimmer': 'shimmer 2s infinite',
        'flip': 'flip 2s ease-in-out infinite',
        'slide-up-fade': 'slideUpFade 0.8s ease-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-out forwards',
        'slide-bottom': 'slideBottom 1.2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
        },
        bounceMild: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        flip: {
          '0%, 100%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(180deg)' },
        },
        slideUpFade: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        slideBottom: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'highlight': '0 0 15px rgba(251, 191, 36, 0.4)',
        'neon': '0 0 10px rgba(30, 86, 49, 0.6)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'button': '0 5px 15px rgba(0, 0, 0, 0.1)',
        'inner-light': 'inset 0 0 10px rgba(255, 255, 255, 0.5)',
        'glow': '0 0 15px rgba(251, 191, 36, 0.7)',
        'float': '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
        'hover': '0 15px 30px -10px rgba(0, 0, 0, 0.2)',
        'inner-glow': 'inset 0 0 10px rgba(251, 191, 36, 0.5)',
      },
    },
  },
  plugins: [],
}