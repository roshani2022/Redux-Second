import { useSelector,useDispatch } from 'react-redux';

import { counterAction } from '../Store';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter)
  const show = useSelector(state=>state.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterAction.increment(5))
  };

  const decrementHandler = () => {
    dispatch(counterAction.decrement(3))
  };

  const increaseHandler = () => {
    dispatch(counterAction.increase())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement By 3</button>
        <button onClick={increaseHandler}>Increses</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
