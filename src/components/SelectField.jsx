import { useState, useEffect, useRef } from 'react'

const baseField = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 48,
  padding: '0 16px',
  borderRadius: 10,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: '#E1E4EB',
  backgroundColor: 'var(--semantic-bg-normal)',
  fontFamily: 'var(--font-family)',
  fontSize: 'var(--font-body1-size)',
  lineHeight: '24px',
  cursor: 'pointer',
  width: '100%',
  boxSizing: 'border-box',
  outline: 0,
  outlineStyle: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',
  WebkitTapHighlightColor: 'transparent',
  userSelect: 'none',
}

function Chevron({ up }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
      style={{ transform: up ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
    >
      <path d="M1 1L5 5L9 1" stroke="#8A92A1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SelectField({
  placeholder = '선택해주세요',
  options = [],
  value,
  onChange,
  disabled = false,
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    if (!open) return
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', handleClick)
    return () => document.removeEventListener('pointerdown', handleClick)
  }, [open])

  let borderColor = '#E1E4EB'
  if (open) borderColor = 'var(--color-primary-500)'
  if (disabled) borderColor = '#E1E4EB'

  const fieldStyle = {
    ...baseField,
    borderColor,
    ...(disabled ? { backgroundColor: '#F5F6FA', cursor: 'not-allowed' } : {}),
  }

  const labelColor = disabled
    ? '#C1C8D6'
    : selected
      ? 'var(--semantic-label-normal)'
      : '#8A92A1'

  return (
    <div style={{ position: 'relative', width: '100%' }} ref={ref}>
      <div
        role="button"
        tabIndex={-1}
        style={fieldStyle}
        onClick={() => { if (!disabled) setOpen(!open) }}
      >
        <span style={{ color: labelColor }}>{selected ? selected.label : placeholder}</span>
        <Chevron up={open} />
      </div>
      {open && (
        <div style={{
          position: 'absolute',
          top: 52,
          left: 0,
          right: 0,
          backgroundColor: 'var(--semantic-bg-normal)',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: '#E1E4EB',
          borderRadius: 10,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
          zIndex: 10,
          overflow: 'hidden',
        }}>
          {options.map((opt) => (
            <div
              key={opt.value}
              style={{
                padding: '12px 16px',
                fontFamily: 'var(--font-family)',
                fontSize: 'var(--font-body1-size)',
                lineHeight: '24px',
                color: opt.value === value ? 'var(--color-primary-500)' : 'var(--semantic-label-normal)',
                fontWeight: opt.value === value ? 'var(--font-weight-bold)' : 'normal',
                cursor: 'pointer',
              }}
              onClick={() => { onChange?.(opt.value); setOpen(false) }}
              onPointerEnter={(e) => e.currentTarget.style.backgroundColor = '#F5F6FA'}
              onPointerLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
