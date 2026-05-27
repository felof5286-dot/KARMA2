- [x] Inspect current script.js for all /api menu/category fetch usage
- [x] Add Firebase config + Firestore init at top of script.js (with SDK from global scope)
- [x] Replace loadMenu() categories + menu fetch with Firestore getDocs/collection
- [x] Replace addToCartById() menu fetch with Firestore getDocs/collection (keep same logic)
- [x] Ensure renderMenuItems stores items into window.menuItems for filterMenu
- [ ] Smoke-test: open menu.html and verify categories + items render, add-to-cart works
- [x] Ensure no JS syntax errors after edits (lint/basic run)

