"use client"

import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Badge } from '@/components/ui/badge'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'
import Image from 'next/image'

export function ShoppingCartSheet() {
  const { state, dispatch } = useCart()

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = state.items.reduce((sum, item) => sum + (item.product.price_cents * item.quantity), 0)

  const updateQuantity = (productId: string, newQuantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId, quantity: newQuantity })
  }

  const removeItem = (productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', productId })
  }

  const handleCheckout = () => {
    // TODO: Implement Stripe checkout
    console.log('Proceeding to checkout', state.items)
  }

  return (
    <Sheet open={state.isOpen} onOpenChange={(open) => dispatch({ type: open ? 'OPEN_CART' : 'CLOSE_CART' })}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative touch-manipulation min-h-10 px-3">
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Shopping cart</span>
          {totalItems > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Shopping Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})
          </SheetTitle>
        </SheetHeader>
        
        <div className="mt-6 flex-1 overflow-y-auto pb-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <ShoppingCart className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-4">Add some amazing educational products to get started!</p>
              <Button 
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
                variant="outline"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.product.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg touch-manipulation">
                  {/* Product Image/Icon */}
                  <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="h-6 w-6 text-gray-400" />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.product.title}</h4>
                    <p className="text-sm text-gray-500 mt-1">{item.product.theme_week}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-medium text-gray-900">
                        {formatPrice(item.product.price_cents)}
                      </span>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 sm:gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 touch-manipulation"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 touch-manipulation"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50 touch-manipulation"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {state.items.length > 0 && (
          <div className="border-t pt-4 mt-auto space-y-4 bg-white sticky bottom-0 pb-safe">
            {/* Total */}
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total:</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-2">
              <Button 
                className="w-full bg-soft-green-600 hover:bg-soft-green-700 h-12 text-base touch-manipulation"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full h-12 text-base touch-manipulation"
                onClick={() => dispatch({ type: 'CLOSE_CART' })}
              >
                Continue Shopping
              </Button>
            </div>

            {/* Clear Cart */}
            <div className="pt-2 border-t">
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => dispatch({ type: 'CLEAR_CART' })}
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
} 