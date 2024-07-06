export function getCustomerOrderStatus(interrnalStatus) {
  const processing = 'processing'

  const statusMap = {
    'created': processing,
    'sent_to_warehouse': processing,
    'picked_at_warehouse': processing,
    'sent_to_courier': processing,
    'picked_up_by_courier': 'shipped',
    'out_for_delivery': 'shipped',
    'delivered': 'delivered',
  };

  if (statusMap[interrnalStatus]) {
    return statusMap[interrnalStatus];
  }

  return processing;
}
