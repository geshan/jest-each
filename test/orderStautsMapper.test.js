import { getCustomerOrderStatus } from '../src/orderStatusMapper.js';

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
    expect(getCustomerOrderStatus('unknown')).toBe('processing');
  });

  it('should return user status processing for creaetd', () => {
    expect(getCustomerOrderStatus('created')).toBe('processing');
  });

  it('should return user status shipped for out for delivery', () => {
    expect(getCustomerOrderStatus('out_for_delivery')).toBe('shipped');
  });

  it('should return user status delivered for out for delivered', () => {
    expect(getCustomerOrderStatus('delivered')).toBe('delivered');
  });

  //now with each

  it.each(orderStatuses)('For %s it should return %s ', (input, expected) => {
    expect(getCustomerOrderStatus(input)).toBe(expected);
  });

  test.each(orderStatuses)('For %s it should show %s', (input, expected) => {
    expect(getCustomerOrderStatus(input)).toBe(expected);
  });

  //tagged template literals each

  it.each`
    input              | expected
    ${'unknown'}       | ${'processing'}
    ${'created'}       | ${'processing'}
    ${'sent_to_warehouse'} | ${'processing'}
    ${'picked_at_warehouse'} | ${'processing'}
    ${'sent_to_courier'} | ${'processing'}
    ${'picked_up_by_courier'} | ${'shipped'}
    ${'out_for_delivery'} | ${'shipped'}
    ${'delivered'} | ${'delivered'}
  `('should return with template - $expected for $input', ({ input, expected }) => {
    expect(getCustomerOrderStatus(input)).toBe(expected);
  });
});
