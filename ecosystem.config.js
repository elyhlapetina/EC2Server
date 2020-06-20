module.exports = {
  apps: [{
    name: 'EC2Server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-188-39-39.us-west-2.compute.amazonaws.com',
      key: '/Users/elyhlapetina/Documents/Coding/requests_server/16MacbookPro.pem',
      ref: 'origin/master',
      repo: 'git@github.com:elyhlapetina/EC2Server.git',
      path: '/home/ubuntu/EC2Server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
