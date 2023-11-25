import { ISearchResultsProps } from "@/types";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

export default function SearchResults({
	isSearchFetching,
	searchedPosts,
}: ISearchResultsProps) {
	if (isSearchFetching) return <Loader />;

	if (searchedPosts && searchedPosts.documents.length > 0)
		return <GridPostList posts={searchedPosts.documents} />;

	return (
		<p className="text-light-4 mt-10 text-center w-full">
			No Results Found
		</p>
	);
}
