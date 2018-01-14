'use strict';

module.exports = {
  'get_basic_info': [],
  'get_tx_ids': [],
  'get_deposit_address': ['currency'],
  'get_callback_address': ['currency'],
  'create_transfer': ['amount', 'currency', ['merchant', 'pbntag']],
  'convert': ['amount', 'from', 'to'],
  'get_withdrawal_history': [],
  'get_conversion_info': ['id'],
  'get_pbn_info': ['pbntag'],
  'get_pbn_list': [],
  'update_pbn_tag': ['tagid'],
  'claim_pbn_tag': ['tagid', 'name'],
  'get_withdrawal_info': ['id'],
  'get_tx_info': ['txid'],
  'get_tx_info_multi': ['txid'],
  'create_withdrawal': ['amount', 'currency', 'address'],
  'create_mass_withdrawal': [],
  'create_transaction': ['amount', 'currency1', 'currency2'],
  'rates': [],
  'balances': []
};