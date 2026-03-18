function isPlainLeftClick(event) {
  return (
    event.button === 0 &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey
  )
}

export default function AppLink({
  to,
  goTo,
  children,
  className = '',
  current = false,
  onClick,
  ...props
}) {
  const handleClick = (event) => {
    onClick?.(event)

    if (event.defaultPrevented || !isPlainLeftClick(event)) {
      return
    }

    event.preventDefault()
    goTo(to)
  }

  return (
    <a
      href={to}
      onClick={handleClick}
      aria-current={current ? 'page' : undefined}
      className={className}
      {...props}
    >
      {children}
    </a>
  )
}
