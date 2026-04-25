# Screen, Action, and Role Inventory

## Scope

- This inventory is source-verified from route files, page components, and shared modal and drawer components.
- It covers route screens and non-route action surfaces (modals, drawers, banners).
- It includes current React app surfaces and legacy HTML surfaces.

## Role Key

- PUBLIC: no authenticated staff session required.
- GUEST: customer device flow in client and retail UI.
- WAITER: waiter staff flow.
- KITCHEN: kitchen staff flow.
- ADMIN: admin operations UI.
- STAFF: generic staff access where code does not enforce one role in the page component.

## Route Screen Index

| Path                         | Screen                      | Intended role             | Notes                                                     |
| ---------------------------- | --------------------------- | ------------------------- | --------------------------------------------------------- |
| /admin/login                 | AdminLogin                  | PUBLIC                    | Staff login entry point for admin, waiter, kitchen users. |
| /admin                       | AdminDashboard              | ADMIN                     | Admin main operations lane dashboard.                     |
| /admin/kitchen               | KitchenDisplay              | ADMIN                     | Admin kitchen board view.                                 |
| /admin/menu                  | MenuManagement              | ADMIN                     | Menu studio wrapper (categories and items).               |
| /admin/issues                | IssueManagement             | ADMIN                     | Customer issue response center.                           |
| /admin/notifications         | NotificationManagement      | ADMIN                     | Guest broadcast center.                                   |
| /admin/monitor               | WaiterMonitoring            | ADMIN                     | Waiter activity and reassignment monitor.                 |
| /admin/messages              | AdminMessages               | ADMIN                     | Admin to staff chat workspace.                            |
| /admin/table-occupancy       | TableOccupancy              | ADMIN                     | Live table occupancy board.                               |
| /admin/archives              | Archives                    | ADMIN                     | Report archives and downloads.                            |
| /admin/customers             | CustomerManagement          | ADMIN                     | Customer profile and history management.                  |
| /admin/retail                | RetailDashboard             | ADMIN                     | Retail operations dashboard.                              |
| /admin/retail-catalog        | RetailCatalogManager        | ADMIN                     | Retail types, categories, products management.            |
| /admin/retail-orders         | RetailOrderManagement       | ADMIN                     | Retail order processing and bulk actions.                 |
| /admin/analytics             | AnalyticsDashboard          | ADMIN                     | Analytics and financial report page.                      |
| /admin/audit                 | AuditLogsPage               | ADMIN                     | Audit trail and payload viewer.                           |
| /admin/integrations          | IntegrationsPage            | ADMIN                     | External integrations management.                         |
| /admin/settings              | SettingsPage                | ADMIN                     | Hotel settings center with tabs.                          |
| /admin/hotel-settings        | HotelSettings               | ADMIN                     | Legacy hotel settings page.                               |
| /admin/data-export           | DataExport                  | ADMIN                     | Export center for sales, orders, issues, feedback.        |
| /                            | ClientHome                  | GUEST                     | Guest food ordering home.                                 |
| /orders                      | OrderTracking               | GUEST                     | Guest order tracking and pay/verify entry.                |
| /bill                        | BillStatus                  | GUEST                     | Guest bill and payment status page.                       |
| /info                        | HotelInfo                   | GUEST and PUBLIC          | Hotel information and team gallery.                       |
| /help                        | RaiseIssue                  | GUEST                     | Guest issue submission page.                              |
| /categories                  | CategoriesPage              | GUEST                     | Food category browser.                                    |
| /category/:id                | CategoryItemsPage           | GUEST                     | Food items list by category.                              |
| /retail                      | RetailHome                  | GUEST                     | Retail storefront home.                                   |
| /retail/type/:typeId         | RetailCategoryPage          | GUEST                     | Retail categories by service type.                        |
| /retail/category/:categoryId | RetailProductsPage          | GUEST                     | Retail products by category.                              |
| /retail/product/:productId   | RetailProductDetail         | GUEST                     | Retail product detail and add flow.                       |
| /retail/order/:orderId       | RetailOrderStatus           | GUEST                     | Retail order status timeline page.                        |
| /retail/checkout             | RetailCheckout              | GUEST                     | Retail checkout and payment flow.                         |
| /retail-orders               | RetailOrders                | GUEST                     | Guest retail orders list.                                 |
| /waiter                      | WaiterLogin                 | PUBLIC                    | Waiter sign-in page.                                      |
| /waiter/dashboard            | WaiterDashboard             | WAITER                    | Waiter operations and chat dashboard.                     |
| /kitchen                     | KitchenPage                 | KITCHEN and STAFF         | Kitchen board for active food orders.                     |
| admin.html                   | Legacy Admin Messages Page  | ADMIN and PUBLIC (legacy) | Legacy static page for viewing guest messages.            |
| portal.html                  | Legacy Guest Message Portal | PUBLIC                    | Legacy static guest message submission page.              |

