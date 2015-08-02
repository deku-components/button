/**
 * Imports
 */
import {element} from 'deku'
import {Style} from '@deku-scrubs/style'

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
  const {spinner: Spinner, loading, onClick, type, style} = props

  let children = props.children
  if(Spinner)
    children = children.concat(<Spinner spinning={loading} />)

  return (
    <Style
      component='button'
      props={{onClick: handleClick, type: type, disabled: loading}}
      style={style}>
      {children}
    </Style>
  )

  function handleClick() {
    if(! loading)
      onClick && onClick()
  }
}

/**
 * Exports
 */
export default {render, defaultProps}