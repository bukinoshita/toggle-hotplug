import test from 'ava'
import { isOn, toggle } from '.'

import test from 'ava'
import { isOn, toggle } from '.'

if (!process.env.CI) {
  // Travis doesn't have hotplug
  test('travis', t => {
    t.pass()
  })
} else {  
  test('main', async t => {
    t.true(await isOn())
    await toggle()
    t.false(await isOn())
  })
}
