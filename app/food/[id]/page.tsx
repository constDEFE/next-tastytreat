import FoodDetail from "@/modules/FoodPage/FoodDetail";
import RelatedFoods from "@/modules/FoodPage/RelatedFoods";
import PageHeader from "@/shared/PageHeader";
import { getAllFoods, getFoodDetail } from "@/utils/crud";

export const revalidate = 3600;

interface Props {
	params: { id: string };
}

const page = async ({ params: { id } }: Props) => {
	const foodDetail = await getFoodDetail(id);

	return (
		<>
			<PageHeader title={foodDetail.title} />
			<FoodDetail food={foodDetail} />
			<RelatedFoods related={foodDetail.related} />
		</>
	);
};

export const generateStaticParams = async () => {
	const foods = await getAllFoods();

	return foods.map((food) => ({ id: String(food.id) }));
};

export const generateMetadata = async ({ params: { id } }: Props) => {
	const foodDetail = await getFoodDetail(id);

	return {
		title: `TastyTreat - ${foodDetail.title}`
	};
};

export default page;
