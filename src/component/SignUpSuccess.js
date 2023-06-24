import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "./ProductCard";


export default function SignUpSuccess({dataToko, products}){

        const {id_user, nama_user, city, email, password} = dataToko;
        
        return(<div className="container-lg p-4">
                    
                   <section className="mb-3 p-2 row">
    
                        <span className="border border-4 p-2 text-center rounded  col-8"><h3>{nama_user}</h3></span>
                        <span className="border border-4 col-4 p-2 text-center rounded bg-dark text-light"><h3>{id_user}</h3></span> 
                        <span className="col-12 mt-4"></span>
                        
                        <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Email</h5></span>
                        <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{email}</h5></span> 

                        <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Kota</h5></span>
                        <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{city}</h5></span> 
                       
                        <span className="border border-1 p-2 rounded  col-3 d-flex justify-content-center align-items-center"><h5>Password</h5></span>
                        <span className="border border-1 col-9 p-2 text-center rounded d-flex justify-content-center align-items-center"><h5>{password}</h5></span> 
                    </section>


                    <section className="mb-3 p-2 row" ><span className="col-12 p-2 text-center rounded"><h5>Daftar Produk</h5></span> </section>

                    <section className="border border-dark rounded p-4 d-flex flex-wrap justify-content-around">
                        {products.map(item => <ProductCard key={item.id} product={item} cardFor={"info"} />)}
                    </section>


                </div>)


}