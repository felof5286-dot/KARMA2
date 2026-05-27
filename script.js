// Karma Restaurant - Global JavaScript Functions

// Simple Language Toggle
var isItalian = false;

function toggleLanguage() {
    isItalian = !isItalian;
    localStorage.setItem('karmaLanguage', isItalian ? 'it' : 'ar');
    applyLanguage();
}

function applyLanguage() {
    // Translations map
    var translations = {
        'الرئيسية': isItalian ? 'Home' : 'الرئيسية',
        'القائمة': isItalian ? 'Menu' : 'القائمة',
        'طلباتي': isItalian ? 'I Miei Ordini' : 'طلباتي',
        'السلة': isItalian ? 'Carrello' : 'السلة',
        'تسجيل دخول': isItalian ? 'Accedi' : 'تسجيل دخول',
        'خروج': isItalian ? 'Esci' : 'خروج',
        'لوحة التحكم': isItalian ? 'Pannello' : 'لوحة التحكم',
        'تحديث الصلاحيات': isItalian ? 'Aggiorna' : 'تحديث الصلاحيات',
        'اطلب الآن': isItalian ? 'Ordina Ora' : 'اطلب الآن',
        'اعرف أكثر': isItalian ? 'Scopri di Più' : 'اعرف أكثر',
        'لماذا تختار Karma؟': isItalian ? 'Perché Karma?' : 'لماذا تختار Karma؟',
        'نقدم لكم تجربة طعام استثنائية': isItalian ? 'Vi offriamo un\'esperienza unica' : 'نقدم لكم تجربة طعام استثنائية',
        'أطباقنا المميزة': isItalian ? 'I Nostri Piatti' : 'أطباقنا المميزة',
        'اطلب أشهى الأطباق الآن واستمتع!': isItalian ? 'Ordina i piatti migliori!' : 'اطلب أشهى الأطباق الآن واستمتع!',
        'القائمة الكاملة': isItalian ? 'Menu Completo' : 'القائمة الكاملة',
        'بيتزا إيطالية': isItalian ? 'Pizza Italiana' : 'بيتزا إيطالية',
        'مأكولات فاخرة': isItalian ? 'Cucina Raffinata' : 'مأكولات فاخرة',
        'توصيل سريع': isItalian ? 'Consegna Veloce' : 'توصيل سريع',
        'قصتنا': isItalian ? 'La Nostra Storia' : 'قصتنا',
        'تواصل معنا': isItalian ? 'Contattaci' : 'تواصل معنا',
        'الهاتف': isItalian ? 'Telefono' : 'الهاتف',
        'البريد الإلكتروني': isItalian ? 'Email' : 'البريد الإلكتروني',
        'الموقع': isItalian ? 'Posizione' : 'الموقع',
        'مطعم كارما الإيطالي الفاخر': isItalian ? 'Ristorante Karma Italiano' : 'مطعم كارما الإيطالي الفاخر',
        'عن المطعم': isItalian ? 'Chi Siamo' : 'عن المطعم',
        'جميع الحقوق محفوظة': isItalian ? 'Tutti i diritti riservati' : 'جميع الحقوق محفوظة',
        'سلة المشتريات': isItalian ? 'Carrello' : 'سلة المشتريات',
        'السلة فارغة': isItalian ? 'Carrello Vuoto' : 'السلة فارغة',
        'تصفح قائمتنا وأضف أطباقك المفضلة': isItalian ? 'Sfoglia e aggiungi i tuoi piatti' : 'تصفح قائمتنا وأضف أطباقك المفضلة',
        'ملخص الطلب': isItalian ? 'Riepilogo' : 'ملخص الطلب',
        'المجموع الفرعي': isItalian ? 'Subtotale' : 'المجموع الفرعي',
        'توصيل مجاني': isItalian ? 'Consegna Gratis' : 'توصيل مجاني',
        'الإجمالي': isItalian ? 'Totale' : 'الإجمالي',
        'إتمام الطلب': isItalian ? 'Completa Ordine' : 'إتمام الطلب',
        'إضافة المزيد': isItalian ? 'Aggiungi Altri' : 'إضافة المزيد',
        'إفراغ السلة': isItalian ? 'Svuota' : 'إفراغ السلة',
        'جاري التحميل...': isItalian ? 'Caricamento...' : 'جاري التحميل...',
        'إضافة': isItalian ? 'Aggiungi' : 'إضافة',
        'إضافة للسلة': isItalian ? 'Aggiungi al Carrello' : 'إضافة للسلة',
        'الاسم': isItalian ? 'Nome' : 'الاسم',
        'الهاتف': isItalian ? 'Telefono' : 'الهاتف',
        'العنوان': isItalian ? 'Indirizzo' : 'العنوان',
        'ملاحظات': isItalian ? 'Note' : 'ملاحظات',
        'طريقة الدفع': isItalian ? 'Pagamento' : 'طريقة الدفع',
        'الدفع عند الاستلام': isItalian ? 'Alla Consegna' : 'الدفع عند الاستلام',
        'فيزا': isItalian ? 'Visa' : 'فيزا',
        'إلغاء': isItalian ? 'Annulla' : 'إلغاء',
        'تأكيد الطلب': isItalian ? 'Conferma' : 'تأكيد الطلب',
        'تم الطلب بنجاح!': isItalian ? 'Ordine Effettuato!' : 'تم الطلب بنجاح!',
        'شكراً لثقتك بنا': isItalian ? 'Grazie!' : 'شكراً لثقتك بنا',
        'رقم الطلب': isItalian ? 'Numero Ordine' : 'رقم الطلب',
        'العودة للرئيسية': isItalian ? 'Torna Home' : 'العودة للرئيسية',
        'طلباتي': isItalian ? 'I Miei Ordini' : 'طلباتي',
        'تتبع طلباتك ومعرف حالة توصيلك': isItalian ? 'Traccia i tuoi ordini' : 'تتبع طلباتك ومعرف حالة توصيلك',
        'جميع طلباتك': isItalian ? 'I Tuoi Ordini' : 'جميع طلباتك',
        'تحديث': isItalian ? 'Aggiorna' : 'تحديث',
        'لا توجد طلبات سابقة': isItalian ? 'Nessun ordine' : 'لا توجد طلبات سابقة',
        'مالك': isItalian ? 'Proprietario' : 'مالك',
        'أدمن': isItalian ? 'Admin' : 'أدمن',
    };
    
    // Update all text elements with translations
    function translateElement(el) {
        var text = el.textContent.trim();
        if (translations[text]) {
            el.textContent = translations[text];
        }
        // Also check child text nodes
        for (var i = 0; i < el.childNodes.length; i++) {
            if (el.childNodes[i].nodeType === 3) {
                var nodeText = el.childNodes[i].textContent.trim();
                if (translations[nodeText]) {
                    el.childNodes[i].textContent = translations[nodeText];
                }
            }
        }
    }
    
    // Translate all elements
    var allElements = document.body.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, button, label, small, strong');
    for (var i = 0; i < allElements.length; i++) {
        translateElement(allElements[i]);
    }
    
    // Update direction
    document.documentElement.dir = isItalian ? 'ltr' : 'rtl';
    document.documentElement.lang = isItalian ? 'it' : 'ar';
    
    // Update Bootstrap CSS
    var bsLink = document.querySelector('link[href*="bootstrap"]');
    if (bsLink) {
        bsLink.href = isItalian 
            ? 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
            : 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.rtl.min.css';
    }
    
    // Update button text
    var langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.innerHTML = isItalian ? '🇸🇦 العربية' : '🇮🇹 Italiano';
        langBtn.setAttribute('title', isItalian ? 'اضغط للتبديل للعربية' : 'Clicca per italiano');
    }
}

