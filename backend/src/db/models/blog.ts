import { Optional } from 'sequelize'
import { Column, DataType, Table, Model } from "sequelize-typescript";

interface BlogAttributes {
  id?: string
  title: string
  images?: string
  content: string
  slug: string
  createdAt?: string
  updatedAt?: string
}
interface BlogModel extends Optional<BlogAttributes, 'id'> {};
 
@Table({
    defaultScope: {
      attributes: { exclude: ["deletedAt"] },
    },
    paranoid: true,
    tableName: "blogs",
  })
  export default class Blog extends Model<BlogModel, BlogAttributes>   {
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
    title!: string;
    @Column({
      allowNull: false,
      type: DataType.STRING,
      unique: true
    })
    slug!: string;
    @Column({
      allowNull: false,
      type: DataType.STRING,
      unique: true
    })
    content!: string;
    @Column({
      allowNull: false,
      type: DataType.STRING 
    })
    images!: string;
    
  }