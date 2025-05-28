import styles from './CartProduct.module.css';
import REMOVE_ICON from '../../assets/remove.svg';
import { Price } from '../Price/Price';

export function CartProduct({ product, onRemove }) {
	const price = <Price product={product} />;

	return (
		<div className={styles.favouriteProduct}>
			{product.photos && product.photos.length > 0 && <img src={product.photos[0]} alt={`${product.brand} ${product.productName}`} />}
			<div className={styles.favouriteProductInfo}>
				<div className={styles.topRow}>
					<h3>
						{product.brand} {product.productName}
					</h3>
					<p>{price}</p>
				</div>
				<p className={styles.priceRow}>
					<span>Cena:</span>
					{price}
				</p>
				<div className={styles.buttonRow}>
					<button onClick={() => onRemove(product.id)}>
						<img src={REMOVE_ICON} />
						Usuń
					</button>
				</div>
			</div>
		</div>
	);
}
