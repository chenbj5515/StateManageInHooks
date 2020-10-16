import {manager} from '../App';

setInterval(() => {
    manager.setCount(count => count + 1);
}, 1000);