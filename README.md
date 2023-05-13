Agenda: To create a product Ordering Portal

Create 4 screens to add products to cart and check out.

Screen 1: The Screen should have the main category on the top panel like Applications, Ink type, printheads etc. If more than 4 or 5 categories are added, then it should be horizontally scrollable. On clicking on the main category item, the subcategory items of the main category should be displayed in the middle. On click of one particular sub category, it should be taken to the next screen, i.e., Screen 2.

Note: If no category/sub-category is found, then display a text “No category/Sub-category found”

Screen 2: On the bottom panel, all sub - categories are listed. On click of any sub-category, its corresponding products are displayed in the centre. The heart icon(favourite icon) is not functional. On click of the product, a pop up should open with details as shown in Screen 3.

Note: If no sub-category/product is found, then display a text “No Sub-category/Product found”

Screen 3: The Pop up should have the product image(only one image is needed), bp catalogue number, item description, sale description and gross price.Option to choose colour, packaging and quantity should be available. Minimum quantity is 12 and maximum is 100. “Heart icon(favourite icon)” &“Need urgent order” are not functional. 

Once “Add” is clicked, that item should be added on the order list in the right. If an item with the same attributes and quantity needs to be added, then a new entry should not be added, but the existing order item should be updated in the order list.If the close button of a particular product is clicked then that item should be removed. If the close button at top right of the order list is clicked, then the order list should be closed.

Once the “Add to cart” button is clicked, then the pop up window will be closed and on Screen 1 the cart section on the right should be populated.

Screen 4: We can see the items added to the cart being listed on the right. Option to “See all” should enable the user to see all items added to cart(in a different pop-up). “Edit” option should open Screen 3 and enable the user to make changes to the order list. “Add” option in other instructions and “view”  option in Addresses need not be functional. Purchase order number and address can be just static data. 

The important part is that the calculations should be right. Item total should be accurate and the CGST, SGST and IGST should each be 9% of the item total. 

When  you click on “clear cart”, the cart should be cleared. When you click on “Place order”, a toast message should appear saying “Order placed” and the cart should be cleared.