## Global Shell Screens

### ClientLayout - Role: GUEST

Actions:

1. Joins customer table socket room based on active customer order table.
2. Re-joins table room on socket reconnect.
3. Shows bottom navigation tabs for Menu, Shop, Orders, Bill, Info, Help.
4. Routes tab clicks to corresponding guest screens.
5. Mounts shared guest action surfaces: NotificationBanner, CartDrawer, RetailCartDrawer, RetailFloatingCart.

### AdminLayout - Role: ADMIN (auth-required shell)

Actions:

1. Enforces authenticated access and redirects unauthenticated users to admin login.
2. Loads and refreshes pending orders and unresolved issue badge counts.
3. Tracks and displays unseen new order count while off dashboard.
4. Handles sidebar collapse, mobile nav open and close, and keyboard escape behavior.
5. Provides global nav search over admin pages.
6. Shows current page hero context and quick action links.
7. Shows connection state and refreshes counts from socket events.
8. Performs logout.

## Authentication and Entry Screens

### AdminLogin - Role: PUBLIC

Actions:

1. Username and password sign-in via auth API.
2. Show and hide password.
3. Redirect by role after login.
4. For waiter role, stores waiter session and staff token before redirecting to waiter dashboard.
5. For kitchen role, redirects to kitchen page.
6. For admin role, redirects to admin dashboard.

### WaiterLogin - Role: PUBLIC

Actions:

1. Auto-redirects to waiter dashboard when waiter session exists.
2. Username and password sign-in via staff login endpoint.
3. Stores staff token and waiter session on success.
4. Show and hide password.
5. Redirect to waiter dashboard on success.

### Legacy Guest Portal (portal.html) - Role: PUBLIC

Actions:

1. Collect name, email, and message.
2. Submit guest message to portal message endpoint.
3. Show success or error alert.
4. Reset form after success.

### Legacy Admin Guest Messages (admin.html) - Role: ADMIN and PUBLIC (legacy)

Actions:

1. Fetch and render guest message list.
2. Show total message count.
3. Auto-refresh every 30 seconds.
4. Show empty and error states.

## Guest Food Screens

### ClientHome - Route: / - Role: GUEST

Actions:

1. Search menu items with debounce.
2. Filter by category chip.
3. Toggle offers-only view.
4. Clear all active filters.
5. Infinite scroll loading for menu item pages.
6. Open item detail modal from menu cards.
7. Navigate to categories page.
8. Open cart drawer from cart icon.
9. Open and inspect popular items.
10. Open and inspect personalized recommendations.

### CategoriesPage - Route: /categories - Role: GUEST

Actions:

1. Search categories by name.
2. Open category item page by category card click.
3. Navigate back to home.

### CategoryItemsPage - Route: /category/:id - Role: GUEST

Actions:

1. Search items within selected category with debounce.
2. Infinite scroll category items.
3. Open food detail modal from item card.
4. Add selected item to cart from modal.
5. Open cart via cart icon.
6. Navigate back to categories.

### OrderTracking - Route: /orders - Role: GUEST

Actions:

1. Load and paginate customer orders with active and history tabs.
2. Filter order list by status.
3. Receive real-time order status updates via socket.
4. Display detailed order progress timeline per order.
5. Display staff message attached to order.
6. Open BillView for unpaid order payment and verification.
7. Show in-page toast notifications for payment and status events.

### BillStatus - Route: /bill - Role: GUEST

Actions:

1. Switch tabs across current orders, past unpaid, and past paid.
2. Load paginated order list per selected tab.
3. Display payment methods from settings when relevant.
4. Copy till, paybill, account, and phone payment details.
5. Open BillView modal for order payment and verification.
6. Use pagination controls to move pages.

### HotelInfo - Route: /info - Role: GUEST and PUBLIC

Actions:

1. Fetch and display hotel settings, gallery, and public staff data.
2. Show hotel hero, amenities, and contact cards.
3. Browse image gallery and staff cards.
4. Navigate back to home.
5. Navigate to waiter portal from staff access button.

### RaiseIssue - Route: /help - Role: GUEST

Actions:

1. Select predefined issue type.
2. Enter table number and optional detail message.
3. Submit issue to backend with customer id.
4. Show success state and auto-redirect to home.
5. Navigate back to home.

## Guest Retail Screens

### RetailHome - Route: /retail - Role: GUEST

Actions:

1. Search retail products by keyword.
2. Browse and open service types.
3. Open product details from popular cards and search results.
4. Quick add popular product to retail cart.
5. Open retail cart drawer from cart icon.
6. Navigate to service type categories.

### RetailCategoryPage - Route: /retail/type/:typeId - Role: GUEST

Actions:

1. View categories under selected service type.
2. Open category product list.
3. Navigate back to retail home.

### RetailProductsPage - Route: /retail/category/:categoryId - Role: GUEST

Actions:

1. Search products in selected category.
2. Open and close filter panel.
3. Sort products by default, price ascending, price descending, or name.
4. Toggle in-stock-only filter.
5. Open product detail page.
6. Quick add available product to cart.
7. Navigate back.

### RetailProductDetail - Route: /retail/product/:productId - Role: GUEST

Actions:

1. View product image gallery with next, previous, and dot navigation.
2. Choose quantity.
3. Select product variant.
4. Enter special instruction notes.
5. Add product to retail cart with quantity and selected options.
6. Navigate back.

### RetailCheckout - Route: /retail/checkout - Role: GUEST

Actions:

1. Review cart summary and totals.
2. Set delivery location.
3. Choose payment method (cash or M-Pesa when enabled).
4. Enter M-Pesa phone for STK flow.
5. Submit checkout request.
6. For cash: place order immediately and redirect to retail orders.
7. For M-Pesa: open processing modal, poll payment status, handle success and failure.
8. Retry M-Pesa payment when failed.
9. Cancel payment flow and return to idle state.

### RetailOrderStatus - Route: /retail/order/:orderId - Role: GUEST

Actions:

1. View live retail order status and progress timeline.
2. Receive real-time updates via socket and refetch order.
3. View ordered items and totals.
4. Open BillView when payment is not complete.
5. Continue shopping.
6. Navigate home.

### RetailOrders - Route: /retail-orders - Role: GUEST

Actions:

1. Switch between active and history tabs.
2. View retail order cards with status and unpaid markers.
3. Open order status page from card.
4. Trigger pay-now navigation for unpaid active orders.
5. Receive real-time order updates via socket.

## Staff Screens

### WaiterDashboard - Route: /waiter/dashboard - Role: WAITER

Actions:

1. Load waiter session and fetch assigned orders.
2. Listen for new assigned orders and status updates via socket.
3. Show live team balance snapshot with per-waiter active load, online status, and unassigned active totals.
4. Show realtime toast confirmation when an order is assigned to the logged-in waiter.
5. Configure notification preferences for order alerts and admin messages (sound, vibration, and system popup).
6. Request system notification permission and enable popup alerts when supported.
7. Show active, history, and chat tabs.
8. Search orders by id, table, and item text.
9. Filter active orders by item category.
10. Switch history between last-hour and older archive slices.
11. Toggle priority-based sorting.
12. Enable bulk mode, select multiple orders, and bulk advance same-status orders.
13. Expand and collapse order cards to reveal details.
14. Perform status transitions: accept, start preparing, mark ready, confirm delivery.
15. Confirm payment from expanded order when payment is pending.
16. Cancel order from confirmation modal.
17. Send and receive chat messages with admin.
18. Show unread chat indicator when not in chat tab.
19. Paginate order list.
20. Logout and clear waiter session and token.

### KitchenPage - Route: /kitchen - Role: KITCHEN and STAFF

Actions:

1. Load active kitchen orders.
2. Receive real-time new order and status updates via socket.
3. Toggle view mode between kanban and list.
4. Toggle sound notifications on and off.
5. Enable bulk mode, select orders, and bulk advance selected same-status orders.
6. Select all and unselect all orders in a status column.
7. Trigger per-column quick advance for all orders in a column.
8. Trigger per-order status transitions.
9. Display live per-order timer and urgency signal.
10. Exit to root route from header action.

## Admin Screens - Operations Section

### AdminDashboard - Route: /admin - Role: ADMIN

Actions:

1. Switch lane tabs: pending, accepted, preparing, ready, bills.
2. Apply bill payment status filter in bills lane.
3. Select orders per-row, per-page, or all filtered for bulk operations.
4. Bulk status transitions by lane.
5. Bulk payment confirmation in bills lane.
6. Clear bulk selection.
7. Trigger primary bulk action button for lane (selected or all in lane).
8. Navigate to staff messages and archives from header actions.
9. Run commission reconciliation from dashboard header with dry-run and apply confirmation.
10. Execute end-of-day close workflow and trigger report download.
11. Open waiter assignment and reassignment dropdown.
12. Apply per-order commission override before reassignment.
13. Send customer message via prompt.
14. Open and submit table change modal.
15. Run per-order status transitions through lane actions.
16. Mark payment as paid or partial from order payment card.
17. Copy payment message details where available.
18. Cancel order where allowed.
19. Use pagination controls.
20. View assignment pulse panel with live waiter-load spread, unassigned totals, and projected load cards.
21. View recent order-to-waiter assignment feed.
22. Receive realtime assignment toasts for auto-assignment, manual reassignment, and unassigned fallback states.
23. Auto-refresh state from socket events for new order, status updates, table change, assignment updates, and assignment overview updates.

### KitchenDisplay - Route: /admin/kitchen - Role: ADMIN

Actions:

1. Refresh active kitchen orders.
2. Filter by kitchen status.
3. Search by order id, table, and item name.
4. Sort by priority, elapsed time, or table number.
5. Promote order status through kitchen flow buttons.
6. Track urgency and elapsed preparation time.

### MenuManagement - Route: /admin/menu - Role: ADMIN

Actions:

1. Toggle workspace tab between Categories and Menu Items.
2. View category and item summary stats.
3. Enter CategoryList workspace.
4. Enter MenuItemList workspace.

### CategoryList - Embedded in /admin/menu - Role: ADMIN

Actions:

1. Search categories.
2. Open create category modal.
3. Open edit category modal.
4. Upload category image and preview image.
5. Submit create and update category forms.
6. Open delete confirmation dialog.
7. Delete category if allowed.
8. Surface blocked delete state when category has items.

### MenuItemList - Embedded in /admin/menu - Role: ADMIN

Actions:

1. Search menu items.
2. Filter by availability.
3. Filter by category.
4. Open create item modal.
5. Open edit item modal.
6. Edit full menu item data fields including pricing, prep, allergens, offers.
7. Toggle stock tracking and update stock values.
8. Upload main image and gallery images.
9. Toggle spicy flag.
10. Add, edit, and remove addons.
11. Toggle item availability in list.
12. Open delete confirmation and delete item.

### IssueManagement - Route: /admin/issues - Role: ADMIN

Actions:

1. Filter by all, open, resolved.
2. Filter by issue type.
3. Search by table, type, or message.
4. Resolve issue.
5. Delete issue with confirmation.
6. Receive real-time new issue invalidation and optional browser notification.

### NotificationManagement - Route: /admin/notifications - Role: ADMIN

Actions:

1. Filter broadcasts by all, active, inactive.
2. Search by title, message, and type.
3. Open and close broadcast creation form.
4. Set title, message, type, and expiry.
5. Submit broadcast creation.
6. Delete broadcast.
7. Refresh list automatically on interval.

### WaiterMonitoring - Route: /admin/monitor - Role: ADMIN

Actions:

