import React from 'react';
//redux demo
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../redux/DownCouterSlice';


const SponsorsPage = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center p-6 space-y-4">
        <h1 className="text-4xl font-bold bg-gray-300 w-3/4 mx-auto py-2">Sponsors</h1>
        <p className="text-lg bg-gray-300 w-1/2 mx-auto py-2">They gave Money</p>
      </div>
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    </div>
  );
};

export default SponsorsPage;
