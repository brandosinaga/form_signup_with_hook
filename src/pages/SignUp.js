import {Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Password from "../component/Password";
import IdUsersPrint from "../component/IdUsersPrint";
import ProductsInput from "../component/ProductsInput";
import { useState} from "react";



 export default function SignUp({number, handleAddNumber, handleAddToData}){


    // state

    const [nama_user, setNamaUser] = useState('');

    const [city, setCity] = useState('');

    const [email, setEmail] = useState('');

    const [id_user, setIdUser] = useState('');

    const [password, setPassword] = useState('');
   
    const [state, setState] = useState(null);


 


    // functions

    const getUserId = (user_id) => setIdUser(user_id); 

    const handlePassword = (pwdValue) => setPassword(pwdValue);

   

    const handleAddProducts = (e) => {

            e.preventDefault();

                    const checkNull = [nama_user, city, email, password].every(item => item !== "");

                    setState(checkNull)
                   
    }


   

    const onSubmit = (items) => handleAddToData({id_user, nama_user, city, email, password, products : [...items]})

    

    

       if (state === true){

                return(<ProductsInput handleAddNumber={handleAddNumber} onSubmit={onSubmit} dataToko = {{id_user, nama_user, city, email, password}}  />)

            
        }
        


        

    return(

            
            <Form className="m-3 p-2" style={{backgroundColor : "#F8F8FF"}} onSubmit={handleAddProducts}>

                <IdUsersPrint number = {number} getUserId = {getUserId} />

                    <Form.Group className="border border-4 mb-3 p-2 rounded">

                        <Form.Label><h5>Data Toko</h5></Form.Label>
                        <Form.Control type="text" placeholder="masukkan nama Toko" value={nama_user} onChange={(e) => setNamaUser(e.target.value)}></Form.Control>
                   
                        <Form.Label><h5>Kota</h5></Form.Label>
                        <Form.Control type="text" placeholder="masukkan domisili" value={city} onChange={(e) => setCity(e.target.value)}></Form.Control>
                     
                        <Form.Label><h5>Email</h5></Form.Label>
                        <Form.Control type="text" placeholder="masukkan alamat e-mail" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                      </Form.Group>

                     <Password handlePassword = {handlePassword} />

                    {state === false && <h4 className="text-center text-danger">data belum lengkap !</h4>}

                    <Form.Group className="d-flex justify-content-center mb-3 p-4">
                        <button type="submit" className="btn btn-outline-dark w-100">Tambah barang</button>
                    </Form.Group>

            </Form>

            

    )


}