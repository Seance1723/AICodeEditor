import { Search, X } from "lucide-react";

function SettingsSearch({ value, onChange, onClear }) {
  return (
    <label className="settings-search">
      <Search size={16} aria-hidden="true" />
      <input
        type="search"
        value={value}
        placeholder="Search settings"
        aria-label="Search settings"
        onChange={(event) => onChange(event.target.value)}
      />
      {value ? (
        <button type="button" aria-label="Clear settings search" title="Clear" onClick={onClear}>
          <X size={14} />
        </button>
      ) : null}
    </label>
  );
}

export default SettingsSearch;