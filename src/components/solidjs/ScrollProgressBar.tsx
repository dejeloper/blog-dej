import { createSignal, onCleanup } from "solid-js";

export default function ScrollProgressBar() {
  const [progress, setProgress] = createSignal(0);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const currentProgress = (scrollTop / scrollHeight) * 100;
    setProgress(currentProgress);
  };

  window.addEventListener("scroll", handleScroll);

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      id="progress-container"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "10px",
        "background-color": "transparent",
        "z-index": "9999",
      }}
    >
      <div
        id="progress-bar"
        class="progress-bar"
        style={{
          width: `${progress()}%`,
          height: "100%",
          transition: "width 0.2s ease-out",
          "border-radius": "0 0 10px 0",
        }}
      ></div>
    </div>
  );
}
