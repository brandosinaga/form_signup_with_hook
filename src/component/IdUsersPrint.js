import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function IdUsersPrint(props){


    
    // states

    const {number, getUserId} = props;

    const serial = "U";

    const [num_1, setNum1] = useState(0);

   
 


    useEffect(() => {

        getUserId(`${serial}-${num_1}-${number}`);


        if(number === 0 ){

                     setNum1(prevNum => prevNum + 1);
      
        }    


    }, [number, num_1, getUserId])


    

    return(<section className="mb-3 p-2 d-flex justify-content-between align-items-center">
    
                <span className="border border-4 p-2 w-25 text-center rounded w-50"><h3>ID USER</h3></span>

                <span className="border border-4 bg-dark text-light w-50 p-2 text-center rounded"><h3>{`${serial} - ${num_1} - ${number}`}</h3></span>         
    
            </section>)

                 

               


}