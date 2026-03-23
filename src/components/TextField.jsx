import { useState, useRef } from 'react'

const baseStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  height: 48,
  padding: '0 12px',
  borderRadius: 10,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#E1E4EB',
  backgroundColor: 'var(--semantic-bg-normal)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--font-body1-size)',
  lineHeight: '24px',
  color: 'var(--semantic-label-normal)',
  outline: 0,
  outlineWidth: 0,
  outlineStyle: 'none',
  boxShadow: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

export default function TextField({
  placeholder = 'Text',
  value,
  onChange,
  helperText,
  error = false,
  disabled = false,
  style,
}) {
  const [focused, setFocused] = useState(false)
  const ref = useRef(null)

  let borderColor = '#E1E4EB'
  if (error) borderColor = '#F76868'
  else if (focused) borderColor = 'var(--color-primary-500)'

  const fieldStyle = {
    ...baseStyle,
    borderColor,
    ...(disabled ? { backgroundColor: '#F5F6FA', borderColor: '#E1E4EB', color: '#C1C8D6' } : {}),
    ...style,
  }

  // 포커스 시 인라인으로 outline 강제 제거
  const handleFocus = () => {
    setFocused(true)
    if (ref.current) {
      ref.current.style.outline = 'none'
      ref.current.style.boxShadow = 'none'
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%' }}>
      <input
        ref={ref}
        style={fieldStyle}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={handleFocus}
        onBlur={() => setFocused(false)}
        disabled={disabled}
      />
      {helperText && (
        <p style={{
          fontFamily: 'var(--font-family)',
          fontSize: 'var(--font-label1-size)',
          fontWeight: 'var(--font-weight-medium)',
          lineHeight: '20px',
          color: error ? '#F76868' : 'var(--semantic-label-normal)',
          margin: 0,
        }}>
          {helperText}
        </p>
      )}
    </div>
  )
}