// Add language button to navbar
function addLanguageButton() {
    var navbar = document.querySelector('.navbar-collapse');
    if (!navbar) return;
    
    // Check if already exists
    if (document.getElementById('langToggleBtn')) return;
    
    var btn = document.createElement('button');
    btn.id = 'langToggleBtn';
    btn.className = 'btn btn-outline-light btn-sm ms-2';
    btn.style.marginRight = '10px';
    btn.onclick = toggleLanguage;
    btn.innerHTML = '🇮🇹 Italiano';
    btn.setAttribute('title', 'Clicca per italiano');
    
    // Insert at the beginning of navbar
    navbar.insertBefore(btn, navbar.firstChild);
    
    // Apply saved language
    var savedLang = localStorage.getItem('karmaLanguage');
    if (savedLang === 'it') {
        isItalian = true;
        setTimeout(applyLanguage, 500); // Delay to ensure page is loaded
    }
}
function getCart() {
    try {
        return JSON.parse(localStorage.getItem('karmaCart')) || [];
    } catch (e) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem('karmaCart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    var cart = getCart();
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        count += cart[i].quantity || 1;
    }
    var badge = document.getElementById('cartCountNav');
    if (badge) badge.textContent = count;
}

// API base URL - points to local/hosted backend
function getApiBaseUrl() {
    return '/api';
}

function addToCartById(id) {
    fetch(getApiBaseUrl() + '/menu')
        .then(function(r) { return r.json(); })
        .then(function(items) {
            var item = items.find(function(i) { return i._id === id; });
            if (item) {
                addToCart(item);
            }
        })
        .catch(function(e) { console.error(e); });
}

function addToCart(item) {
    var cart = getCart();
    var existing = cart.find(function(i) { return i._id === item._id; });
    if (existing) {
        existing.quantity = (existing.quantity || 1) + 1;
    } else {
        cart.push({
            _id: item._id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    saveCart(cart);

    // Show toast notification with translated message
    var cartMessage = getTranslatedCartMessage(item.name);
    showToast('✅ ' + cartMessage);

    var btn = event.target;
    if (btn) {
        var originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Aggiunto!';
        btn.classList.add('btn-success');
        btn.classList.remove('btn-primary');
        setTimeout(function() {
            btn.innerHTML = originalText;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-primary');
        }, 1500);
    }
}

// Get translated cart message (always in Italian)
function getTranslatedCartMessage(itemName) {
    return '"' + itemName + '" aggiunto al carrello con successo! 🛒';
}

// Show toast notification
function showToast(message) {
    var existing = document.getElementById('toastNotification');
    if (existing) existing.remove();
    
    var toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.style.cssText = 'position:fixed;bottom:30px;right:50%;transform:translateX(50%);background:#28a745;color:white;padding:15px 30px;border-radius:50px;z-index:9999;font-weight:bold;box-shadow:0 4px 20px rgba(0,0,0,0.3);font-size:1.1rem;animation:slideUp 0.3s ease;';
    toast.innerHTML = '<i class="fas fa-check-circle me-2"></i>' + message;
    
    // Add animation keyframes if not exists
    var style = document.createElement('style');
    style.textContent = '@keyframes slideUp { from { opacity:0; transform:translateX(50%) translateY(20px); } to { opacity:1; transform:translateX(50%) translateY(0); } } @keyframes slideDown { from { opacity:1; transform:translateX(50%) translateY(0); } to { opacity:0; transform:translateX(50%) translateY(20px); } }';
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    setTimeout(function() {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(function() { toast.remove(); }, 300);
    }, 2000);
}

function showCartNotification(itemName) {
    var notification = document.getElementById('cartNotification');
    var message = document.getElementById('notificationMessage');
    if (notification && message) {
        message.textContent = getTranslatedCartMessage(itemName);
        notification.style.display = 'block';
        notification.classList.add('show');
        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                notification.style.display = 'none';
            }, 150);
        }, 3000);
    }
}

function removeFromCart(index) {
    var cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCart();
}

function updateQuantity(index, change) {
    var cart = getCart();
    cart[index].quantity = (cart[index].quantity || 1) + change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart(cart);
    renderCart();
}

function clearCart() {
    localStorage.removeItem('karmaCart');
    updateCartCount();
    renderCart();
}

function getCartTotal() {
    var cart = getCart();
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].price * (cart[i].quantity || 1);
    }
    return total;
}

// Authentication
function getUser() {
    try {
        return JSON.parse(localStorage.getItem('karmaUser')) || null;
    } catch (e) {
        return null;
    }
}

function getToken() {
    return localStorage.getItem('karmaToken');
}

function isLoggedIn() {
    return !!getToken();
}

function logout() {
    // Clear ALL localStorage data
    localStorage.removeItem('karmaToken');
    localStorage.removeItem('karmaUser');
    localStorage.removeItem('karmaCart');
    localStorage.removeItem('karmaLanguage');
    
    // Clear session storage as well
    sessionStorage.clear();
    
    // Force full page reload and go to home
    window.location.href = '/';
    
    // Add a fallback timeout in case redirect doesn't work
    setTimeout(function() {
        window.location.reload(true);
    }, 100);
}

function updateNavbar() {
    var user = getUser();
    var authNav = document.getElementById('authNav');
    if (!authNav) return;

    if (user) {
        var roleBadge = '';
        if (user.role === 'owner') {
            roleBadge = ' <span class="badge bg-warning text-dark">Proprietario</span>';
        } else if (user.role === 'admin') {
            roleBadge = ' <span class="badge bg-danger">Admin</span>';
        }

        authNav.innerHTML = '<li class="nav-item dropdown">' +
            '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">' +
            '<i class="fas fa-user"></i> ' + user.name + roleBadge +
            '</a>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="/orders"><i class="fas fa-clipboard-list"></i> I Miei Ordini</a></li>' +
            '<li><a class="dropdown-item" href="/cart"><i class="fas fa-shopping-cart"></i> Carrello</a></li>' +
            (user.role === 'owner' || user.role === 'admin' ?
            '<li><a class="dropdown-item" href="/admin"><i class="fas fa-cog"></i> Pannello Admin</a></li>' : '') +
            '<li><a class="dropdown-item" href="#" onclick="refreshUserSession(); return false;"><i class="fas fa-sync"></i> Aggiorna</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item" href="#" onclick="logout(); return false;"><i class="fas fa-sign-out-alt"></i> Esci</a></li>' +
            '</ul></li>';
    } else {
        authNav.innerHTML = '<li class="nav-item"><a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i> Accedi</a></li>';
    }
}

function updateNavbarWithoutLang() {
    var user = getUser();
    var authNav = document.getElementById('authNav');
    if (!authNav) return;

    // Remove any existing language button
    var existingLangBtn = document.getElementById('langToggleBtn');
    if (existingLangBtn) {
        existingLangBtn.remove();
    }

    if (user) {
        var roleBadge = '';
        if (user.role === 'owner') {
            roleBadge = ' <span class="badge bg-warning text-dark">Proprietario</span>';
        } else if (user.role === 'admin') {
            roleBadge = ' <span class="badge bg-danger">Admin</span>';
        }

        authNav.innerHTML = '<li class="nav-item dropdown">' +
            '<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">' +
            '<i class="fas fa-user"></i> ' + user.name + roleBadge +
            '</a>' +
            '<ul class="dropdown-menu">' +
            '<li><a class="dropdown-item" href="/orders"><i class="fas fa-clipboard-list"></i> I Miei Ordini</a></li>' +
            '<li><a class="dropdown-item" href="/cart"><i class="fas fa-shopping-cart"></i> Carrello</a></li>' +
            (user.role === 'owner' || user.role === 'admin' ?
            '<li><a class="dropdown-item" href="/admin"><i class="fas fa-cog"></i> Pannello Admin</a></li>' : '') +
            '<li><a class="dropdown-item" href="#" onclick="refreshUserSession(); return false;"><i class="fas fa-sync"></i> Aggiorna</a></li>' +
            '<li><hr class="dropdown-divider"></li>' +
            '<li><a class="dropdown-item" href="#" onclick="logout(); return false;"><i class="fas fa-sign-out-alt"></i> Esci</a></li>' +
            '</ul></li>';
    } else {
        authNav.innerHTML = '<li class="nav-item"><a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i> Accedi</a></li>';
    }
}

