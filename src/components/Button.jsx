const variantStyles = {
  primary: {
    background: 'var(--color-primary-500)',
    color: 'var(--semantic-static-white)',
    activeBackground: 'var(--color-primary-400)',
  },
  secondary: {
    background: 'var(--color-primary-050)',
    color: 'var(--color-primary-500)',
    activeBackground: 'var(--color-primary-200)',
  },
  tertiary: {
    background: '#EBEDF2',
    color: '#373B47',
    activeBackground: '#E1E4EB',
  },
}

const sizeStyles = {
  xl: {
    height: 56,
    padding: '0 24px',
    fontSize: 16,
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: '24px',
  },
  large: {
    height: 48,
    padding: '0 16px',
    fontSize: 16,
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '24px',
  },
}

const disabledStyle = {
  background: '#F5F6FA',
  color: '#C1C8D6',
  cursor: 'not-allowed',
}

export default function Button({
  children = 'Button',
  variant = 'primary',
  size = 'xl',
  disabled = false,
  onClick,
  style: customStyle,
}) {
  const v = variantStyles[variant]
  const s = sizeStyles[size]

  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: 100,
    height: s.height,
    padding: s.padding,
    borderRadius: 10,
    border: 'none',
    fontFamily: 'var(--font-family)',
    fontSize: s.fontSize,
    fontWeight: s.fontWeight,
    lineHeight: s.lineHeight,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'background 0.15s',
    ...(disabled ? disabledStyle : { background: v.background, color: v.color }),
    ...customStyle,
  }

  return (
    <button
      style={baseStyle}
      disabled={disabled}
      onClick={onClick}
      onPointerDown={(e) => {
        if (!disabled) e.currentTarget.style.background = v.activeBackground
      }}
      onPointerUp={(e) => {
        if (!disabled) e.currentTarget.style.background = v.background
      }}
      onPointerLeave={(e) => {
        if (!disabled) e.currentTarget.style.background = v.background
      }}
    >
      {children}
    </button>
  )
}
