function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      {toast.message}
    </div>
  );
}

export default Toast;