1. Refresh waiter monitor data manually, on interval, and from assignment and order socket events.
2. View online and workload metrics.
3. View per-waiter active orders and progress.
4. Set per-order commission override input.
5. Reassign order to another waiter.
6. Run commission reconciliation dry-run for active waiter orders.
7. Confirm and apply commission reconciliation updates from the monitor toolbar.

### AdminMessages - Route: /admin/messages - Role: ADMIN

Actions:

1. Load staff list and conversation metadata.
2. Select staff member conversation.
3. Fetch conversation history.
4. Mark staff conversation as read.
5. Send admin message to selected staff member.
6. Receive live incoming and outgoing messages via socket.
7. Navigate back to admin dashboard.

### TableOccupancy - Route: /admin/table-occupancy - Role: ADMIN

Actions:

1. View live status counts by table state.
2. View table grid with status colors and issue or order badges.
3. Open table detail modal.
4. Inspect active order details by table.
5. Inspect active issue details by table.
6. Receive real-time occupancy updates from order and issue socket events.

### Archives - Route: /admin/archives - Role: ADMIN

Actions:

1. Fetch and group reports by year and month.
2. View archived report cards.
3. Download report PDF.
4. Navigate back to admin dashboard.

## Admin Screens - Commerce Section

### CustomerManagement - Route: /admin/customers - Role: ADMIN

Actions:

1. Filter customers by all, active, inactive.
2. View customer stats cards.
3. Open customer detail side panel.
4. View customer stats, favorite items, and order history in panel.
5. Receive and react to live order-related socket events with list refresh.

### RetailDashboard - Route: /admin/retail - Role: ADMIN

Actions:

1. Navigate to retail catalog manager.
2. Navigate to retail orders manager.
3. View retail KPIs and breakdown cards.
4. View revenue by service type and top products.
5. View low stock alerts.
6. View order status breakdown.
7. Refetch analytics on retail order status socket event.

### RetailCatalogManager - Route: /admin/retail-catalog - Role: ADMIN

Actions:

1. Switch tabs between service types, categories, and products.
2. Search current tab entities.
3. Filter categories by selected service type.
4. Create, edit, and delete service types.
5. Create, edit, and delete retail categories.
6. Create, edit, and delete retail products.
7. Upload entity image in modal.
8. Edit product stock tracking and stock quantity.
9. Edit product is-bookable settings with duration and capacity.
10. Add, edit, and remove product variants.
11. Toggle visibility and availability for edited entities.

### RetailOrderManagement - Route: /admin/retail-orders - Role: ADMIN

Actions:

1. Filter orders by status chips.
2. Search by order number, customer, and table.
3. Select individual orders and select all filtered orders.
4. Expand order card for details.
5. Mark order as paid.
6. Advance order to next status.
7. Jump directly to specific status from status menu.
8. Cancel order.
9. Bulk mark selected as paid.
10. Bulk mark selected as completed.
11. Bulk cancel selected orders.

## Admin Screens - Insights and Control Section

### AnalyticsDashboard - Route: /admin/analytics - Role: ADMIN

Actions:

1. Switch period between today, week, and month.
2. View KPI cards and analytics charts.
3. Filter financial report by date range.
4. Clear financial date filter.
5. Paginate financial report table.

### AuditLogsPage - Route: /admin/audit - Role: ADMIN

Actions:

1. Search audit logs by action text.
2. Filter by staff id selector value.
3. Refresh logs.
4. Paginate through log pages.
5. Open and close log payload modal.
6. Inspect structured details and user agent in payload modal.

### IntegrationsPage - Route: /admin/integrations - Role: ADMIN

Actions:

1. View integrations list and statuses.
2. Add integration.
3. Open integration details view.
4. Trigger manual sync for integration.
5. Delete integration with confirmation.
6. Open editor in create and edit modes.
7. Save integration from editor.
8. Cancel editor and return to list.
9. Configure general tab fields.
10. Configure auth tab fields for OAuth2, API key, and other auth modes.
11. Run test connection for existing integration.
12. Edit mappings JSON and validate on blur.
13. Configure sync mode and retry policy.
14. Configure sync entity toggles.
15. In details view, switch between queue and logs tabs.
16. Refresh details view data.

