import { useLoaderData, useParams } from 'react-router-dom';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { ExpandableMenu } from '../../components/ExpandableMenu/ExpandableMenu';
import { FlexContainer } from '../../components/FlexContainer/FlexContainer';
import { Pagination } from '../../components/Pagination/Pagination';
import { Products } from '../../components/Products/Products';
import { CATEGORIES } from '../../constants/categories';

export function ProductsList() {
	const { products, numberOfPages } = useLoaderData();
	const params = useParams();
	const foundCategory = CATEGORIES.find((c) => c.path === params.category);
	let foundSubcategory;
	if (params.subcategory) {
		foundSubcategory = foundCategory.subcategories.find((sc) => sc.path === params.subcategory);
	}

	return (
		<FlexContainer>
			<ExpandableMenu />
			<div>
				<Breadcrumbs />
				<Products products={products} headerText={foundSubcategory ? foundSubcategory.categoryName : foundCategory.categoryName} />
				<Pagination numberOfPages={numberOfPages} />
			</div>
		</FlexContainer>
	);
}
