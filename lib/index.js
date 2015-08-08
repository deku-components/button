/**
 * Imports
 */
import element from 'magic-virtual-element'

/**
 * defaultProps
 */
const defaultProps = {
  type: 'button',
  style: {},
  spinner: null
}

/**
 * Render
 */
function render (component) {
  const {props} = component
  const {spinner: Spinner, loading, onClick, type, style} = props

  let children = props.children
  if (Spinner) {
    children = children.concat(<Spinner spinning={loading} />)
  }

  return (
    <button onClick={handleClick} type={type} disabled={loading} style={style}>
      {children}
    </button>
  )

  function handleClick () {
    if (!loading) {
      onClick && onClick()
    }
  }
}

/**
 * Exports
 */
export default {render, defaultProps}
