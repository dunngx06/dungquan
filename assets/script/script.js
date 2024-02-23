
// Đăng nhập
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Đoạn code xử lý đăng nhập ở đây (có thể gửi request đến server)
  console.log('Đã đăng nhập:', username);
}


        // đóng mở menu
        var header = document.getElementById('header')
        var mobileMenu = document.getElementById('mobile-menu')
        var headerHeight = header.clientHeight
        var slider = document.getElementById('slider')
        var content = document.getElementById('content')
        var tuor = document.getElementById('tuor')
        var contact = document.getElementById('contact')
        var footer = document.getElementById('footer')

        mobileMenu.onclick = function () {
            var isClose = header.clientHeight === headerHeight
            if (isClose) {
                header.style.height = 'auto'
            } else {
                header.style.height = null
            }
        }

        var menuItems = document.querySelectorAll('.nav li a[href*="#"]')

        for (var i = 0; i < menuItems.length; i++ ) {
            var menuItem =  menuItems[i]
            menuItem.onclick = function(event) {
                var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
                if (isParentMenu) {
                    event.preventDefault();
                } else {
                    header.style.height = null
                }
            }
        }

        slider.onclick = function() {
            header.style.height = null
        }
        content.onclick = function() {
            header.style.height = null
        }
        tuor.onclick = function() {
            header.style.height = null
        }
        contact.onclick = function() {
            header.style.height = null
        }
        footer.onclick = function() {
            header.style.height = null
        }

        // đóng mở modal
        const buyBtns = document.querySelectorAll('.js-buy-ticket')
        const closeModal = document.querySelector('.js-modal-close')
        const modal = document.querySelector('.js-modal')
        const modalContainer = document.querySelector('.js-modal-container')

        function showBuyTickets() {
            modal.classList.add('modal-open')
        }

        function closeBuyTickets() {
            modal.classList.remove('modal-open')
        }

        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTickets)
        }

        closeModal.addEventListener('click', closeBuyTickets)
        modal.addEventListener('click', closeBuyTickets)
        modalContainer.addEventListener('click', function (even) {
            even.stopImmediatePropagation()
        })
