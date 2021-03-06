const { join } = require('path')

module.exports = [
  {
    type: 'aptpkg',
    packages: [
//      'vimb',
      'firefox-esr', // TODO more recent firefo
//      'flashplugin-nonfree',
//      'xul-ext-pentadactyl',
      'xul-ext-adblock-plus',
      'xul-ext-https-everywhere',
//      'xul-ext-noscript',
      'deluge-gtk'
    ]
  },
  // google-chrome
  {
    type: 'exec',
    command: 'if ! [ -e "/etc/apt/sources.list.d/google-chrome.list" ]; then mkdir ~/tmp; cd ~/tmp; wget "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb" -O google-chrome.deb ; sudo dpkg -i google-chrome.deb; sudo apt install -yf; fi'
  }
]
