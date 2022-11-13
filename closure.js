// function celebrityName (firstName){
//     var nameIntro = "This celebrity is ";

//     function lastName(theLastName) //closure
//     {
//         return nameIntro + firstName + " " + theLastName
//     }

//     return lastName;
// }

// var mtName = celebrityName("My");

// console.log(mtName("Tam"))

function createStorage(key){
    const db = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () =>{
        localStorage.setItem(key, JSON.stringify(db))
    }
    const storage = {
        get(key) {
            return db[key]
        },
        set(key,value){
            db[key] = value
            save()
        },
        remove(key){
            delete db[key]
            save()
        }
    }

    return storage;
}

const register = createStorage('account')
register.set('username', 'ununin')
register.set('password', 'yeuhoe')
register.set('email', 'unyeuhoe@mail.com')

