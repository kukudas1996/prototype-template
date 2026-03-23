import { useState, useEffect, useRef } from 'react'

const styles = {
  wrapper: {
    position: 'relative',
    width: '100%',
    minWidth: 200,
  },
  field: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    padding: '0 16px',
    borderRadius: 10,
    border: '1px solid #EBEDF2',
    backgroundColor: 'var(--semantic-bg-normal)',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-body1-size)',
    lineHeight: '24px',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
  },
  label: {
    color: '#8A92A1',
  },
  labelFilled: {
    color: 'var(--semantic-label-normal)',
  },
  labelDisabled: {
    color: '#C1C8D6',
  },
  dropdown: {
    position: 'absolute',
    top: 52,
    left: 0,
    right: 0,
    backgroundColor: 'var(--semantic-bg-normal)',
    border: '1px solid #EBEDF2',
    borderRadius: 10,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
    zIndex: 10,
    overflow: 'hidden',
  },
  option: {
    padding: '12px 16px',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-body1-size)',
    lineHeight: '24px',
    color: 'var(--semantic-label-normal)',
    cursor: 'pointer',
  },
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

  const fieldStyle = {
    ...styles.field,
    ...(open ? { borderColor: 'var(--color-primary-500)' } : {}),
    ...(disabled ? { backgroundColor: '#F5F6FA', borderColor: '#EBEDF2', cursor: 'not-allowed' } : {}),
  }

  const labelStyle = disabled
    ? styles.labelDisabled
    : selected
      ? styles.labelFilled
      : styles.label

  return (
    <div style={styles.wrapper} ref={ref}>
      <div
        style={fieldStyle}
        onClick={() => { if (!disabled) setOpen(!open) }}
      >
        <span style={labelStyle}>{selected ? selected.label : placeholder}</span>
        <Chevron up={open} />
      </div>
      {open && (
        <div style={styles.dropdown}>
          {options.map((opt) => (
            <div
              key={opt.value}
              style={{
                ...styles.option,
                ...(opt.value === value ? { color: 'var(--color-primary-500)', fontWeight: 'var(--font-weight-bold)' } : {}),
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
