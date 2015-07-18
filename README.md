# Button

Simple, composable deku button component.

## Usage

Props:

  * `loading` (bool) indicates whether the button is currently waiting for its most recent  action to complete
  * `onClick` (function) function to call when the button is clicked
  * `type` (string: button|submit) defaults to 'button'
  * `spinner` (optional) Pass in a custom spinner component.  Must accept
  a `spinning` (bool) prop.
  * `style` (optional, array|object) Either an object of style properties or an array of objects of style properties to be applied to the button element

When `loading` is true, `onClick` events will not fire, and `spinning` will be `true` for the spinner component.

## Example

```javascript
function render(component) {
  const {props, state} = component

  <Button onClick={likeThing} loading={state.loading} spinner={CircularSpinner}>
    Like Thing
  </Button>

  function likeThing() {
    setState({loading: true})
    doLike(thing, function() {
      setState({loading: false})
    })
  }
}
```