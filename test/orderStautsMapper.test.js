import { getPublicOrderStatus } from '../src/orderStatusMapper.js';

const orderStatuses = [
  ['created', 'processing'],
  ['sent_to_warehouse', 'processing'],
  ['picked_at_warehouse', 'processing'],
  ['sent_to_courier', 'processing'],
  ['picked_up_by_courier', 'shipped'],
  ['out_for_delivery', 'shipped'],
  ['delivered', 'delivered'],
];

describe('orderStatusMapper', () => {
  it('should return processing for creaetd', () => {
    expect(getPublicOrderStatus('created')).toBe('processing');
  });

  it('should return shipped for out for delivery', () => {
    expect(getPublicOrderStatus('out_for_delivery')).toBe('shipped');
  });

  it('should return delivered for out for delivered', () => {
    expect(getPublicOrderStatus('delivered')).toBe('delivered');
  });

  //now with each

  it.each(orderStatuses)('should return %s for %s', (input, expected) => {
    expect(getPublicOrderStatus(input)).toBe(expected);
  });

  it.each(orderStatuses)('should show %s for %s', (input, expected) => {
    expect(getPublicOrderStatus(input)).toBe(expected);
  });
});
