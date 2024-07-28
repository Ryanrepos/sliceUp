import { ObjectId } from "mongoose";
import { orderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItem {
  _id: ObjectId;
  itemQuantity: number;
  ItemPrice: number;
  orderId: ObjectId;
  productId: ObjectId;
  createAt: Date;
  updatedAt: Date;
}

export interface Order {
  _id: ObjectId;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: orderStatus;
  memberId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  // from order aggregation
  orderItems: OrderItem[];
  productData: Product[];
}

export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  productId: ObjectId;
  orderId?: ObjectId;
}

export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus: orderStatus;
}
