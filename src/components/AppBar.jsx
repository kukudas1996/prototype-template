const styles = {
  wrapper: {
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 100,
    backgroundColor: 'var(--semantic-bg-normal)',
  },
  bar: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    padding: '0 16px',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    flexShrink: 0,
  },
  title: {
    flex: 1,
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-headline1-size)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '26px',
    color: 'var(--semantic-label-normal)',
    textAlign: 'center',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 0,
  },
  rightSlot: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
}

function BackArrow() {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
      <path
        d="M9 1L1 9L9 17"
        stroke="var(--semantic-label-normal)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function AppBar({ title = '', onBack, right }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.bar}>
        <button style={styles.backButton} onClick={onBack}>
          <BackArrow />
        </button>
        <p style={styles.title}>{title}</p>
        <div style={styles.rightSlot}>
          {right || null}
        </div>
      </div>
    </div>
  )
}
