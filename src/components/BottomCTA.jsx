import Button from './Button'

const styles = {
  spacer: {
    height: 104,
  },
  wrapper: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'var(--semantic-bg-normal)',
    zIndex: 100,
  },
  buttonArea: {
    display: 'flex',
    gap: 8,
    padding: '16px 24px 24px',
  },
}

export default function BottomCTA({
  primaryLabel = '확인',
  secondaryLabel = '취소',
  onPrimaryClick,
  onSecondaryClick,
  primaryDisabled = false,
  dual = false,
}) {
  return (
    <>
    <div style={styles.spacer} />
    <div style={styles.wrapper}>
      <div style={styles.buttonArea}>
        {dual && (
          <Button
            variant="tertiary"
            size="xl"
            onClick={onSecondaryClick}
          >
            {secondaryLabel}
          </Button>
        )}
        <Button
          variant="primary"
          size="xl"
          disabled={primaryDisabled}
          onClick={onPrimaryClick}
        >
          {primaryLabel}
        </Button>
      </div>
    </div>
    </>
  )
}
