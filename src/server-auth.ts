import express, { response } from "express";
import { seedUserStore, users } from "./database";

const port = 3333;
const app = express();

app.use(express.json());

seedUserStore();

app.post("/sessions",(request,response) =>{
    const { email, password } = request. body;

    const user = users.get(email);
    if(!user || password != user.password){
        return response.status(401).json({
            error: true,
            message: 'E-mail or password incorrect.',
        });
    }

    return response.json({
        token: 'teste',
        refreshToken: 'teste',
    })
    


});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);

});