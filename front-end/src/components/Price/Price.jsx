import { useContext } from 'react';
import { CURRENCIES, CURRENCY_SIGN } from '../../constants/curriences';
import { CurrencyContext } from '../../contexts/currencyContext';

export function Price({ product }) {
	const [currency] = useContext(CurrencyContext);
	return (
		<>
			{currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
			{CURRENCY_SIGN[currency]}
		</>
	);
}
