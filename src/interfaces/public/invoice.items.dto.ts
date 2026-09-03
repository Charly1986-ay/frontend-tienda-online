interface IItemBase {
  articleId: number;
  units: number; // Entero
  price: number; // Decimal
}

export interface IItemCreate extends IItemBase {

}

export interface IItemPublic extends IItemBase {
  detail: string;
}