import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
import { Form } from "react-bootstrap";


export default function Password(props){


    const {handlePassword} = props

    const elem = useRef()
    
    const conElem = useRef()


    // states

    const [pwd, setpwd] = useState('');

    const [state, setState] = useState('');

    const [stateConfirm, setStateConfirm] = useState('');



    // functions

    const inputPassword = () => {

        const passwordValidator = require('password-validator');

        const schema = new passwordValidator();

        schema
        .is().min(8)                                    // Minimum length 8
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(2)                                // Must have at least 2 digits
        .has().not().spaces()                           // Should not have spaces
        .is().not().oneOf(['Passw0rd', 'Password123']);    
        
        const state = schema.validate(elem.current.value);

        if(state === true){

                    setpwd(elem.current.value)

                    setState(true)

        }  else {

                    setState(false)
        }

    }



    const handleConfirm = () => {

            const matchStatus = pwd === conElem.current.value;

               if(matchStatus === true){

                        setStateConfirm(true);


                        handlePassword(pwd);

               } else {

                        setStateConfirm(false)
               }

    }




        return(

            
                    <Form.Group className='mb-3 border border-3 p-2 rounded' controlId="formBasicPassword">
                        <Form.Label><h5>Password</h5></Form.Label>
                        <Form.Control  type="text" placeholder='kombinasikan password' onChange={inputPassword} ref = {elem}></Form.Control>
                        {state === false && <p style={{color : "red", fontStyle : "italic"}}>gunakan kombinasi huruf, kaital, angka, dan karakter</p>}
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="text" placeholder='re-enter password' ref={conElem} onChange={handleConfirm}></Form.Control>
                        {stateConfirm === false && <p style={{color : "red", fontStyle : "italic"}}>konfirmasi password salah</p>}
                    </Form.Group>
            
        )

}