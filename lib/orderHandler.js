export const createOrder = async({
    name,
    phone,
    address,
    totalAmount,
    paymentMethod
}) => {

    const res = await fetch('/api/order', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(totalAmount),
            paymentMethod: paymentMethod,
            status: 1
        })
    });

    const id = await res.json();
    return id;
}