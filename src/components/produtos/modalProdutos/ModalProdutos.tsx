import Popup from 'reactjs-popup';
import FormularioProduto from '../formularioProduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import './ModalProdutos.css'

function ModalProduto() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Novo produto
                    </button>
                }
                modal
            >
                <FormularioProduto />
            </Popup>
        </>
    );
}

export default ModalProduto;