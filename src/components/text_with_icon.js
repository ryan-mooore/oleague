export default function TextWithIcon({ icon, text, right }) {
  if (!Array.isArray(icon)) {
    icon = [icon];
  }

  return (
    <div
      className={`flex ${right ? "flex-row-reverse" : "flex-row"} items-center`}
    >
      {icon.map((icon, index) => (
        <span
          key={index}
          className="material-symbols-rounded align-text-bottom -mr-2"
        >
          {icon}
        </span>
      ))}
      <span className="text-xs sm:text-base ml-3 overflow-hidden text-ellipsis whitespace-nowrap">
        {text}
      </span>
    </div>
  );
}