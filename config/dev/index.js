const { join } = require('path')

const dockerAptSourceList = join(__dirname, 'apt/sources.list.d/docker.list')

// https://github.com/ggreer/the_silver_searcher
module.exports = [
  {
    type: 'aptpkg',
    packages: [
      // terminal
      'xclip',
      // 'bluedevil'
      'htop',
      // 'mc',
      'tree',
      'wget',
      'curl',
      // 'aria2',
      // 'rtorrent',
      'silversearcher-ag',

      // postgres
      'postgresql',
      'postgresql-client',
      'postgresql-contrib',
      'postgresql-server-dev-all',
      'pgadmin3',

      // virtual machines
//      'virtualbox',

      // disk utilities
//      'gparted',
      // TODO disk space viewer

      // security
//      'wireshark',
      'nmap',
//      'keepassx'
    ]
  },
  // docker
  {
    type: 'exec',
    command: `curl -fsSL https://download.docker.com/linux/debian/gpg | sudo tee /etc/apt/trusted.gpg.d/docker.asc`
  },
  {
    type: 'exec',
    command: `cat ${dockerAptSourceList} | sudo tee /etc/apt/sources.list.d/docker.list`
  },
  {
    type: 'exec',
    command: 'apt update -y',
    sudo: true
  },
/*  {
    type: 'aptpkg',
    package: 'docker-ce'
  },
*/  
  {
    type: 'exec',
    commands: [
      //'groupadd docker',
      'usermod -aG docker dinosaur',
      'systemctl enable docker'
    ],
    sudo: true
  }
]