### SettingsPage - Route: /admin/settings - Role: ADMIN

Actions:

1. Switch settings tabs: general, payment, gallery, team, network.
2. Keyboard navigate settings tabs with arrow, home, and end keys.
3. Save general hotel settings.
4. Select report logo from gallery image list.
5. Set report logo via direct URL field.
6. Run demo data seed with confirmation.
7. Toggle automatic M-Pesa and manual payment enable flags.
8. Edit manual payment channels (phone, till, paybill).
9. Edit and save Daraja credentials and environment.
10. Save all payment settings from combined save action.
11. Upload gallery image.
12. Delete gallery image.
13. Open staff create and edit form.
14. Submit create and update staff profile with role, credentials, and image.
15. Delete staff member.
16. Toggle staff active status during edit.
17. Refresh network info.
18. View server details and generated QR codes for customer, admin, waiter, and kitchen URLs.

### HotelSettings - Route: /admin/hotel-settings - Role: ADMIN

Actions:

1. Fetch and normalize settings values for legacy form.
2. Edit core fields (name, currency, times, table count, contact, location).
3. Convert table count into table number list on submit.
4. Save hotel settings.
5. Retry failed settings load.
6. Navigate to settings center.

### DataExport - Route: /admin/data-export - Role: ADMIN

Actions:

1. Apply date presets: today, last 7 days, last 30 days, all time.
2. Select format per export card.
3. Set start and end dates per export card.
4. Run export for sales dataset.
5. Run export for orders dataset.
6. Run export for issues dataset.
7. Run export for feedback dataset.
8. Validate date range and show error state when invalid.
9. Download generated export file with parsed filename.
10. Display per-export success and error messages.
11. Detect and display report logo configuration status.

## Shared Guest Action Surfaces (Non-Route Screens)

### CartDrawer - Role: GUEST

Actions:

1. Open and close food cart drawer.
2. Increment and decrement quantity.
3. Remove single item.
4. Clear entire cart with confirmation.
5. Toggle per-item addons inside cart.
6. Enter table number for food order submission.
7. Submit food order and clear cart.
8. Join table room via socket after order placement.
9. Navigate to orders screen after placement.

### RetailCartDrawer - Role: GUEST

Actions:

1. Open and close retail cart drawer.
2. Increment and decrement retail item quantity.
3. Remove retail item.
4. View subtotal.
5. Proceed to retail checkout.

### RetailFloatingCart - Role: GUEST

Actions:

1. Show floating cart CTA on retail browsing routes.
2. Display item count and total.
3. Open retail cart drawer.

### FoodDetailModal - Role: GUEST

Actions:

1. View image carousel with autoplay and manual thumbnail selection.
2. Select quantity.
3. Select and unselect addons.
4. Enter special instructions.
5. Compute discounted and addon-adjusted total.
6. Add customized item to cart.
7. Trigger upsell modal when pairings exist.
8. Open cart on close when no upsell path is used.

### UpsellModal - Role: GUEST

Actions:

1. Show added item confirmation.
2. Present pairings list.
3. Add pairing item to cart.
4. Continue shopping.
5. Jump to cart view.

### BillView - Role: GUEST

Actions:

1. View order detail lines and totals.
2. View live payment status banner.
3. Execute STK push payment flow when configured.
4. Poll STK payment status.
5. Retry failed STK flow.
6. Trigger manual status check for STK payment id.
7. Enter manual payment details flow when enabled.
8. Choose manual method: sim card, cash, or bank.
9. Choose sim-card subtype where available.
10. Submit manual verification or cash collection request.
11. Close modal.

### NotificationBanner - Role: GUEST

Actions:

1. Display active non-dismissed notifications.
2. Dismiss notification and persist dismissal in local storage.
3. Receive live notifications via socket.
4. Receive individual messages and map them into banner entries.
5. Remove banners when backend emits removal event.

## Notes on Access and Enforcement

- AdminLayout enforces authentication state; role-specific route restrictions are mostly driven by login redirection and intended use, not by per-route hard role guards in every component.
- Guest flows depend on device identification and customer context rather than username or password login.
- Kitchen route is a standalone route intended for staff operations.
