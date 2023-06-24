import { useState,useContext } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { value } from "../App";
import SignUpSuccess from "./SignUpSuccess";



export default function ProductsInput({ onSubmit, handleAddNumber, dataToko}){


    const context = useContext(value);
    
    const {count, handleAddCount} = context;
  

    // states

    const [name, setName] = useState('');

    const [price, setPrice] = useState('');

    const [image, setImage] = useState('');

    const [products, setProducts] = useState([]);

    const [state, setState] = useState(null);

    const [stateInput, setStateInput] = useState('');


    // functions

    const handleAddProduct = () => {

        const checkNull = [name, price, image].every(item => item !== "");

        if(checkNull === true){

                setStateInput(checkNull);

                    handleAddCount();

                        setProducts([...products, {id : count,name, price, image}]);


                    setName('');

                    setPrice('');

        } else {


                        setStateInput(checkNull);

        }    

    }





    const handleSubmit = () => {

                   setState(true);

                   handleAddNumber();

                    onSubmit([...products]);

                    
    }




    const handleAddPhoto = (e) => {

                 const reader = new FileReader();

                        reader.addEventListener("load", () => {

                               setImage(reader.result);
                      })

            reader.readAsDataURL(e.target.files[0]);
        
    }




    
    if(state === true){

        return(<>
                    
                   <SignUpSuccess dataToko={dataToko} products={products} />

                   <h1> <Link to={"/"} >kembali ke mainpage</Link></h1>
                   
                </>)
    }

   return(
        
        <div className="d-flex flex-column justify-content-center align-items-center" style={{height : "100vh"}}>
            <Form className="border border-4 rounded p-4 w-75">
             
                <Form.Group className="p-1">
                    <Form.Label><h3>Nama Product</h3></Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>

               <Form.Group className="p-1 mt-4 mb-4">
                    <Form.Label><h3>Harga</h3></Form.Label>
                    <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
               </Form.Group>

                <Form.Group className="p-1">
                    <Form.Label><h3>Foto</h3></Form.Label>
                    <Form.Control type="file"  onChange={handleAddPhoto} accept="image/png, image/jpeg" />
                </Form.Group>

                {stateInput === false && <h3 className="text-center mt-3 text-danger">Data belum Lengkap !</h3>}

            </Form>

                <section className="w-75 mt-3 p-4 d-flex justify-content-around align-items-center">
                    <button className="btn btn-outline-dark p--2 w-50" onClick={handleAddProduct}>Tambah Product</button>
                    {products.length > 0 && <button className="btn btn-outline-success p-2 w-50" onClick={handleSubmit}>selesai</button>}
                </section>
        </div>
            )

}