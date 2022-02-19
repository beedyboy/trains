import { Optional } from 'sequelize'
import { Column, DataType, Table, Model } from "sequelize-typescript";

interface SubscriberAttributes {
  id?: string
  email: string
  createdAt?: string
  updatedAt?: string
}
interface SubscriberModel extends Optional<SubscriberAttributes, 'id'> {};
 
@Table({
  defaultScope: {
    attributes: { exclude: ["deletedAt"] },
  },
  paranoid: true,
  tableName: "subscribers",
})
export default class Subscriber extends Model<SubscriberModel, SubscriberAttributes>   {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: string;
  @Column({
    allowNull: false,
    type: DataType.STRING,
    unique: true
  })
  email!: string;
}

// export default [Subscriber];
