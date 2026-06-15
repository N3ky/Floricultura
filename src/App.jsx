//imports do projeto
import s from './App.module.css'
import produtos from './constants/produtos.json'
import { Card } from './components/card'
function App() {
//funcionalidades js


  return (
    <>
     <h1 className={s.titulo}>Floricultura</h1>
     <main className={s.principal}>

      {produtos.map((item) => {
        return(
          <div key={item.id} className={s.card}>
            <Card Ilustracao={item.Ilustracao} nomePlanta={item.nomePlanta} especie={item.especie} familia={item.familia} localDeOrigem={item.localDeOrigem} />
          </div>

        )
      })}

      
     </main>
    </>
  )
}

export default App
