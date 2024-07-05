import { getPublicOrderStatus } from './src/orderStatusMapper.js';

console.log(`created will be shown to customer as ${getPublicOrderStatus('created')}`);
console.log(`out_for_delivery will be shown to customer as ${getPublicOrderStatus('out_for_delivery')}`);
console.log(`delivered will be shown to customer as ${getPublicOrderStatus('delivered')}`);