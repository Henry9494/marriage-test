import { useState } from "react";
import accountBg from "../../assets/account-bg.webp";
import { Spacing } from "../Spacing";
import { useScale } from "../../context/ScaleContext";
import { valueWithRatio } from "../../utils";
import { MAX_WIDTH } from "../../constants";
import { AccountCard } from "../AccountCard";
import type { AccountEntry } from "../AccountCard";
import { ContactModal } from "../ContactModal";

const GROOM_ACCOUNTS: AccountEntry[] = [
  {
    name: "김제형",
    bank: "국민은행",
    account: "123-1234-1234-12",
    value: 12341234123412,
  },
  {
    name: "김제형",
    bank: "국민은행",
    account: "123-1234-1234-12",
    value: 12341234123412,
  },
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            fontFamily: "var(--font-display)",
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
            fontFamily: "var(--font-sans)",
          }}
        >
          참석이 어려우신 분들을 위해 기재했습니다
          <br />
          너그러운 마음으로 양해 부탁드립니다
        </div>
      </div>

      <Spacing height={16} />

      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          width: "100%",
          padding: 10,
          borderRadius: 4,
          background: "linear-gradient(90deg, #24CCC9 0%, #00B9B5 100%)",
          color: "#fff",
          fontFamily: "var(--font-sans)",
          fontSize: 16,
          fontWeight: 700,
          textAlign: "center",
          lineHeight: "normal",
          border: "none",
          cursor: "pointer",
        }}
      >
        축하 연락하기
      </button>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Spacing height={32} />

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
