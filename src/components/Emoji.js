export default function Emoji({ label, emoji, ...otherProps }) {
  return (
    <span
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
      {...otherProps}
    >
      {emoji}
    </span>
  );
}
