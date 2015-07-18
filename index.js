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
  style: {}
}

/**
 * Component
 */
function render(component) {
  const {props} = component
  const {children, spinner, loading, onClick, type, style: styl} = props
  const css = style(styl)

  return (
    <button type={type} onClick={handleClick} style={css}>
      {props.children}
      {spinner ? <spinner spinning={loading} /> : null}
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