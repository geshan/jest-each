import { getCustomerOrderStatus } from './src/orderStatusMapper.js';

console.log(`created will be shown to customer as ${getCustomerOrderStatus('created')}`);
console.log(`out_for_delivery will be shown to customer as ${getCustomerOrderStatus('out_for_delivery')}`);
console.log(`delivered will be shown to customer as ${getCustomerOrderStatus('delivered')}`);
