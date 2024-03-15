import { useEffect, useState } from 'react'
import './Cotacoes.modules.css'
import { listar } from '../../../service/service'

function Cotacoes(){

    const [material, setMaterial] = useState([])
    const [cotacao, setCotacao] = useState([])

    useEffect(() => {

        async function fmaterial(){
            listar().then((e) =>{
                setMaterial(e.data)
                setCotacao(e.data.cotacaoDtos)

                cotacao.map((item, index) => {
                    // setCotacao({...cotacao, item})
                    console.error(item) 
                })
            }).catch((err) => {
                console.log(err.response)
            })
        }
        fmaterial()
    }, [])

    return(
        <div className="cotacoes">
            <ul>
                <li>
                    <div className="material">
                        <div className="info-material">
                            <span>Data da solicitação</span>
                            <span>Descrição</span>
                        </div>

                        <div className="preco">
                            <div className="calculo">
                                <h4>MÉDIA</h4>
                                <span>R$ 400,00</span>
                            </div>

                            <div className="calculo">
                                <h4>MEDIANA</h4>
                                <span>R$ 600,00</span>
                            </div>

                            <div className="calculo">
                                <h4>MENOR</h4>
                                <span>R$ 150,00</span>
                            </div>
                        </div>
                    </div>
                </li>

                <ul>
                    {/* {cotacao.map((item, index) => (
                        <li key={index}>{item.datacriacao}</li>
                    ))} */}
                </ul>
            </ul>
        </div>
    )
}

export default Cotacoes