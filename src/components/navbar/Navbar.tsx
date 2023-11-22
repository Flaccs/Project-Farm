import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-cyan-500		 text-white
                flex justify-center py-4'>
            
                <div className="container flex justify-between text-lg">
                    Farmácia

                    <div className='flex gap-4'>
                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar