import { ObjectId } from "mongoose";
import { Product } from "./product";
import { OrderStatus } from "../enums/order.enum";

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
  orderStatus: OrderStatus;
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
  orderStatus: OrderStatus;
}

export interface OrderUpdateInput {
  orderId: string;
  orderStatus: OrderStatus;
}
