// import { saveState } from "../localStorage";
const localData = JSON.parse(localStorage.getItem("productItem"))
console.log("Localdattaa", localData);



let initailState = {
  productItems: [],
  totalProductsCount: 0,
  totalPrice: 0,
};
var oldItems = [];
export const productReducer = (state = initailState, { type, productItem, isInr, quantity }) => {

    if(productItem === undefined){

     
        // oldItems = localData;
        return {
            ...state,
            productItems: oldItems,
            totalProductsCount: state.totalProductsCount,
        }
    }

 
  let index = -1;
  if (oldItems.length > 0){
    console.log("oldie",oldItems);
    index = state.productItems.findIndex(temp=>temp.id===productItem.id);
  }
  if(index >= 0){
    if(isInr) {
      oldItems[index].quantity = quantity + productItem.quantity
      oldItems[index].totalPrice = productItem.total_price * productItem.quantity
      // oldItems[index].productItem = productItem.quantity + productItem.total_price
      state.totalProductsCount += 1

    } else {
      state.totalProductsCount -= 1
      oldItems[index].quantity = productItem.quantity - quantity
      oldItems[index].totalPrice = productItem.total_price * productItem.quantity

      if (oldItems[index] <= 1) {
        oldItems[index] = 1 
      }
    }
     
  }
  else {
    if(isInr) {
      state.totalProductsCount += 1
    } else {
      state.totalProductsCount -= 1
    }
      oldItems.push(productItem)
  }

  // save redux data to localstorage 
    localStorage.setItem("productItem" , JSON.stringify(oldItems));
    console.log("New oldie", oldItems);
    localStorage.setItem("totalCount" ,state.totalProductsCount )


  switch (type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        productItems: oldItems,
        totalProductsCount: state.totalProductsCount,

        

      };
      // saveState();
    }
    // case "UPDATE_TO_CART": {

    //   return {
    //     ...state,
    //     productItems: oldItems,
    //   };
    // }
    case "REMOVE_TO_CART" : {
        return {
            ...state,
            productItems: oldItems.filter((curId) => {
                return curId.id !== productItem;
            }),
            totalProductsCount: state.totalProductsCount - 1,
        }
    }
    default:
      return state;
  }
};
