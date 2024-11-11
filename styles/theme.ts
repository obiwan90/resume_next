export const darkTheme = {
    colors: {
        primary: '#818cf8',
        secondary: '#64748b',
        background: '#0f172a',
        card: '#1e293b',
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
            muted: '#64748b',
        },
        border: '#334155',
        state: {
            hover: '#1e293b',
            focus: '#2d3748',
            active: '#374151',
        },
        functional: {
            success: '#22c55e',
            warning: '#f59e0b',
            error: '#ef4444',
            info: '#3b82f6',
        },
        gradient: {
            primary: 'linear-gradient(135deg, #818cf8 0%, #6366f1 100%)',
            secondary: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
        }
    },
    borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
    },
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.3), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
    },
    typography: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
    },
    transition: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
        timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    zIndex: {
        base: 0,
        dropdown: 1000,
        sticky: 1100,
        modal: 1300,
        popover: 1400,
        tooltip: 1500,
    }
}

export const lightTheme = {
    colors: {
        primary: '#4F46E5',
        secondary: '#94A3B8',
        background: '#FFFFFF',
        card: '#F8FAFC',
        text: {
            primary: '#1E293B',
            secondary: '#64748B',
            muted: '#94A3B8',
        },
        border: '#E2E8F0',
        state: {
            hover: '#F1F5F9',
            focus: '#EEF2FF',
            active: '#E0E7FF',
        },
        functional: {
            success: '#22C55E',
            warning: '#F59E0B',
            error: '#EF4444',
            info: '#3B82F6',
        },
        gradient: {
            primary: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
            secondary: 'linear-gradient(135deg, #94A3B8 0%, #CBD5E1 100%)',
        }
    },
    borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
    },
    shadows: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
    typography: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
    },
    fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
    },
    transition: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
        timing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    zIndex: {
        base: 0,
        dropdown: 1000,
        sticky: 1100,
        modal: 1300,
        popover: 1400,
        tooltip: 1500,
    }
}

export type Theme = typeof darkTheme; 