// Refresh user session to get updated role/permissions
function refreshUserSession(callback) {
    var token = getToken();
    if (!token) {
        if (callback) callback(null);
        return;
    }

    fetch(getApiBaseUrl() + '/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
        if (data.id && data.role) {
            // Get current stored role
            var currentUser = getUser();
            var oldRole = currentUser ? currentUser.role : null;
            
            // Only update if role changed or user is new
            if (oldRole !== data.role) {
                var updatedUser = Object.assign({}, currentUser || {}, {
                    id: data.id,
                    name: data.name || currentUser?.name,
                    email: data.email || currentUser?.email,
                    role: data.role
                });
                localStorage.setItem('karmaUser', JSON.stringify(updatedUser));
                updateNavbar();
                
                // Show notification only when role changes to admin/owner
                if (data.role === 'admin' || data.role === 'owner') {
                    var roleText = data.role === 'admin' ? 'أدمن' : 'مالك';
                    showNotification('🎉 تم تحديث صلاحياتك بنجاح! دورك: ' + roleText + '<br><small>ستظهر لوحة التحكم الآن</small>');
                }
            }
            
            if (callback) callback(updatedUser || data);
        } else {
            if (callback) callback(null);
        }
    })
    .catch(function(e) {
        console.error('Error refreshing session:', e);
        if (callback) callback(null);
    });
}

// Refresh admin session and update UI - specifically for admin panel
function refreshAdminSession() {
    var token = getToken();
    if (!token) return;

    fetch(getApiBaseUrl() + '/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
        if (data.id && data.role) {
            // Get current stored role
            var currentUser = getUser();
            var oldRole = currentUser ? currentUser.role : null;
            var roleChanged = oldRole !== data.role;
            
            // Update localStorage with fresh data from server
            var updatedUser = Object.assign({}, currentUser || {}, {
                id: data.id,
                name: data.name || currentUser?.name,
                email: data.email || currentUser?.email,
                role: data.role
            });
            localStorage.setItem('karmaUser', JSON.stringify(updatedUser));
            
            // If role changed, reload the page to ensure all admin UI is properly initialized
            if (roleChanged) {
                console.log('Role changed from ' + oldRole + ' to ' + data.role + ' - reloading page');
                window.location.reload();
                return;
            }
            
            // Update admin panel UI based on new role
            updateAdminPanelUI(data.role);
        }
    })
    .catch(function(e) {
        console.error('Error refreshing admin session:', e);
    });
}

// Update admin panel UI based on user role
function updateAdminPanelUI(role) {
    // Show/hide owner-only links
    var ownerLinks = document.querySelectorAll('.owner-only');
    for (var i = 0; i < ownerLinks.length; i++) {
        if (role === 'owner') {
            ownerLinks[i].style.display = 'block';
        } else {
            ownerLinks[i].style.display = 'none';
        }
    }
    
    // Show admin badge in header if admin or owner
    var headerTitle = document.querySelector('#dashboard h2');
    if (headerTitle) {
        if (role === 'owner') {
            headerTitle.innerHTML = 'لوحة الإدارة <span class="badge bg-warning text-dark ms-2">مالك</span>';
        } else if (role === 'admin') {
            headerTitle.innerHTML = 'لوحة الإدارة <span class="badge bg-info ms-2">أدمن</span>';
        }
    }
    
    // If user is not admin or owner, redirect to home
    if (role !== 'admin' && role !== 'owner') {
        console.log('User is not admin/owner - redirecting to home');
        window.location.href = '/';
    }
}

// Check if current user has admin/owner role
function isAdmin() {
    var user = getUser();
    return user && (user.role === 'admin' || user.role === 'owner');
}

// Force refresh session and then check admin status
function forceRefreshAndCheckAdmin() {
    refreshUserSession(function(updatedUser) {
        if (updatedUser && (updatedUser.role === 'admin' || updatedUser.role === 'owner')) {
            updateAdminPanelUI(updatedUser.role);
        }
    });
}

// ==================== REAL-TIME BAN CHECKING ====================
// Connect to ban notification stream for instant ban detection
var banEventSource = null;

