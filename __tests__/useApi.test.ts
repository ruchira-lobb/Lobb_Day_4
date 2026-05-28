import { renderHook } from '@testing-library/react';
import {useApi} from '../hooks/useApi';

describe('useApi Hook', () => {
    test('initiate with loading state', ()=>{
        const { result } = renderHook(() => useApi());
        expect(result.current.loading).toBe(true);
})
})