export default function increaseHeight(
  isResized,
  setIsResized,
  setShowPreviewer,
  ref
) {
  if (ref.current && isResized) {
    ref.current.style.height = "100vh";
    setIsResized(!isResized);
    setShowPreviewer((value) => !value);
  } else {
    ref.current.style.height = "300px";
    setIsResized(!isResized);
    setShowPreviewer((value) => !value);
  }
}
