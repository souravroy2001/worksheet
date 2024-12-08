//If I want to run this code than I have to step React Environment. Here I just showcasing how can we fix memory leaking

useEffect(() => {
  const timerID = setInterval(() => setSeconds(seconds + 1), 1000);

  // Cleanup function to clear the timer on unmount
  return () => clearInterval(timerID);
}, []);
