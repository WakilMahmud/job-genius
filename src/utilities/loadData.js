const loadData = async () => {
	const loadedJobCategories = await fetch("/JobCategories.json");
	const jobCategories = await loadedJobCategories.json();

	const loadedFeaturedJobs = await fetch("/FeaturedJobs.json");
	const featuredJobs = await loadedFeaturedJobs.json();

	return { jobCategories, featuredJobs };
};

export default loadData;
