function SegmentedControl({ label, options, value, onChange }) {
  return (
    <div className="settings-segmented" role="radiogroup" aria-label={label}>
      {options.map((option) => (
        <button
          className={option.value === value ? "is-active" : ""}
          type="button"
          role="radio"
          aria-checked={option.value === value}
          key={option.value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default SegmentedControl;