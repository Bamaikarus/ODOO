/** @odoo-module */

(function () {
    window.addEventListener("message", function(event) {
        const config = event.data;
        console.log(config);
        

        if (!config || typeof config !== 'object') return;

        $.ajax({
            url: '/custom_product/add_to_cart',
            type: 'POST',
            data: config,
            success: function(response) {
                if (response.status === 'success') {
                    window.location.href = '/shop/cart';
                } else {
                    alert(response.message || 'Failed to add to cart');
                }
            },
            error: function(err) {
                console.log(err);
                
                alert('Error adding to cart');
            }
        });

        $.ajax({
            url: '/test',
            type: 'GET',
            success: function(response) {
                console.log(response);
            },
            error: function(err) {
                console.log(err);
            }
        })
    });
})();
