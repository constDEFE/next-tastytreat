import { collection, doc, getDoc, query, updateDoc, where, limit, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const addReview = async (food: Food, review: Review) => {
	await updateDoc(doc(db, "foods", String(food.id)), {
		reviews: [...food.reviews, review]
	});

	return review;
};

export const getFoodDetail = async (id: string): Promise<FoodDetail> => {
	const q = doc(db, "foods", id);
	const snap = await getDoc(q);
	const food = snap.data() as Food;
	const reviews = food.reviews.map((review, i) => (i < 4 ? review : null)) as Review[];

	const relatedQ = query(collection(db, "foods"), where("category", "==", food.category), limit(4));
	const { docs: snaps } = await getDocs(relatedQ);
	const related = snaps.map((snap) => snap.data()) as Food[];
	const filteredRelated = related.filter((item) => String(item.id) !== id);

	return {
		...food,
		reviews,
		related: filteredRelated
	};
};

export const getAllFoods = async () => {
	const q = query(collection(db, "foods"), limit(30));
	const { docs: foodsSnaps } = await getDocs(q);

	return foodsSnaps.map((snap) => snap.data()) as Food[];
};

export const getPopularFoods = async () => {
	const q = query(collection(db, "foods"), limit(8));
	const { docs: foodsSnaps } = await getDocs(q);

	return foodsSnaps.map((snap) => snap.data()) as Food[];
};

export const getHotPizza = async () => {
	const q = query(collection(db, "foods"), where("category", "==", "pizza"), limit(4));
	const { docs: pizzaSnaps } = await getDocs(q);

	return pizzaSnaps.map((snap) => snap.data()) as Food[];
};

export const getTestimonials = async () => {
	const q = query(collection(db, "testimonials"), limit(4));
	const { docs: testimonialsSnaps } = await getDocs(q);

	return testimonialsSnaps.map((snap) => snap.data()) as Testimonial[];
};
