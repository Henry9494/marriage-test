import { Spacing } from "./Spacing";

export interface AccountEntry {
  name: string;
  bank: string;
  account: string;
  value: number;
}

export function AccountCard({
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
