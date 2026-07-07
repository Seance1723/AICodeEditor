import SettingsRow from "./SettingsRow.jsx";

function ToggleRow({ title, description, checked, onChange, badges }) {
  return (
    <SettingsRow title={title} description={description} badges={badges}>
      <label className="settings-toggle" aria-label={title}>
        <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
        <span aria-hidden="true" />
      </label>
    </SettingsRow>
  );
}

export default ToggleRow;