import { useState } from "react";

function InlineConfirm({ label, confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, danger = false }) {
  const [confirming, setConfirming] = useState(false);

  if (!confirming) {
    return (
      <button className={danger ? "settings-inline-action settings-inline-action--danger" : "settings-inline-action"} type="button" onClick={() => setConfirming(true)}>
        {label}
      </button>
    );
  }

  return (
    <span className="settings-inline-confirm">
      <button type="button" onClick={() => setConfirming(false)}>{cancelLabel}</button>
      <button
        className={danger ? "is-danger" : ""}
        type="button"
        onClick={() => {
          onConfirm?.();
          setConfirming(false);
        }}
      >
        {confirmLabel}
      </button>
    </span>
  );
}

export default InlineConfirm;