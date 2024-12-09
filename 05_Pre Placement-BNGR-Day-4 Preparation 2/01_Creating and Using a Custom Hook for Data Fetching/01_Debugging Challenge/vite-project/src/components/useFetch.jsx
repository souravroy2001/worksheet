import { useState, useEffect } from "react";

/**
 * Custom Hook: useFetch
 * Handles data fetching with support for dynamic URL updates, error handling,
 * and request cancellation using AbortController.
 */
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // AbortController for canceling requests
    const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { ...options, signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel in-progress requests
    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
