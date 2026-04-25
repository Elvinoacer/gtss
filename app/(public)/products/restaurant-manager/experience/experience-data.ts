export interface ExperienceAsset {
  id: string;
  type: 'video' | 'image' | 'youtube';
  url: string;
  thumbnail?: string;
  title?: string;
  description?: string;
}

export const experienceAssets: Record<string, ExperienceAsset> = {
  // GUEST / CLIENT SIDE
  'guest-hero': {
    id: 'guest-hero',
    type: 'youtube',
    url: 'https://www.youtube.com/watch?v=G6AcleSeoKE',
    title: 'Client Experience',
    description: 'A comprehensive walkthrough of the guest journey, from menu browsing to real-time order tracking and M-Pesa payment integration.'
  },
  'guest-landing': {
    id: 'guest-landing',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientlandinginterface.jpeg',
    title: 'Guest Landing Interface',
    description: 'The primary welcome screen for guests, featuring quick access to the menu, retail shop, and active orders.'
  },
  'guest-menu': {
    id: 'guest-menu',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientlandingmenu.jpeg',
    title: 'Digital Menu Explorer',
    description: 'A rich, category-based menu browser allowing guests to explore food and beverage options with high-quality imagery.'
  },
  'guest-cart': {
    id: 'guest-cart',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientmainmenucart.jpeg',
    title: 'Shopping Cart',
    description: 'Real-time cart management with item summaries, price totals, and table number assignment.'
  },
  'guest-item-detail': {
    id: 'guest-item-detail',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientmenuitemmodal2.jpeg',
    title: 'Menu Item Details',
    description: 'Detailed view of a specific dish, including descriptions, nutritional info, and customization options.'
  },
  'guest-item-customize': {
    id: 'guest-item-customize',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientmenuitemodal.jpeg',
    title: 'Item Customization',
    description: 'Interface for selecting add-ons, modifiers, and special instructions for kitchen preparation.'
  },
  'guest-orders': {
    id: 'guest-orders',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientorders.jpeg',
    title: 'Active Orders',
    description: 'A live tracking board for the guest, showing the progress of their orders from Preparation to Delivered.'
  },
  'guest-payment': {
    id: 'guest-payment',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientpaymentmodal.jpeg',
    title: 'Payment Gateway',
    description: 'Integrated checkout modal supporting M-Pesa STK Push and other local payment methods.'
  },
  'guest-bills': {
    id: 'guest-bills',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientbills.jpeg',
    title: 'Bill Management',
    description: 'Detailed breakdown of all table charges, including individual item prices and service fees.'
  },
  'guest-help': {
    id: 'guest-help',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clienthelp.jpeg',
    title: 'Guest Assistance',
    description: 'Direct support interface for raising issues, requesting water, or calling a waiter to the table.'
  },
  'guest-info-top': {
    id: 'guest-info-top',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientinfotop.jpeg',
    title: 'Restaurant Profile',
    description: 'Overview of the establishment, including location details, opening hours, and contact information.'
  },
  'guest-info-amenities': {
    id: 'guest-info-amenities',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientinfoamenities.jpeg',
    title: 'Amenities & Features',
    description: 'List of available services such as WiFi passwords, parking, and specific hotel amenities.'
  },
  'guest-retail-menu': {
    id: 'guest-retail-menu',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientretailmenu.jpeg',
    title: 'Retail Commerce',
    description: 'Integrated e-commerce section for purchasing local goods, souvenirs, or room essentials.'
  },
  'guest-retail-categories': {
    id: 'guest-retail-categories',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientretailcategories.jpeg',
    title: 'Retail Categories',
    description: 'Organized product groups for the retail shop, enabling quick discovery of non-food items.'
  },
  'guest-retail-cart': {
    id: 'guest-retail-cart',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/client/clientretailcart.jpeg',
    title: 'Retail Checkout',
    description: 'Dedicated cart and checkout flow for retail purchases, separate from restaurant orders.'
  },

  // WAITER ROLE
  'waiter-main': {
    id: 'waiter-main',
    type: 'youtube',
    url: 'https://www.youtube.com/shorts/4AtD-b8CZCc',
    title: 'Waiter Interface',
    description: 'Live demonstration of the mobile-optimized waiter dashboard, showing order assignments and real-time status updates.'
  },
  'waiter-login': {
    id: 'waiter-login',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiterlogin.jpeg',
    title: 'Waiter Login',
    description: 'Secure, authenticated entry point for waiter staff. Features session persistence and encrypted credential handling.'
  },
  'waiter-dashboard': {
    id: 'waiter-dashboard',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiterlive.jpeg',
    title: 'Waiter Dashboard',
    description: 'The central hub for waiters, displaying live assigned orders, unassigned tasks, and team workload metrics.'
  },
  'waiter-team': {
    id: 'waiter-team',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiterloadss.jpeg',
    title: 'Team Workload',
    description: 'A transparent view of active waiter loads across the floor, enabling better resource distribution and management oversight.'
  },
  'waiter-alerts': {
    id: 'waiter-alerts',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiteralerts.jpeg',
    title: 'Alert Configuration',
    description: 'Detailed settings for sound and vibration alerts, ensuring waiters never miss a kitchen update or new assignment.'
  },
  'waiter-chat': {
    id: 'waiter-chat',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/chats.jpeg',
    title: 'Staff Chat',
    description: 'Real-time internal messaging between waiters and admin staff for seamless floor-to-office communication.'
  },
  'waiter-recent': {
    id: 'waiter-recent',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiterecent.jpeg',
    title: 'Recent Assignments',
    description: 'A live feed of the most recently assigned orders, allowing for quick recall of table status and priority.'
  },
  'waiter-history': {
    id: 'waiter-history',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiterpastorders.jpeg',
    title: 'Order History',
    description: 'Access to archived shift data and completed orders for performance tracking and reconciliation.'
  },
  'waiter-queue': {
    id: 'waiter-queue',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/waiterscreens/waiterquetools.jpeg',
    title: 'Queue Tools',
    description: 'Advanced bulk operations for managing large volumes of orders, including multi-select status transitions.'
  },

  // KITCHEN ROLE
  'kitchen-kanban': {
    id: 'kitchen-kanban',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/kitchen.png',
    title: 'Kitchen Kanban Board',
    description: 'A high-visibility status board that organizes kitchen flow into Preparing, Ready, and Delivered columns with live timers.'
  },
  'kitchen-list': {
    id: 'kitchen-list',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/kitchenorders.png',
    title: 'Kitchen List View',
    description: 'A compact, list-based view optimized for tracking individual item prep requirements and bulk action triggers.'
  },

  // ADMIN ROLE - DASHBOARD & PAYMENTS
  'admin-dash-1': {
    id: 'admin-dash-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admindash1.png',
    title: 'Admin Operations Dashboard',
    description: 'Executive overview of real-time restaurant performance, active orders, and system status.'
  },
  'admin-dash-2': {
    id: 'admin-dash-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admindash2.png',
    title: 'Secondary Insights Board',
    description: 'Extended dashboard view with granular operational metrics and quick-action triggers.'
  },
  'admin-dash-payments': {
    id: 'admin-dash-payments',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admindashpayments.png',
    title: 'Payment Reconciliation Board',
    description: 'Centralized monitor for tracking M-Pesa transactions, manual payments, and pending settlement status.'
  },
  'admin-end-of-day': {
    id: 'admin-end-of-day',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminendofday.png',
    title: 'End of Day Report',
    description: 'Automated shift closure interface summarizing total sales, commissions, and transaction volume.'
  },

  // ADMIN ROLE - MENU & CATALOG
  'admin-menu-categories-1': {
    id: 'admin-menu-categories-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admin_menucategories1.png',
    title: 'Menu Structure Management',
    description: 'Hierarchical organization of food and beverage categories with drag-and-drop ordering.'
  },
  'admin-menu-categories-2': {
    id: 'admin-menu-categories-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admin_menucategories2.png',
    title: 'Category Content Editor',
    description: 'Detailed configuration for menu groups, including availability toggles and visual assets.'
  },
  'admin-menu-items-1': {
    id: 'admin-menu-items-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admin_menuitems1.png',
    title: 'Master Product Catalog',
    description: 'Centralized repository for all restaurant offerings, featuring bulk price updates and inventory sync.'
  },
  'admin-menu-items-2': {
    id: 'admin-menu-items-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminmenuitems2.png',
    title: 'Item Detail Workbench',
    description: 'Granular control over specific items, including ingredients, allergens, and preparation notes.'
  },
  'admin-retail-catalog-categories': {
    id: 'admin-retail-catalog-categories',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminretail-catalogcategories.png',
    title: 'Retail Category Manager',
    description: 'Specialized editor for retail-specific product groupings and shop organization.'
  },
  'admin-retail-catalog-products': {
    id: 'admin-retail-catalog-products',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminretail-catalogproducts.png',
    title: 'Retail Product Listing',
    description: 'Management interface for physical goods, including stock levels and retail pricing models.'
  },
  'admin-retail-catalog-services': {
    id: 'admin-retail-catalog-services',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminretail-catalogservices.png',
    title: 'Service Catalog Editor',
    description: 'Configuration for non-physical offerings such as WiFi access or hotel amenities.'
  },
  'admin-retail-1': {
    id: 'admin-retail-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminretail1.png',
    title: 'Retail Operations Hub',
    description: 'Primary workspace for managing the retail storefront and service delivery flow.'
  },
  'admin-retail-orders': {
    id: 'admin-retail-orders',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminretailorders.png',
    title: 'Retail Order Board',
    description: 'Live tracking of retail-specific purchases, independent of the restaurant kitchen flow.'
  },

  // ADMIN ROLE - ANALYTICS
  'admin-analytics-1': {
    id: 'admin-analytics-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminanalytics1.png',
    title: 'Financial Performance Analytics',
    description: 'Visual breakdown of revenue streams, profit margins, and peak transaction windows.'
  },
  'admin-analytics-2': {
    id: 'admin-analytics-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminanalytics2.png',
    title: 'Operational Efficiency Metrics',
    description: 'Data tracking for preparation times, delivery speeds, and table turnover rates.'
  },
  'admin-analytics-3': {
    id: 'admin-analytics-3',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminanalytics3.png',
    title: 'Customer Behavior Insights',
    description: 'Analysis of popular items, repeat visit patterns, and service type preferences.'
  },
  'admin-export-1': {
    id: 'admin-export-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminexport1.png',
    title: 'Data Export Engine · CSV',
    description: 'Interface for generating detailed CSV reports for external accounting and audit.'
  },
  'admin-export-2': {
    id: 'admin-export-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminexport2.png',
    title: 'Financial Statement Export',
    description: 'Specialized export for bank reconciliation and tax compliance documentation.'
  },
  'admin-export-3': {
    id: 'admin-export-3',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminexport3.png',
    title: 'Staff Performance Export',
    description: 'Metrics-based export for calculating commissions and evaluating staff efficiency.'
  },
  'admin-export-4': {
    id: 'admin-export-4',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminexport4.png',
    title: 'Inventory Audit Export',
    description: 'Comprehensive listing of stock movements and variance reports for inventory control.'
  },

  // ADMIN ROLE - OPERATIONS
  'admin-customers-1': {
    id: 'admin-customers-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admincustomers1.png',
    title: 'Customer Directory',
    description: 'Master list of restaurant guests, including preferences, order history, and loyalty status.'
  },
  'admin-customers-2': {
    id: 'admin-customers-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admincustomers2.png',
    title: 'Customer Engagement Profile',
    description: 'Deep-dive into individual customer interactions and lifetime value metrics.'
  },
  'admin-customers-3': {
    id: 'admin-customers-3',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admincustomers3.png',
    title: 'Guest Segmentation Board',
    description: 'Grouping tools for targeted promotions and VIP service prioritization.'
  },
  'admin-staff-monitor': {
    id: 'admin-staff-monitor',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminstaffmonitor.png',
    title: 'Real-time Staff Monitor',
    description: 'Live view of active staff, current assignments, and individual preparation queues.'
  },
  'admin-messages': {
    id: 'admin-messages',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminmessages.png',
    title: 'Internal Communications Hub',
    description: 'Unified workspace for managing internal staff chats and inter-departmental memos.'
  },
  'admin-notifications': {
    id: 'admin-notifications',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminnotifications.png',
    title: 'System Notification Center',
    description: 'Log of all automated system alerts, from stock warnings to payment confirmations.'
  },
  'admin-issues': {
    id: 'admin-issues',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminissues.png',
    title: 'Incident Management Board',
    description: 'Ticketing system for tracking and resolving guest-raised issues and table requests.'
  },

  // ADMIN ROLE - SETTINGS
  'admin-settings-general-1': {
    id: 'admin-settings-general-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsgeneral1.png',
    title: 'Core Business Settings',
    description: 'Configuration for restaurant identity, operating hours, and base system preferences.'
  },
  'admin-settings-general-2': {
    id: 'admin-settings-general-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsgeneral2.png',
    title: 'Operational Logic Config',
    description: 'Fine-tuning for order routing, preparation timers, and delivery distance parameters.'
  },
  'admin-settings-general-3': {
    id: 'admin-settings-general-3',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsgeneral3.png',
    title: 'UI & Localization Settings',
    description: 'Branding controls, language options, and currency display configurations.'
  },
  'admin-settings-payments-1': {
    id: 'admin-settings-payments-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingspayments1.png',
    title: 'Payment Provider Config',
    description: 'Direct integration settings for M-Pesa, bank gateways, and manual payment verification.'
  },
  'admin-settings-payments-2': {
    id: 'admin-settings-payments-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingspayments2.png',
    title: 'Tax & Fee Structure',
    description: 'Detailed setup for VAT, service charges, and automated commission calculations.'
  },
  'admin-settings-team-1': {
    id: 'admin-settings-team-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsteam.png',
    title: 'Role-Based Access Control',
    description: 'User management interface for defining permissions and access levels across the system.'
  },
  'admin-settings-team-2': {
    id: 'admin-settings-team-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsteam2.png',
    title: 'Staff Credential Manager',
    description: 'Security portal for managing staff logins, reset requests, and audit logs.'
  },
  'admin-settings-gallery': {
    id: 'admin-settings-gallery',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsgallery.png',
    title: 'Central Media Library',
    description: 'Storage hub for all restaurant imagery, product photos, and branding assets.'
  },
  'admin-integrations-1': {
    id: 'admin-integrations-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminintegrations.png',
    title: 'Third-Party Webhooks',
    description: 'Configuration for external service connections, POS sync, and data relays.'
  },
  'admin-integrations-2': {
    id: 'admin-integrations-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminintegrations2.png',
    title: 'API & Developer Portal',
    description: 'Access tokens and documentation for custom enterprise integrations.'
  },

  // ADMIN ROLE - INFRASTRUCTURE
  'admin-settings-qrcodes': {
    id: 'admin-settings-qrcodes',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminsettingsqrcodes.png',
    title: 'Table QR Generator',
    description: 'Automated engine for generating secure, table-specific QR codes with dynamic routing.'
  },
  'admin-launcher-qrs': {
    id: 'admin-launcher-qrs',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/launcher_qrs.png',
    title: 'System Launcher Nodes',
    description: 'Infrastructure-level QR mapping for system entry points and staff authentication.'
  },
  'admin-audit-logs': {
    id: 'admin-audit-logs',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminauditlogs.png',
    title: 'System Audit Trail',
    description: 'Immuttable log of all system actions, user logins, and critical state changes.'
  },
  'admin-archives': {
    id: 'admin-archives',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/adminarchives.png',
    title: 'Historical Data Archives',
    description: 'Long-term storage and retrieval for past shift data and compliance records.'
  },

  // ADMIN ROLE - SPACE
  'admin-table-occupancy-1': {
    id: 'admin-table-occupancy-1',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admintableoccupancy1.png',
    title: 'Live Floor Map',
    description: 'Visual representation of the restaurant floor showing active table sessions and waiter assignments.'
  },
  'admin-table-occupancy-2': {
    id: 'admin-table-occupancy-2',
    type: 'image',
    url: 'https://justintime.sfo3.digitaloceanspaces.com/gtss/adminscreens/admintableoccupancy2.png',
    title: 'Session Management Board',
    description: 'Control center for opening/closing tables and managing seat-specific order flows.'
  },

  'admin-main': {
    id: 'admin-main',
    type: 'youtube',
    url: '',
    title: 'Admin Console Workspace',
    description: 'A comprehensive management suite designed for total operational control, from financial analytics to real-time space management.'
  }
};
