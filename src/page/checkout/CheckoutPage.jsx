import React from "react";
import StartPoints from "../../components/StartPoints";
import Form from "../../components/Form";
import PaymentMethod from "../../components/PaymentMethod";
import DeliveryMethod from "../../components/DeliveryMethod";
import ApplyMethod from "../../components/ApplyMethod";
import OrderOverview from "../../components/OrderOverview";
import ConfirmOrder from "../../components/ConfirmOrder";

const CheckoutPage = () => {
  return (
    <section className=" bg-[#F2F4F8]">
      <div className=" max-w-container px-4 py-10">
        <div>
          <h1 className=" text-2xl capitalize font-medium">checkout</h1>
          <StartPoints />
        </div>
        <div className=" lg:grid lg:grid-cols-3 lg:gap-7">
          <div className="">
            <Form />
          </div>
          <div className=" lg:col-span-2">
            <div className=" lg:grid lg:grid-cols-2 lg:gap-5">
              <div className=" ">
                <PaymentMethod />
              </div>
              <div className="">
                <DeliveryMethod />
              </div>
            </div>
            <div>
              <ApplyMethod />
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
