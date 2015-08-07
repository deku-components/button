/**
 * Imports
 */
import assert from 'assert'
import spy from 'spy'
import empty from 'component-empty'
import {tree, render} from 'deku'
import element from 'magic-virtual-element'
import Button from '..'

/**
 * Tests
 */
describe('button', function () {
  let container

  beforeEach(function () {
    empty(document.body)
    container = document.body.appendChild(document.createElement('div'))
  })

  it('should have working onclick', function () {
    const onClick = spy()
    const btn = create(<Button loading={false} onClick={onClick}>Test</Button>)

    btn.click()
    assert.equal(onClick.callCount, 1)
  })

  it('should disable click events while loading', function () {
    const onClick = spy()
    const btn = create(<Button loading={true} onClick={onClick}>Test</Button>)

    btn.click()
    assert.equal(onClick.callCount, 0)
  })

  it('should work with spinners', function () {
    const Spinner = {
      render () {
        return (<div class='spinner'></div>)
      }
    }

    const btn = create(<Button loading={true} spinner={Spinner}>Test</Button>)
    assert.ok(btn.querySelector('.spinner'))
  })

  it('should accept style property', function () {
    const btn = create(<Button style={{width: '40px'}} />)
    const style = btn.attributes.style.value
    assert.ok(style.indexOf('width:40px') !== -1)
  })

  function create (component) {
    render(tree(component), container)
    return container.querySelector('button')
  }
})
