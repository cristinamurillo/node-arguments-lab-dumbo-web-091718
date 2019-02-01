// code solution here
process.argv.shift()
process.argv.shift()

function printPasswords(){
    for(i=0;i<process.argv[1];i++){
        generatePassword(process.argv[0])
    }
}

function generatePassword(length){
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let password = ""
    for(let i=0; i<length;i++){
        password += charset.charAt(Math.floor(Math.random()*charset.length))
    }
    process.stdout.write(password)
}

printPasswords()

process.exit(0)