codexPlus.extension((ctx) => {
  ctx.effect(() => {
    const style = document.createElement("style");
    style.id = "codex-plus-ext-hide-sidebar-recommendations-style";
    style.setAttribute("data-codex-plus-ext", "hide-sidebar-recommendations");
    style.textContent = "#codex-plus-rail-sponsor { display: none !important; }";
    document.head.append(style);
    return () => style.remove();
  });
});
