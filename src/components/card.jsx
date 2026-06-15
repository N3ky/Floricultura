// export const Card = (props) => {
//     return(
//         <>
//         <img src={props.images} alt={props.name} />
//             <div>
//                 <h2>{props.name}Produto 1</h2>
//                 <p>{props.desc}</p>
//                 <h3>${(props.value).toFixed(2)}</h3>
//             </div>
//         </>
//     )
// }
import s from './card.module.css'
export const Card = ({nomePlanta, especie, familia, localDeOrigem, Ilustracao}) => {
    return(
        <>
        <img className={s.cardImage} src={Ilustracao} alt={nomePlanta} />
            <div className={s.wrapText}>
                <h2>Nome: {nomePlanta}</h2>
                <p>Especie: {especie}</p>
                <p>Familia: {familia}</p>
                <p>Local: {localDeOrigem}</p>
            </div>
        </>
    )
}
    