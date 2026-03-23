import { useState } from 'react'
import AppBar from '../../components/AppBar'
import TextField from '../../components/TextField'
import SelectField from '../../components/SelectField'
import BottomCTA from '../../components/BottomCTA'
import Modal from '../../components/Modal'

const banks = [
  { value: 'kb', label: '국민은행' },
  { value: 'shinhan', label: '신한은행' },
  { value: 'woori', label: '우리은행' },
  { value: 'hana', label: '하나은행' },
]

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

export default function V1() {
  const [name, setName] = useState('')
  const [account, setAccount] = useState('')
  const [bank, setBank] = useState('')
  const [showModal, setShowModal] = useState(false)

  const isValid = name && account && bank

  return (
    <div style={styles.page} onPointerDown={(e) => {
      if (e.target.tagName !== 'INPUT') document.activeElement?.blur()
    }}>
      <AppBar title="송금하기" onBack={() => alert('뒤로가기')} />

      <div style={styles.content}>
        <div style={styles.section}>
          <p style={styles.label}>받는 분</p>
          <TextField
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={setName}
          />
        </div>

        <div style={styles.section}>
          <p style={styles.label}>은행</p>
          <SelectField
            placeholder="은행을 선택해주세요"
            options={banks}
            value={bank}
            onChange={setBank}
          />
        </div>

        <div style={styles.section}>
          <p style={styles.label}>계좌번호</p>
          <TextField
            placeholder="계좌번호를 입력해주세요"
            value={account}
            onChange={setAccount}
          />
        </div>
      </div>

      <BottomCTA
        primaryLabel="다음"
        primaryDisabled={!isValid}
        onPrimaryClick={() => setShowModal(true)}
      />

      {showModal && (
        <Modal
          title="송금 확인"
          body={`${banks.find(b => b.value === bank)?.label} ${account}\n${name}님에게 송금하시겠습니까?`}
          primaryLabel="송금"
          secondaryLabel="취소"
          onPrimary={() => { setShowModal(false); alert('송금 완료!') }}
          onSecondary={() => setShowModal(false)}
          onOverlayClick={() => setShowModal(false)}
        />
      )}
    </div>
  )
}
