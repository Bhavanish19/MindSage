const Button = ({
  text,
  secondaryText,
  color = "#070707",
}: {
  text: string;
  secondaryText?: string;
  color?: string;
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit"
    >
      <span>{text}</span>
      {secondaryText ? (
        <span className="font-light  ">{secondaryText}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Button;
