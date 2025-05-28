import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';
import { Footer } from '../Footer/Footer';
import { IconMenu } from '../IconMenu/IconMenu';
import { Logo } from '../Logo/Logo';
import { MainMenu } from '../MainMenu/MainMenu';
import { MainContent } from '../MainContent/MainContent';
import { TopBar } from '../TopBar/TopBar';
import { Outlet } from 'react-router-dom';
import { CurrencyContext } from '../../contexts/currencyContext';
import { CURRENCIES } from '../../constants/curriences';
import { CartContext } from '../../contexts/CartContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export function Layout() {
	const [currency, setCurrency] = useLocalStorage('selected_currency', CURRENCIES.PLN);

	const [cartItems, setCartItems] = useLocalStorage('cart_products', []);

	function addProductToCart(product) {
		const newState = [...cartItems, product];

		setCartItems(newState);
	}

	function removeProductFromCart(productId) {
		const updatedCart = cartItems.filter((item) => item.id !== productId);
		setCartItems(updatedCart);
	}

	return (
		<>
			<CartContext.Provider value={[cartItems, addProductToCart, removeProductFromCart]}>
				<CurrencyContext.Provider value={[currency, setCurrency]}>
					<MainContent>
						<TopBar>
							<MainMenu />
							<Logo />
							<div>
								<CurrencySelector />
								<IconMenu />
							</div>
						</TopBar>
						<CategoryMenu />
						<Outlet />
					</MainContent>
					<Footer />
				</CurrencyContext.Provider>
			</CartContext.Provider>
		</>
	);
}
