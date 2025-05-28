import { CenteredContent } from '../CenteredContent/CenteredContent';
import { Product } from '../Product/Product';
import styles from './Products.module.css';

export function Products({ products, headerText }) {
	return (
		<CenteredContent>
			<h2 className={styles.bestsellersHeader}>{headerText}</h2>
			<div className={styles.productWrapper}>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</CenteredContent>
	);
}
