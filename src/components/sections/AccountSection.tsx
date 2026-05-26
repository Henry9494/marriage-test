import accountBg from "../../assets/account-bg.webp";
import { Spacing } from "../Spacing";
import { useScale } from "../../context/ScaleContext";
import { valueWithRatio } from "../../utils";
import { MAX_WIDTH } from "../../constants";

interface AccountEntry {
  name: string;
  bank: string;
  account: string;
  value: number;
}

const GROOM_ACCOUNTS: AccountEntry[] = [
  {
    name: "김제형",
    bank: "국민은행",
    account: "123-1234-1234-12",
    value: 12341234123412,
  },
];

const BRIDE_ACCOUNTS: AccountEntry[] = [
  {
    name: "김민아",
    bank: "국민",
    account: "487102-01-249656",
    value: 48710201249656,
  },
  { name: "김의진", bank: "SC", account: "250-20 -285480", value: 25020285480 },
  {
    name: "김인숙",
    bank: "국민",
    account: "354-21-0223-114",
    value: 354210223114,
  },
];

export default function AccountSection() {
  const scale = useScale();

  return (
    <section
      style={{
        aspectRatio: `${MAX_WIDTH} / 975`,
        position: "relative",
        backgroundImage: `url(${accountBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: `0 ${valueWithRatio(45, scale)}px`,
      }}
    >
      <Spacing height={64} />

      <div>
        <div
          style={{
            fontWeight: 700,
            fontSize: 16,
            color: "#00a8a6",
            textAlign: "center",
          }}
        >
          마음전하실곳
        </div>

        <Spacing height={8} />

        <div
          style={{
            fontWeight: 500,
            fontSize: 12,
            color: "#1e1e1e",
            opacity: 0.5,
            lineHeight: "normal",
            textAlign: "center",
          }}
        >
          참석이 어려우신 분들을 위해 기재했습니다
          <br />
          너그러운 마음으로 양해 부탁드립니다
        </div>
      </div>

      <Spacing height={18} />

      <AccountCard title="신랑측 계좌번호" accounts={GROOM_ACCOUNTS} />

      <Spacing height={17} />

      <AccountCard title="신부측 계좌번호" accounts={BRIDE_ACCOUNTS} />

      <Spacing height={48} />

      <div
        style={{
          color: "#000",
          textAlign: "center",
          fontFamily: "SUIT",
          fontSize: 11,
          fontWeight: 600,
          lineHeight: "normal",
          opacity: 0.6,
        }}
      >
        ps. 제형이랑 사진찍기 정말 힘들었습니다..
        <br />
        웃음을 못멈춰서..
      </div>
    </section>
  );
}

function AccountCard({
  title,
  accounts,
}: {
  title: string;
  accounts: AccountEntry[];
}) {
  return (
    <div
      style={{
        background: "#fafafa",
        borderRadius: 4,
        padding: 16,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 400,
          fontSize: 13,
        }}
      >
        {title}
      </div>

      <Spacing height={16} />

      {accounts.map((acc, i) => (
        <div key={i}>
          {i > 0 && (
            <>
              <Spacing height={16} />
              <div
                style={{
                  height: "1px",
                  background: "#e7e7e7",
                }}
              />
              <Spacing height={16} />
            </>
          )}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "13px",
                }}
              >
                {acc.name}
              </div>

              <Spacing height={6} />

              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "13px",
                }}
              >
                {acc.bank} {acc.account}
              </div>
            </div>

            <CopyButton value={acc.value} />
          </div>
        </div>
      ))}
    </div>
  );
}

function CopyButton({ value }: { value: number }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value.toString());
    } catch {
      const el = document.createElement("input");
      el.value = value.toString();
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        width: "max-content",
        background: "#fff",
        border: "1px solid #e7e7e7",
        borderRadius: "4px",
        padding: "6px 10px",
        fontFamily: "var(--font-sans)",
        fontWeight: 400,
        fontSize: "12px",
        cursor: "pointer",
      }}
    >
      복사하기
    </button>
  );
}
