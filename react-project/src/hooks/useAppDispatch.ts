import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { store } from '../store/store';

type AppDispatch = typeof store.dispatch;

const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { useTypeSelector, useAppDispatch };
