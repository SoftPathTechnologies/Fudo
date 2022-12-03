import { useStore } from "../store/store";
import Layout from "../components/Layout";
import css from "../styles/Cart.module.css";
import {urlFor } from "../lib/client";
import Image from "next/image";
import { UilTrashAlt } from "@iconscout/react-unicons";
import toast, { Toaster } from "react-hot-toast";
import PayOnDeliveryModal from "../components/PayOnDeliveryModal";
import { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const cartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);

  const [paymentMethod, setPaymentMethod] = useState(null);

  const [order, setOrder] = useState(
    typeof window !== "undefined" && localStorage.getItem("order_id")
  );

  const handleOnDelivery = () => {
    setPaymentMethod(0);
    typeof window !== "undefined" && localStorage.setItem("total", total());
  };

  const removeOrder = (i) => {
    removePizza(i);
    typeof window != "undefined" &&
      localStorage.setItem("cartItems", JSON.stringify(cartData.pizzas));
    toast.success("Pizza Removed Successfully");
  };
  const total = () =>
    cartData.pizzas.reduce((a, b) => a + b.qauntity * b.price, 0);
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <tr>
                <th>Pizza</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className={css.tbody}>
              {cartData.pizzas.length > 0 &&
                cartData.pizzas.map((pizza, i) => {
                  const src = urlFor(pizza.image).url();
                  return (
                    <tr key={i}>
                      <td className={css.imageTb}>
                        <Image
                          loader={() => src}
                          src={src}
                          width={85}
                          height={75}
                          alt=""
                        />
                      </td>
                      <td style={{ width: "15%" }}> {pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? "Small"
                          : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>₦{pizza.price.toLocaleString("en-US")}</td>
                      <td> {pizza.qauntity}</td>
                      <td>
                        ₦
                        {(pizza.price * pizza.qauntity).toLocaleString("en-US")}
                      </td>
                      <td
                        onClick={() => removeOrder(i)}
                        style={{
                          cursor: "pointer",
                          color: "var(--themeRed)",
                        }}
                      >
                        <UilTrashAlt size={20} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.cartDetails}>
            <div>
              <span>Items in Cart</span>
              <span> {cartData.pizzas.length}</span>
            </div>
            <div>
              <span>Total</span>
              <span>₦ {total().toLocaleString("en-US")}</span>
            </div>
          </div>
          {!order && cartData.pizzas.length > 0 ? (
            <div className={css.buttons}>
              <button className="btn" onClick={handleOnDelivery}>
                Pay on Delivery
              </button>
              <button className="btn">Pay Now</button>
            </div>
          ) : (
            <span style={{ fontSize: "1rem", textAlign: "center" }}>
              Please Wait! Already have a Pending Order
              <span style={{ color: "var(--themeRed)", marginLeft:"0.4rem" }}>
                <Link href={`/order/${order}`}>{order}</Link>
              </span>
            </span>
          )}
        </div>
        <Toaster />
        <PayOnDeliveryModal
          opened={paymentMethod === 0}
          paymentMethod={paymentMethod}
          setOpened={setPaymentMethod}
        />
      </div>
    </Layout>
  );
}
