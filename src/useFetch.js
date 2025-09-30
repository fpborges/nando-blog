import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		setTimeout(() => {
			fetch(url, { signal: abortController.signal })
				.then((res) => {
					if (!res.ok) {
						throw new Error("Could not fetch the data for that resource");
					}
					return res.json();
				})
				.then((data) => {
					setData(data);
					setIsPending(false);
					setError(null);
				})
				.catch((err) => {
					if (err.name === "AbortError") {
						console.log("Fetch aborted");
					} else {
						setIsPending(false);
						setError("Could not fetch the data");
						console.log(err.message);
					}
				});
		}, 1000);

		// Cleanup function to abort fetch if the component unmounts
		return () => abortController.abort();
	}, [url]); // Added 'url' as a dependency

	return { data, isPending, error };
};

export default useFetch;
