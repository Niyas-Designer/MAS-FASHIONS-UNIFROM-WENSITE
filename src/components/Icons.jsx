export const Icon = ({ name, size = 20 }) => {
  const paths = {
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    user: <><circle cx="12" cy="8" r="4"/><path d="M4 21c.6-4.1 3.2-6 8-6s7.4 1.9 8 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m5 5 14 14M19 5 5 19"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    play: <path d="m9 7 8 5-8 5z"/>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/></>,
    phone: <path d="M7.2 3.5 10 7.8 8.3 10c1.2 2.5 3.2 4.5 5.7 5.7l2.2-1.7 4.3 2.8-.5 3.1c-.2.9-1 1.5-1.9 1.5C10 20.7 3.3 14 2.6 5.9c-.1-.9.6-1.7 1.5-1.9z"/>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 20h14"/></>,
    fabric: <><path d="M5 4h14v16H5z"/><path d="m5 9 5-5M5 16 17 4M8 20 19 9M15 20l4-4"/></>,
    customize: <><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.5 2.7 8.2 7 10 4.3-1.8 7-5.5 7-10V6z"/><path d="m9 12 2 2 4-4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    value: <><path d="M4 7h16v12H4zM7 4h10v3"/><path d="M8 13h8M12 10v6"/></>,
    whatsapp: <><path d="M20.2 11.7a8.2 8.2 0 0 1-12 7.2L4 20l1.1-4.1a8.2 8.2 0 1 1 15.1-4.2Z"/><path d="M8.1 7.9c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.7.8c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 3 2.8.3.2.5.1.7-.1l.9-1.1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .3-.1 1.4-.7 1.9-.5.5-1.3.8-2.1.7-1-.1-2.5-.6-4.2-2.1-1.4-1.2-2.4-2.7-2.8-3.7-.4-1-.4-1.9-.2-2.5Z"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
