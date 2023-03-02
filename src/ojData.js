const OJ_DATA = [
    {
        title: 'Oj',
        items: [
          {
            id: 1,
            name: 'Small Oj',
            price: 6.99,
            quantity:0,
            isInStock: false
          },
          {
            id: 2,
            name: 'Medium Oj',
            price: 12.99,
            quantity:0,
            isInStock: false
          },
          {
            id: 3,
            name: 'Large Oj',
            price: 16.99,
            quantity:0,
            isInStock: false
          }
        ],
      }
]

export default OJ_DATA;

export function changeOjQuantity(id, quantity){

  OJ_DATA[0].items.forEach((item) => {
    if(item.id === id){
      item.quantity = quantity;
        item.quantity > 0 ? item.isInStock = true : item.isInStock = false; 
    }
  });
}