export class CoffeeBean {
    _id?: string;
    itemName: string;
    itemQuantity: number;
    itemBought: boolean;

    constructor(itemName: string, itemQuantity: number, itemBought: boolean){
        this.itemName = itemName;
        this.itemQuantity = itemQuantity;
        this.itemBought = itemBought;
    }
}