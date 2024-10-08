import { createContext, useEffect, useState, useContext } from "react";
import {
  UpdateDocument,
  onAuthStateChangedListener,
  getUserOrders,
} from "../utils/firebase/firebase.utils";
import { UserContext } from "./user.context";

const addOrder = (orders, orderToAdd) => {
  //add orderToAdd object to orders object
  return orders.concat(orderToAdd);
};

export const OrderContext = createContext({
  orders: [],
  setOrders: () => {},
  addTransactionToOrders: () => {},
});

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useContext(UserContext);

  //get past orders from firebase on user login
  useEffect(() => {
    const getPastOrders = async () => {
      if (currentUser) {
        const userOrders = await getUserOrders("users", currentUser.uid);
        setOrders(userOrders);
      }
    };
    getPastOrders();
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) UpdateDocument("users", currentUser.uid, { orders });
  }, [orders]);

  //clear orders when user logs out
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (!user) {
        setOrders([]);
      }
    });
    return unsubscribe;
  }, []);

  const addTransactionToOrders = (orderToAdd) => {
    setOrders(addOrder(orders, orderToAdd));
  };

  const value = {
    orders,
    addTransactionToOrders,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};
