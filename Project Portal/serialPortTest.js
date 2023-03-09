const { SerialPort } = require('serialport')

// Create a port
const port = new SerialPort({
    path: 'COM4',
    baudRate: 500000,
});




// Open errors will be emitted as an error event
port.on('error', function (err) {
    console.log('Error: ', err.message);
});

// Read data that is available but keep the stream in "paused mode"
port.on('readable', function () {
    console.log(port.read().toString());

});

setTimeout(urmum, 5000);

function urmum() {
    port.write('read', function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log('message written');
    })
}