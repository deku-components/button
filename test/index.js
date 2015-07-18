/**
 * Imports
 */
import assert from 'assert'
import spy from 'spy'
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
    const onClick = spy()
    const btn = create(<Button loading={false} onClick={onClick}>Test</Button>)

    btn.click()
    assert.equal(onClick.callCount, 1)
  })

  it('should disable click events while loading', function() {
    const onClick = spy()
    const btn = create(<Button loading={true} onClick={onClick}>Test</Button>)

    btn.click()
    assert.equal(onClick.callCount, 0)
  })

  it('should work with spinners', function() {
    const Spinner = {
      render() {
        return (<div class='spinner'></div>)
      }
    }

    const btn = create(<Button loading={true} spinner={Spinner}>Test</Button>)
    assert.ok(btn.querySelector('.spinner'))
  })

  function create(component) {
    const app = render(tree(component), container)
    return container.querySelector('button')
  }
})