const users = [
    {
    nome: "Martarelli",
    idade: 32,
    email: "renanmartarelli@gmail.com,"
    }

]
class UserController{
    store(){

    }

    index(req,res){
        return res.status(200).json(users);
    }

    update(){

    }

    show(){

    }

    delete(){
        
    }
}

module.exports = new UserController();