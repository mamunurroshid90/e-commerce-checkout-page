import React from "react";
import StartPoints from "../../components/StartPoints";
import Form from "../../components/Form";
import PaymentMethod from "../../components/PaymentMethod";
import DeliveryMethod from "../../components/DeliveryMethod";
import ApplyMethod from "../../components/ApplyMethod";
import OrderOverview from "../../components/OrderOverview";
import ConfirmOrder from "../../components/ConfirmOrder";
import ApplyPoints from "../../components/ApplyPoints";

const CheckoutPage = () => {
  return (
    <section className=" bg-[#F2F4F8]">
      <div className=" max-w-container px-4 py-10">
        <div>
          <h1 className=" text-2xl capitalize font-medium">checkout</h1>
          <StartPoints />
        </div>
        <div className=" md:grid md:grid-cols-3 md:gap-6">
          <div className="">
            <Form />
          </div>
          <div className=" md:col-span-2">
            <div className="md:flex gap-6">
              <PaymentMethod />
              <DeliveryMethod />
            </div>
            <div>
              <ApplyMethod />
            </div>
            <div>
              <ApplyPoints />
            </div>
            <div>
              <OrderOverview />
            </div>
          </div>
        </div>
        <div>
          <ConfirmOrder />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
