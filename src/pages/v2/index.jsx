import { useState } from 'react'
import AppBar from '../../components/AppBar'
import TextField from '../../components/TextField'
import BottomCTA from '../../components/BottomCTA'
import Modal from '../../components/Modal'

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: 'var(--semantic-bg-normal)',
  },
  content: {
    padding: '24px 16px 0',
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 12,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'var(--semantic-fill-strong)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-title2-size)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--semantic-label-alternative)',
  },
  avatarButton: {
    background: 'none',
    border: 'none',
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-label1-size)',
    color: 'var(--semantic-primary-normal)',
    fontWeight: 'var(--font-weight-medium)',
    cursor: 'pointer',
    padding: 0,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  label: {
    fontFamily: 'var(--font-family)',
    fontSize: 'var(--font-label1-size)',
    fontWeight: 'var(--font-weight-bold)',
    lineHeight: '20px',
    color: 'var(--semantic-label-normal)',
    margin: 0,
  },
}

export default function V2() {
  const [nickname, setNickname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [showModal, setShowModal] = useState(false)

  const isValid = nickname && phone

  const initial = nickname ? nickname[0].toUpperCase() : '?'

  return (
    <div style={styles.page} onPointerDown={(e) => {
      if (e.target.tagName !== 'INPUT') document.activeElement?.blur()
    }}>
      <AppBar title="프로필 설정" onBack={() => alert('뒤로가기')} />

      <div style={styles.content}>
        <div style={styles.avatar}>
          <div style={styles.avatarCircle}>{initial}</div>
          <button style={styles.avatarButton} onClick={() => alert('사진 변경')}>
            사진 변경
          </button>
        </div>

        <div style={styles.section}>
          <p style={styles.label}>닉네임</p>
          <TextField
            placeholder="닉네임을 입력해주세요"
            value={nickname}
            onChange={setNickname}
          />
        </div>

        <div style={styles.section}>
          <p style={styles.label}>전화번호</p>
          <TextField
            placeholder="전화번호를 입력해주세요"
            value={phone}
            onChange={setPhone}
          />
        </div>

        <div style={styles.section}>
          <p style={styles.label}>이메일 (선택)</p>
          <TextField
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={setEmail}
          />
        </div>
      </div>

      <BottomCTA
        primaryLabel="저장"
        primaryDisabled={!isValid}
        onPrimaryClick={() => setShowModal(true)}
      />

      {showModal && (
        <Modal
          title="프로필 저장"
          body="프로필을 저장하시겠습니까?"
          primaryLabel="저장"
          secondaryLabel="취소"
          onPrimary={() => { setShowModal(false); alert('저장 완료!') }}
          onSecondary={() => setShowModal(false)}
          onOverlayClick={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
