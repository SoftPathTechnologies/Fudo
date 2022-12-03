import { Modal, useMantineTheme, Input, Textarea } from "@mantine/core";
import css from '../styles/PayOnDeliveryModal.module.css'
import { UilUser, UilMapMarker , UilPhone  } from "@iconscout/react-unicons";
import { useState } from "react";
import { createOrder } from "../lib/orderHandler";
import toast from "react-hot-toast";
import { useStore } from "../store/store";
import {useRouter} from 'next/router'


export default function PayOnDeliveryModal({opened, paymentMethod, setOpened}) {
    const theme = useMantineTheme();
    const totalAmount = typeof window != 'undefined' && localStorage.getItem('total');

    const resetCart = useStore((state) => state.resetCart);
    const [formData, setformData] = useState({});
    const router = useRouter();

    const handleInput = (e)=>{
      setformData({...formData, [e.target.name]:e.target.value});
    }

    const handleSubmit = async (e)=>{
      e.preventDefault(); 
      const id = await createOrder({ ...formData, totalAmount, paymentMethod });
      toast.success("Order Placed Successfully and your Tracking ID is " + id);
      resetCart();
      {
        typeof window != "undefined" && localStorage.setItem("order_id", id);
      }
      router.push(`/order/${id}`);
    }

    return (
      <Modal
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
        opened={opened}
        onClose={() => setOpened(null)}
      >
        <h2 style={{ textAlign: "center" }}>Pay On Delivery</h2>
        {/* Modal content */}
        <form onSubmit={handleSubmit} className={css.formContainer}>
          <Input
            name="name"
            onChange={handleInput}
            icon={<UilUser size={16} />}
            placeholder="Enter Fullname"
          />
          <Input
            onChange={handleInput}
            icon={<UilPhone size={16} />}
            placeholder="Enter Phone Number"
            name="phone"
          />
          <Textarea
            onChange={handleInput}
            placeholder="Your Address"
            icon={<UilMapMarker size={16} />}
            name="address"
          />
          <div className={css.formFooter}>
            <span>
              You will pay{" "}
              <span style={{ color: "var(--themeRed)", fontWeight: "bold" }}>
                ₦
              </span>
              <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                {parseInt(totalAmount).toLocaleString("en-US")}
              </span>{" "}
              on Delivery
            </span>
            <button className="btn" type="submit">
              Confirm Place Order
            </button>
          </div>
        </form>
      </Modal>
    );
};
