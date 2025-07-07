// utils/roles.js
export const rolePermissions = {
  admin: ['dashboard', 'manage', 'chargeback', 'refunds', 'reports', 'support'],
  manager: ['dashboard', 'manage', 'reports'],
  support: ['dashboard', 'support'],
  finance: ['dashboard', 'refunds', 'chargeback'],
};
