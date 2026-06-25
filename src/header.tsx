import { useState } from "preact/hooks";

export function Header() {
  const [canGoBack, setCanGoBack] = useState(window.navigation.canGoBack);
  const [canGoForward, setCanGoForward] = useState(
    window.navigation.canGoForward,
  );

  window.navigation.addEventListener("currententrychange", () => {
    setCanGoBack(window.navigation.canGoBack);
    setCanGoForward(window.navigation.canGoForward);
  });

  function handleInputChange(event: InputEvent) {
    window.navigation.navigate(
      `/search?q=${(event.target as HTMLInputElement).value}`,
      { history: "auto" },
    );
  }

  return (
    <nav style="display: flex; justify-content: space-between; padding: 1rem; background-color: #f0f0f0;">
      <button
        onClick={() => window.navigation.back()}
        disabled={canGoBack === false}
      >
        Back
      </button>
      <input type="text" placeholder="Search..." onInput={handleInputChange} />
      <button
        onClick={() => window.navigation.forward()}
        disabled={canGoForward === false}
      >
        Forward
      </button>
    </nav>
  );
}
