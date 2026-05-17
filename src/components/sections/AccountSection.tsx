import { useState } from 'react'

interface AccountEntry {
  name: string
  bank: string
  account: string
}

const GROOM_ACCOUNTS: AccountEntry[] = [
  { name: '김제형', bank: '국민은행', account: '123-1234-1234-12' },
  { name: '김상욱', bank: '국민은행', account: '123-1234-1234-12' },
  { name: '이미자', bank: '국민은행', account: '123-1234-1234-12' },
]

const BRIDE_ACCOUNTS: AccountEntry[] = [
  { name: '김민아', bank: '국민은행', account: '123-1234-1234-12' },
  { name: '김의진', bank: '국민은행', account: '123-1234-1234-12' },
  { name: '김인숙', bank: '국민은행', account: '123-1234-1234-12' },
]

export default function AccountSection() {
  return (
    <section
      style={{
        background: 'linear-gradient(to bottom, #e6d9cc, #e5d9cd)',
        padding: '64px 0 56px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      {/* 제목 */}
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            color: '#00a8a6',
            margin: 0,
          }}
        >
          마음전하실곳
        </p>
        <p
          style={{
            fontFamily: '"SUIT Variable", sans-serif',
            fontWeight: 500,
            fontSize: '12px',
            color: '#1e1e1e',
            opacity: 0.5,
            margin: '8px 0 0',
            lineHeight: 1.5,
          }}
        >
          참석이 어려우신 분들을 위해 기재했습니다
          <br />
          너그러운 마음으로 양해 부탁드립니다
        </p>
      </div>

      <AccountCard title="신랑측 계좌번호" accounts={GROOM_ACCOUNTS} />
      <AccountCard title="신부측 계좌번호" accounts={BRIDE_ACCOUNTS} />
    </section>
  )
}

function AccountCard({ title, accounts }: { title: string; accounts: AccountEntry[] }) {
  return (
    <div
      style={{
        width: '300px',
        background: '#fafafa',
        border: '1px solid #e7e7e7',
        borderRadius: '4px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <p
        style={{
          fontFamily: '"SUIT Variable", sans-serif',
          fontWeight: 400,
          fontSize: '13px',
          color: '#000',
          margin: 0,
        }}
      >
        {title}
      </p>

      {accounts.map((acc, i) => (
        <div key={i}>
          {i > 0 && (
            <div style={{ height: '1px', background: '#e7e7e7', marginBottom: '16px' }} />
          )}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  fontFamily: '"SUIT Variable", sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  color: '#000',
                  margin: '0 0 6px',
                }}
              >
                {acc.name}
              </p>
              <p
                style={{
                  fontFamily: '"SUIT Variable", sans-serif',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#000',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {acc.bank} {acc.account}
              </p>
            </div>
            <CopyButton text={acc.account} />
          </div>
        </div>
      ))}
    </div>
  )
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const el = document.createElement('input')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        flexShrink: 0,
        background: '#fff',
        border: '1px solid #e7e7e7',
        borderRadius: '4px',
        padding: '6px 10px',
        fontFamily: '"SUIT Variable", sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        color: copied ? '#00a8a6' : '#000',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s',
      }}
    >
      {copied ? '복사됨!' : '복사하기'}
    </button>
  )
}
