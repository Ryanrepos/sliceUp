const fs = require('fs-extra');

const directoriesToCopy = [
    { source: 'src/views', destination: 'dist/views'},
    { source: 'src/public', destination: 'dist/public'}
];

async function copyDirectories(){
    try {
        for (const directory of directoriesToCopy) {
            await fs.copy(directory.source, directory.destination);
            console.log("Successfully duplicated!");
        }
    } catch(error) {
        console.error('Error, Extra:', error);
    }
}

copyDirectories().then();