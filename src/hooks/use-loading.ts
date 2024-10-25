import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState<Error | null>(null);

  const pending = () => {
    setLoading(true);
    setLoadingError(null);
  };
  const reject = (error: Error) => {
    setLoading(false);
    setLoadingError(error);
  };
  const fulfilled = () => setLoading(false);
  return {
    loading,
    loadingError,
    pending,
    reject,
    fulfilled,
  };
};

export { useLoading };
