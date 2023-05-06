import AllFoods from "@/modules/Foods/AllFoods";
import PageHeader from "@/shared/PageHeader";
import { getAllFoods } from "@/utils/crud";

export const revalidate = 3600;

export const metadata = {
	title: "TastyTreat - Foods"
};

const page = async () => {
	const foods = await getAllFoods();

	return (
		<>
			<PageHeader title="All Foods" />
			<AllFoods foods={foods} />
		</>
	);
};

export default page;
