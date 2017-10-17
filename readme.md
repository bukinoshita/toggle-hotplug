# toggle-hotplug [![Build Status](https://travis-ci.org/bukinoshita/toggle-hotplug.svg?branch=master)](https://travis-ci.org/bukinoshita/toggle-hotplug)

> Toggle macOS Sierra hotplug on and off

_**Hotplug:** when you [plug your iPhone on your macbook and the Photos app automatically opens](https://twitter.com/bukinoshita/status/920089417494220801). `toggle-hotplug` can toggle this on and off._

## Install

```
$ yarn add toggle-hotplug
```


## Usage

```js
const { isOn, toggle } = require('toggle-hotplug')

await isOn()
// => false

await toggle()
// => true
```


## API

### toggleHotplug

All methods return a `promise`

#### isOn()

Returns a Promise<boolean> of whether the hotplug is on.

#### toggle()

Inverse the hotplug state.


## Related

- [toggle-hotplug-cli](https://github.com/bukinoshita/toggle-hotplug-cli) — CLI for this module


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
