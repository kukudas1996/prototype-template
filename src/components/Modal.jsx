import Button from './Button'

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 200,
  },
  modal: {
    width: 300,
    backgroundColor: 'var(--semantic-bg-normal)',
    borderRadius: 16,
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05), 0px 0px 7px rgba(0, 0, 0, 0.07)',
    overflow: 'hidden',
  },
  title: {
    padding: '24px 24px 0',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-headline1-size)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: '26px',
    color: 'var(--semantic-label-normal)',
    margin: 0,
  },
  body: {
    padding: '16px 24px 24px',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-body1-size)',
    fontWeight: 'var(--font-weight-medium)',
    lineHeight: '24px',
    color: '#373B47',
    margin: 0,
  },
  bodyNoTitle: {
    padding: '24px',
  },
  footer: {
    display: 'flex',
    gap: 8,
    padding: '0 24px 24px',
  },
}

export default function Modal({
  title,
  body,
  primaryLabel = '확인',
  secondaryLabel,
  onPrimary,
  onSecondary,
  onOverlayClick,
}) {
  return (
    <div style={styles.overlay} onClick={onOverlayClick}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {title && <p style={styles.title}>{title}</p>}
        {body && (
          <p style={{ ...styles.body, ...(title ? {} : styles.bodyNoTitle) }}>
            {body}
          </p>
        )}
        <div style={styles.footer}>
          {secondaryLabel && (
            <Button variant="tertiary" size="large" onClick={onSecondary}>
              {secondaryLabel}
            </Button>
          )}
          <Button variant="primary" size="large" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}
