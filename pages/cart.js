import { useStore } from "../store/store";
import Layout from "../components/Layout";
import css from "../styles/Cart.module.css";
import { client, urlFor } from "../lib/client";
import Image from "next/image";
import { UilTrashAlt } from '@iconscout/react-unicons'
import toast, { Toaster } from "react-hot-toast";


export default function Cart() {
  const cartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);


  const removeOrder = (i)=>{
    removePizza(i);
    toast.success("Pizza Removed Successfully");
  }
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
                          height={85}
                          alt=""
                        />{" "}
                      </td>
                      <td style={{ width: "15%" }}>{pizza.name}</td>
                      <td>
                        {pizza.size === 0
                          ? "Small"
                          : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                      </td>
                      <td>₦{pizza.price.toLocaleString("en-US")}</td>
                      <td>{pizza.qauntity}</td>
                      <td>
                        ₦
                        {(pizza.price * pizza.qauntity).toLocaleString("en-US")}
                      </td>
                      <td
                        onClick={() => removeOrder(i)}
                        style={{ cursor: "pointer", color: "var(--themeRed)" }}
                      >
                        <UilTrashAlt size={20} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className={css.cart}></div>
        <Toaster />
      </div>
    </Layout>
  );
}
