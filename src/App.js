import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { createContext, useState, } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';
import SignUp from "./pages/SignUp";





const dataToko = [{id_user : "U-0-1", nama_user : "Toko Parapat", password : "dataD12345", city : "Parapat", email : "parapat_toko@gmail.com", products : [
     {id: 0, name: "Nike VaporFly 4% Flyknit", price: 209, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/acmoik7t1kfbprm8hsqs/vaporfly-4-flyknit-running-shoe-7R7zSn.jpg"}, 
     {id: 1, name: "Nike Air Monarch IV PR", price: 89, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/vjsleghax3228bpidanh/air-monarch-iv-pr-shoe-qf64pl.jpg"},
     {id: 2, name: "Nike Air Max Deluxe SE", price: 149, image:"https://c.static-nike.com/a/images/f_auto,b_rgb:f5f5f5,w_880/rkhls7wdxdydeg1vkwkt/air-max-deluxe-se-shoe-T6Vkl2.jpg"},
     ]}]
   


export const value = createContext(null);
     






export default function App(){


     // states

     const [data, setData] = useState([dataToko[0]]);
     const [count, setCount] = useState(3);
     const [number, setNumber] = useState(2);




     // functions

     const handleAddCount = () => setCount(count + 1);

     const handleAddNumber = () => setNumber(number + 1);
         
   
     const handleAddToData = (obj) => setData([...data, obj]);
     
     // const test = () => console.log(data)


     

     return(<>


                   

               <value.Provider value={{count, handleAddCount}}>
                    
                    <BrowserRouter>

                         <Routes>

                         <Route path="/" element={<MainPage />} />

                         <Route path="daftar" element={<SignUp number = {number} handleAddNumber={handleAddNumber} handleAddToData={handleAddToData} />} />

                         </Routes>
                             
                    </BrowserRouter>

                    
                    </value.Provider>
                    
                   
          </>)

}