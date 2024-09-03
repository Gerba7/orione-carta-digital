import Product from '../../Common/Product/Product';
import styles from './section.module.css';



const Section = ({category}) => {

    const products = category?.products;


  return (
    <div id={`${category?.name}`} className={`${styles.container} 
        ${category.name === 'Principales' ? styles.mains : ''}
        ${category.name === 'Tragos' ? styles.drinks : ''}
        ${category.name === 'Ensaladas' ? styles.salads : ''}
    `}>
        <h2 className={styles.mainTitle}>{category?.name}</h2>
        <div className={`${styles.products}`}>
            {products?.map((product) => {
                if (product.isActive) {
                    return(
                        <Product key={product?._id} name={product?.name} price={product?.price} description={product?.description} />
                    )
                }
            })}
        </div>
    </div>
  )
}

export default Section
