const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo', {})
.then(() => {
    console.log("Mongo conected")
})
.catch(err => {
    console.log("Mongo Connection error")
    console.log(err)
})

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    address: [
        {
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "asdfg"
    })
    u.address.push({
        _id: {id: false}
        street: '123 sesamo',
        city: 'New York',
        state: 'NY',
    })
    const res = await u.save()
    console.log(res)
}

makeUser();

// const addAddress = async(id) => {
//     const user = await User.findById(id);
//     user.addresses.push(
//         street: '99 kleist',
//         city: 'New York',
//         state: 'NY',
//         country: 'USA'
//     )
//     const res = await user.save()
//     console.log(res)
// }


// addAddress('64f61d14fbb8817e1c4028b5');