function connectBanNotificationStream() {
    var token = getToken();
    if (!token) return;
    
    // Close existing connection if any
    if (banEventSource) {
        try {
            banEventSource.close();
        } catch (e) {}
    }
    
    try {
        banEventSource = new EventSource('/api/notifications/ban-check?token=' + token);
        
        banEventSource.onopen = function() {
            console.log('Connected to ban notification stream');
        };
        
        banEventSource.onmessage = function(e) {
            try {
                var data = JSON.parse(e.data);
                
                // If banned notification received
                if (data.type === 'banned' && data.data) {
                    handleUserBanned(data.data);
                }
            } catch (err) {
                // Connection established message
                if (e.data && e.data.includes('connected')) {
                    console.log('Ban check stream ready');
                }
            }
        };
        
        banEventSource.onerror = function() {
            console.log('Ban notification stream disconnected, reconnecting in 5 seconds...');
            setTimeout(function() {
                connectBanNotificationStream();
            }, 5000);
        };
    } catch (e) {
        console.error('Error connecting to ban stream:', e);
    }
}

// Handle user banned notification
function handleUserBanned(banData) {
    console.log('User banned:', banData);
    
    // Show immediate alert
    var banAlert = document.createElement('div');
    banAlert.id = 'banAlert';
    banAlert.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.9);z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;';
    banAlert.innerHTML = '<div style="text-align:center;padding:40px;">' +
        '<i class="fas fa-exclamation-triangle" style="font-size:4rem;color:#dc3545;margin-bottom:20px;"></i>' +
        '<h2 style="margin-bottom:15px;">🚫 تم حظرك من الموقع</h2>' +
        '<p style="font-size:1.2rem;margin-bottom:10px;">' + (banData.message || 'تم حظرك من قبل الإدارة') + '</p>' +
        '<p style="color:#999;">سيتم نقلك للصفحة الرئيسية...</p>' +
        '</div>';
    document.body.appendChild(banAlert);
    
    // Clear all local storage
    localStorage.removeItem('karmaToken');
    localStorage.removeItem('karmaUser');
    localStorage.removeItem('karmaCart');
    localStorage.removeItem('karmaLanguage');
    sessionStorage.clear();
    
    // Close SSE connection
    if (banEventSource) {
        try {
            banEventSource.close();
        } catch (e) {}
    }
    
    // Redirect to home after 2 seconds
    setTimeout(function() {
        window.location.href = '/';
    }, 2000);
}

// Check if current user is banned (fallback method)
function checkIfBanned() {
    var token = getToken();
    var user = getUser();
    
    if (!token || !user) return;
    
    fetch(getApiBaseUrl() + '/auth/me', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    .then(function(r) { return r.json(); })
    .then(function(data) {
        if (data.isBanned === true) {
            handleUserBanned({
                email: data.email,
                bannedAt: data.bannedAt,
                message: 'تم حظرك من الموقع. يرجى الاتصال بالإدارة.'
            });
        }
    })
    .catch(function(e) {
        // Silent fail - might be network issue
    });
}

// Setup automatic ban checking - run immediately and frequently
function setupBanChecking() {
    var token = getToken();
    if (!token) return;
    
    // Check immediately on page load
    checkIfBanned();
    
    // Check every 1 second - fast enough to catch bans quickly
    setInterval(function() {
        checkIfBanned();
    }, 1000);
    
    // Also check on page visibility change
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            checkIfBanned();
        }
    });
    
    // Check when window gets focus
    window.addEventListener('focus', function() {
        checkIfBanned();
    });
}

// Show notification helper
function showNotification(message) {
    // Remove any existing notification first
    var existing = document.querySelector('[style*="position:fixed"][style*="top:20px"][style*="right:20px"]');
    if (existing) existing.remove();
    
    var notif = document.createElement('div');
    notif.style.cssText = 'position:fixed;top:20px;right:20px;background:#28a745;color:white;padding:15px 25px;border-radius:10px;z-index:9999;font-weight:bold;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
    notif.innerHTML = message;
    document.body.appendChild(notif);
    
    // Auto remove after 4 seconds
    setTimeout(function() {
        notif.style.transition = 'opacity 0.5s';
        notif.style.opacity = '0';
        setTimeout(function() { notif.remove(); }, 500);
    }, 4000);
}

