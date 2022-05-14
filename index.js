
let slots = document.querySelectorAll('.password')



let allNum = "1234567890"
let allChar = "qazxswedcvfrtgbnhyummkilop"
let allSym = "!@#$%^&*()_+-][{}:;?/>.<,"

function generatePassword(){
    let seedNum1 = Math.floor((Math.random()*allNum.length))
    let seedNum2 = Math.floor((Math.random()*allNum.length))
    let seedChar1 = Math.floor((Math.random()*allChar.length))
    let seedChar2 = Math.floor((Math.random()*allChar.length))
    let seedSym1 = Math.floor((Math.random()*allSym.length))
    let seedSym2 = Math.floor((Math.random()*allSym.length))

    let nums = allNum[seedNum1]+allNum[seedNum2]
    let chars = allChar[seedChar1] + allChar[seedChar2]
    let syms = allSym[seedSym1] + allSym[seedSym2]

    let draft = nums + chars + syms
    let password = ""
    
    // shuffling password
    for (let i = 5; i >=0; i--){
        // console.log('draft: ',draft)
        let seedIndex = Math.floor((Math.random()*i))
        // console.log(seedIndex)
        password += draft[seedIndex]
        draft = draft.slice(0, seedIndex) + draft.slice(seedIndex+1)
        // console.log('password: ', password)
        
    }
    
    // console.log(password)
    return password
    
}



function fillPassword(){
    let passwords = []

    for(let i = 0; i<4;i++){
        password = generatePassword()
        passwords.push(password)
    }
    for (let i = 0; i<4; i++){
        slots[i].textContent = passwords[i]
        
    }
}

function copyText(id){
    console.log(id)
    content = document.getElementById(id).textContent
    navigator.clipboard.writeText(content)
    console.log(id + ' password copied')

}


