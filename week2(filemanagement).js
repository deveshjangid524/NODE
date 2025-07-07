const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'FileManager> '
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

function clearScreen() {
    console.clear();
    console.log("Commands: create, read, write, delete, exit");
    rl.prompt();
}

async function runFileManager() {
    clearScreen();

    rl.on('line', async (input) => {
        const command = input.trim().toLowerCase();

        switch (command) {
            case 'create': {
                const file = await ask("Enter file name: ");
                const filePath = path.resolve(file);
                try {
                    fs.writeFileSync(filePath, '', 'utf8');
                    console.log(`File created at ${filePath}`);
                } catch (err) {
                    console.log("Error:", err.message);
                }
                break;
            }

            case 'read': {
                const file = await ask("Enter file name: ");
                const filePath = path.resolve(file);
                if (fs.existsSync(filePath)) {
                    const content = fs.readFileSync(filePath, 'utf8');
                    console.log("Content:\n" + content);
                } else {
                    console.log("File not found.");
                }
                break;
            }

            case 'write': {
                const file = await ask("Enter file name: ");
                const filePath = path.resolve(file);
                const content = await ask("Enter content: ");
                try {
                    fs.writeFileSync(filePath, content, 'utf8');
                    console.log(`Content written to ${filePath}`);
                } catch (err) {
                    console.log("Error:", err.message);
                }
                break;
            }

            case 'delete': {
                const file = await ask("Enter file name: ");
                const filePath = path.resolve(file);
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log(`File ${filePath} deleted.`);
                } else {
                    console.log("File not found.");
                }
                break;
            }

            case 'exit': {
                console.log("Exiting...");
                rl.close();
                return;
            }

            default:
                console.log("Unknown command.");
        }

        rl.prompt();
    });
}

runFileManager();
