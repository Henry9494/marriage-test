import { AnimatePresence, motion } from "motion/react";
import { Spacing } from "./Spacing";
import { MAX_WIDTH } from "../constants";
import { RemoveScroll } from "react-remove-scroll";

interface ContactEntry {
  label: string;
  phone: string;
}

const GROOM_CONTACTS: ContactEntry[] = [
  { label: "신랑 김제형 전화하기", phone: "010-2976-6446" },
  { label: "아버지 김상욱 전화하기", phone: "010-7289-8202" },
  { label: "어머니 이미자 전화하기", phone: "010-3080-5152" },
];

const BRIDE_CONTACTS: ContactEntry[] = [
  { label: "신부 김민아 전화하기", phone: "010-2395-3854" },
  { label: "아버지 김의진 전화하기", phone: "010-9030-3854" },
  { label: "어머니 김인숙 전화하기", phone: "010-9275-3854" },
];

export function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll>
          <motion.div
            key="contact-modal-overlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.5)",
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              style={{
                width: "100%",
                maxWidth: MAX_WIDTH,
                height: "100dvh",
                maxHeight: 1200,
                background: "#fff",
                overflowY: "auto",
                padding: "0px 20px 28px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ flex: 1 }} />

              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#000",
                  lineHeight: "normal",
                }}
              >
                신랑측 연락처
              </div>

              <Spacing height={27} />

              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {GROOM_CONTACTS.map((contact) => (
                  <a
                    key={contact.label}
                    href={`tel:${contact.phone.replace(/-/g, "")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 15,
                      background: "#f4f4f6",
                      borderRadius: 8,
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 16,
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    {contact.label}
                  </a>
                ))}
              </div>

              <div style={{ flex: 1 }} />

              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#000",
                  lineHeight: "normal",
                }}
              >
                신부측 연락처
              </div>

              <Spacing height={27} />

              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {BRIDE_CONTACTS.map((contact) => (
                  <a
                    key={contact.label}
                    href={`tel:${contact.phone.replace(/-/g, "")}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 15,
                      background: "#f4f4f6",
                      borderRadius: 8,
                      fontFamily: "var(--font-sans)",
                      fontWeight: 500,
                      fontSize: 16,
                      color: "#333",
                      textDecoration: "none",
                    }}
                  >
                    {contact.label}
                  </a>
                ))}
              </div>

              <div style={{ flex: 1 }} />

              <button
                onClick={onClose}
                style={{
                  width: "100%",
                  background:
                    "linear-gradient(90deg, #24CCC9 0%, #00B9B5 100%)",
                  border: "none",
                  borderRadius: 10,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 16,
                  color: "#fff",
                  cursor: "pointer",
                  padding: 10,
                }}
              >
                닫기
              </button>
            </motion.div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}
