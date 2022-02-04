//Creating 3 controller named users,business,products 

const users = (req, res)=>{
    res.json({
        name: "Sushmita",
        email: "sush@gmail.com",
        bio: "Developer",
        profilePic: "[]"
});
   
}

const business = (req,res)=>{
    res.json({
        name: "xyz",
        email: "xyz@gmail.com",
        registraion_no: "1234"
    })
}

const products = (req,res)=>{
    res.json({
        name: "iphone",
        mrp:"60000",
        description:"Apple",
        image: "[]"
    })
}


module.exports = {users,business,products} //importing all the controllers to the route file