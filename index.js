/**
 * Sample application using vulnerable dependencies from VDR report.
 * Used for testing OSV.dev fallback for fix version resolution.
 */

const _ = require('lodash');
const axios = require('axios');
const minimist = require('minimist');

async function main() {
    console.log('VDR JavaScript Test Application');

    // Use lodash
    const data = { a: 1, b: 2 };
    const merged = _.merge({}, data, { c: 3 });
    console.log('Merged object:', merged);

    // Parse args with minimist
    const args = minimist(process.argv.slice(2));
    console.log('Arguments:', args);

    // Make a simple HTTP request
    try {
        const response = await axios.get('https://api.github.com/zen');
        console.log('GitHub Zen:', response.data);
    } catch (error) {
        console.log('HTTP request skipped (offline mode)');
    }

    console.log('Application completed successfully!');
}

main().catch(console.error);
