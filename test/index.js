/**
 * Imports
 */
import assert from 'assert'
import {tree, element, render} from 'deku'
import Button from '..'

/**
 * Tests
 */
describe('button', function() {
  let container

  beforeEach(function() {
    // Clear out the childNodes so deku doesn't warn us about it
    while(document.body.hasChildNodes())
      document.body.removeChild(document.body.lastChild)

    container = document.body.appendChild(document.createElement('div'))
  })

  it('should have working onclick', function() {
    const btn = create(<Button loading={false} onClick={onClick}>Test</Button>)

    let called = false

    btn.click()
    assert.equal(called, true)

    function onClick() {
      called = true
    }
  })

  it('should disable click events while loading', function() {
    const btn = create(<Button loading={true} onClick={onClick}>Test</Button>)
    btn.click()

    function onClick() {
      throw new Error("This shouldn't happen!")
    }
  })

  function create(component) {
    const app = render(tree(component), container)
    return container.querySelector('button')
  }
})