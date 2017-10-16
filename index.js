'use strict'

const execa = require('execa')

const isOn = async () => {
  const { stdout } = await execa.shell(
    'defaults -currentHost read com.apple.ImageCapture disableHotPlug'
  )
  const status = await stdout

  return status === '1'
}

const toggle = async () => {
  const status = await isOn()
  const toggling = status ? 'NO' : 'YES'

  execa.shell(
    `defaults -currentHost write com.apple.ImageCapture disableHotPlug -bool ${toggling}`
  )

  return !status
}

module.exports.toggle = toggle
module.exports.isOn = () => isOn().then(isOn)
