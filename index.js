/**
 * Imports
 */
import {element} from 'deku'
import style from 'style'

/**
 * defaultProps
 */
const defaultProps = {
  type: 'button',
  style: {},
  spinner: null
}

/**
 * Component
 */
function render(component) {
  const {props} = component
  const {spinner: Spinner, loading, onClick, type, style: styl} = props
  const css = style(styl)

  let children = props.children
  if(Spinner)
    children = children.concat(<Spinner spinning={loading} />)

  return (
    <button type={type} onClick={handleClick} style={css}>
      {children}
    </button>
  )

  function handleClick() {
    if(! loading)
      onClick()
  }
}

/**
 * Exports
 */
export default {render, defaultProps}