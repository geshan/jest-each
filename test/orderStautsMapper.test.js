import { getPublicOrderStatus } from '../src/orderStatusMapper.js';

const orderStatuses = [
  ['unknown', 'processing'],
  ['created', 'processing'],
  ['sent_to_warehouse', 'processing'],
  ['picked_at_warehouse', 'processing'],
  ['sent_to_courier', 'processing'],
  ['picked_up_by_courier', 'shipped'],
  ['out_for_delivery', 'shipped'],
  ['delivered', 'delivered'],
];

describe('orderStatusMapper', () => {
  it('should return user status processing for unknown status', () => {
    expect(getPublicOrderStatus('unknown')).toBe('processing');
  });

  it('should return user status processing for creaetd', () => {
    expect(getPublicOrderStatus('created')).toBe('processing');
  });

  it('should return user status shipped for out for delivery', () => {
    expect(getPublicOrderStatus('out_for_delivery')).toBe('shipped');
  });

  it('should return user status delivered for out for delivered', () => {
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
