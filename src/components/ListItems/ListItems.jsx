import styles from './ListItems.module.scss'

export default function ListItems({categories}){
  if(!categories) return (<span>Não há categorias para serem exibidas.</span>)
  if(categories)
  return(
    <div className={styles.wrapper}>
      <h3>TOTAL POR CATEGORIA</h3>
      <div className={styles.categoriesWrapper}>
        {categories.map((category, key) =>{
          return (
            <div key={key} className={styles.category}>
              <div>{category.description}</div>
              <div>R$ {(category.value).toFixed(2).replace('.', ',')}</div>
          </div>
          )
        })}
      </div>
    </div>
  )
}