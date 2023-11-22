import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos"
import ModalProdutos from "../../components/produtos/modalProdutos/ModalProdutos"
function Home() {
    return (
        <>
            <div className="bg-teal-200	 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                                <ModalProdutos />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/2646/2646036.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
                            />
                             </div>
                </div>
            </div>

            <ListaProdutos />
        </>
    )
}

export default Home