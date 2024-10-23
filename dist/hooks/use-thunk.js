import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
const useLoading = () => {
    const [loading, setLoading] = useState(false);
    const [loadingError, setLoadingError] = useState(null);
    const pending = () => {
        setLoading(true);
        setLoadingError(null);
    };
    const reject = (error) => {
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
const useThunk = (thunk) => {
    const loading = useLoading();
    const dispatch = useDispatch();
    const runThunk = useCallback(() => {
        loading.pending();
        dispatch(thunk())
            .unwrap()
            .then(() => loading.fulfilled())
            .catch((error) => loading.reject(error));
    }, [dispatch, thunk]);
    return [runThunk, loading.loading, loading.loadingError];
};
const useThunkWithArg = (thunk) => {
    const loading = useLoading();
    const dispatch = useDispatch();
    const runThunkWithArg = useCallback((arg) => {
        loading.pending();
        dispatch(thunk(arg))
            .unwrap()
            .then(() => loading.fulfilled())
            .catch((error) => loading.reject(error));
    }, [dispatch, thunk]);
    return [runThunkWithArg, loading.loading, loading.loadingError];
};
export { useLoading, useThunk, useThunkWithArg };
//# sourceMappingURL=use-thunk.js.map