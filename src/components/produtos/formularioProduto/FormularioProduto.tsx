function FormularioProduto() {
    return (
        <div className="container flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8">Cadastrar Produto</h1>

            <form className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="titulo">Descrição do Produto</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="texto"
                        required
                        className="border-2 bg-cyan-500 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Nome do Produto</p>
                    <select name="tema" id="tema" className='border p-2 border-slate-800 rounded' >
                        <option value="" selected disabled>Selecione um Produto</option>
                        
                        <>
                            <option>Produto 1</option>
                        </>

                    </select>
                </div>
                <button 
                    type='submit' 
                        className='rounded disabled:bg-slate-200 bg-indigo-400 
                            hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'
                >
                    Cadastrar
                </button>
            </form>
        </div>
    );
}

export default FormularioProduto;