// Auto-refresh session when page becomes visible
function setupAutoSessionRefresh() {
    // Refresh on page load
    refreshUserSession();
    
    // Refresh when page becomes visible (after switching tabs or minimizing)
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            // Small delay to ensure server data is updated
            setTimeout(function() {
                refreshUserSession();
                // Also refresh admin panel if on admin page
                if (window.location.pathname === '/admin') {
                    refreshAdminSession();
                }
            }, 500);
        }
    });
    
    // Refresh when window gains focus
    window.addEventListener('focus', function() {
        setTimeout(function() {
            refreshUserSession();
            // Also refresh admin panel if on admin page
            if (window.location.pathname === '/admin') {
                refreshAdminSession();
            }
        }, 500);
    });
    
    // Also poll every 3 seconds to catch any changes
    // Only if on admin page, otherwise use longer interval
    var isAdminPage = window.location.pathname === '/admin';
    var interval = isAdminPage ? 3000 : 10000;
    
    setInterval(function() {
        refreshUserSession();
        // Also refresh admin panel if on admin page
        if (isAdminPage) {
            refreshAdminSession();
        }
    }, interval);
}

// Format price
function formatPrice(price) {
    return '€' + price.toFixed(2);
}

// Show alert
function showAlert(elementId, message, type) {
    var el = document.getElementById(elementId);
    if (el) {
        el.innerHTML = '<div class="alert alert-' + (type || 'info') + '">' + message + '</div>';
    }
}

// Load full menu with categories
function loadMenu() {
    var menuGrid = document.getElementById('menuGrid');
    var categoriesContainer = document.getElementById('categoriesContainer');
    
    if (!menuGrid) return;
    
    // Show loading
    menuGrid.innerHTML = '<div class="text-center py-5"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">جاري التحميل...</span></div><p class="mt-3">جاري تحميل القائمة...</p></div>';
    
    // Load categories first
    fetch(getApiBaseUrl() + '/categories')
        .then(function(r) { return r.json(); })
        .then(function(categories) {
            // Render category buttons
            var catHtml = '<button class="filter-btn active" onclick="filterMenu(\'all\', this)">Tutto</button>';
            for (var i = 0; i < categories.length; i++) {
                var cat = categories[i];
                catHtml += '<button class="filter-btn" onclick="filterMenu(\'' + cat.key + '\', this)">' + cat.name + '</button>';
            }
            if (categoriesContainer) {
                categoriesContainer.innerHTML = catHtml;
            }
            
            // Then load menu items
            return fetch(getApiBaseUrl() + '/menu');
        })
        .then(function(r) { return r.json(); })

// Render menu items
function renderMenuItems(items) {
    var menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;

    if (!items || items.length === 0) {
        menuGrid.innerHTML = '<div class="col-12 text-center"><p>لا توجد أطباق حالياً</p></div>';
        return;
    }

    var html = '';
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        html += '<div class="col-md-4 mb-4 menu-item" data-category="' + item.category + '">' +
            '<div class="card menu-card">' +
            '<img src="' + item.image + '" class="card-img-top" alt="' + item.name + '" onerror="this.src=\'https://via.placeholder.com/300x200?text=Karma\'">' +
            '<div class="card-body text-center">' +
            '<h5 class="card-title">' + item.name + '</h5>' +
            '<p class="card-text small">' + item.description + '</p>' +
            '<div class="d-flex justify-content-between align-items-center">' +
            '<span class="price-tag">€' + item.price + '</span>' +
            '<button class="btn btn-primary btn-sm" onclick="addToCartById(\'' + item._id + '\')">' +
            '<i class="fas fa-plus"></i> Aggiungi' +
            '</button></div></div></div></div>';
    }
    menuGrid.innerHTML = html;
}

// Filter menu by category
function filterMenu(category, btn) {
    // Update active button
    var buttons = document.querySelectorAll('.filter-btn');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    btn.classList.add('active');
    
    // Filter items
    var items = window.menuItems || [];
    if (category === 'all') {
        renderMenuItems(items);
    } else {
        var filtered = items.filter(function(item) { return item.category === category; });
        renderMenuItems(filtered);
    }
}

// Initialize common functionality
document.addEventListener('DOMContentLoaded', function() {
    updateNavbarWithoutLang();
    updateCartCount();
    loadMenu();
    // Setup auto-refresh of user session to detect role changes
    setupAutoSessionRefresh();
    // Setup real-time ban checking - kicks user out immediately when banned
    setupBanChecking();
});}
