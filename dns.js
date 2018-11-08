const dns = require('dns');

dns.lookup('google.co.cr', (err, address) => {
    if (err) console.log(err);
    else console.log('*** lookup: ', address);
});

dns.resolve4('google.co.cr', (err, address) => {
    if (err) console.log(err);
    else console.log('*** resolve4: ', address);
});

dns.resolve('google.co.cr', 'MX', (err, address) => {
    if (err) console.log(err);
    else console.log('*** resolve: ', address);
});

dns.resolveMx('google.co.cr', (err, address) => {
    if (err) console.log(err);
    else console.log('*** resolveMx: ', address);
});

dns.reverse('172.217.8.142', (err, hostnames) => {
    if (err) console.log(err);
    else console.log('*** reverse: ', hostnames);
});