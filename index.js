const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const crypto = require("crypto")

async function main () {
    await exec(`echo ${Date.now().toString()} > lmao.txt`)
    await exec(`git add . && git commit -m "test ${crypto.randomUUID()}"`)
    console.log("odne")
    main()
}
main()
main()
main()
main()
main()
main()
main()
main()
main()
main()
main()
main()
main()
main()