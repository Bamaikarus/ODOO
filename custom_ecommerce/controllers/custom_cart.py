from odoo import http
from odoo.http import request

class CustomEcommerceController(http.Controller):

    @http.route('/custom_product/add_to_cart', type='json', auth="public", csrf=False)
    def add_to_cart(self, **kwargs):
        # Example fields: product_id, quantity
        product_id = int(kwargs.get('product_id'))
        quantity = int(kwargs.get('quantity', 1))

        order = request.website.sale_get_order(force_create=True)
        order._cart_update(
            product_id=product_id,
            add_qty=quantity,
            set_qty=False
        )

        return {'status': 'success'}

    @http.route('/test', type='json', auth='public', csrf=False)
    def testing_route(self):
        return {
                'status': 'success',
                'name': 'bama'
                }