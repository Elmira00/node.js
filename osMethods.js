import os from 'os';

// returns the operating system platform
console.log(os.platform())

// returns the operating system architecture
console.log(os.arch())

// returns cpu core information
console.log(os.cpus())

// returns total ram 
console.log(os.totalmem() / 1024 / 1024 / 1024 + ' GB')

// returns free ram
console.log(os.freemem() / 1024 / 1024 + ' MB')

// returns the time the system has been running
console.log(os.uptime() / 60 / 60 / + ' hours')

// returns the name of the computer in the network
console.log(os.hostname())

// returns the operating system name
console.log(os.type())

// returns home directory of the current user
console.log(os.homedir())

// returns IP info
console.log(os.networkInterfaces())

