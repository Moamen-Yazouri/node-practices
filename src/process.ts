process.on('uncaughtException', (err) => {
  console.error('Caught an unhandled error:');
});

throw new Error('This was not caught anywhere else!');