import Categories from "@/modules/Home/Categories";
import Hero from "@/modules/Home/Hero";
import HotPizza from "@/modules/Home/HotPizza";
import PopularFoods from "@/modules/Home/PopularFoods";
import Services from "@/modules/Home/Services";
import Testimonials from "@/modules/Home/Testimonials";
import WhyUs from "@/modules/Home/WhyUs";
import { getPopularFoods, getHotPizza, getTestimonials } from "@/utils/crud";

export const revalidate = 3600;

export const metadata = {
	title: "TastyTreat",
	description: "HUNGRY? Just wait food at your door!",
	icons: {
		icon: "/favicon.ico"
	}
};

const page = async () => {
	const [foods, hotPizza, testimonials] = await Promise.all([getPopularFoods(), getHotPizza(), getTestimonials()]);

	return (
		<>
			<Hero />
			<Categories />
			<Services />
			<PopularFoods foods={foods} />
			<WhyUs />
			<HotPizza foods={hotPizza} />
			<Testimonials testimonials={testimonials} />
		</>
	);
};

export default page;
