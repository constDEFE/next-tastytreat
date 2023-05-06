declare type Filter = "all" | "burger" | "pizza" | "bread";
declare type Tab = "desc" | "review";
declare type Sort = "default" | "a-z" | "z-a" | "high" | "low";

declare interface Search {
	query: string;
	sort: Sort;
}
