type Currency = "MXN" | "USD"

interface Price{
    number:number,
    currency:Currency
}

interface ExpenseItem{
    id:number,
    title:string,
    costo:Price
}
interface IExpenses{
    expenses:ArrayList<ExpenseItem>,
    finalCurrency:Currency,
    add(item:ExpenseItem):boolean,
    get():ExpenseItem|null,
    getTotal():string,
    remove(id:number):boolean
}
class ArrayList<T>{
    private items:T[];

    constructor(){
        this.items =[]
    }

    add(item:T):void{
        this.items.push(item);
    }
    get(index:number):T|null{
        const item:T[] = this.items.filter((x:T,i:Number)=>{
            return i === index;
        }); 

        if(item.length===0){
            return null; 
        }else{
            return item[0];
        }
    }

    createFrom(value:T[]):void{
        this.items = [...value];
    }

    getAll():T[]{
        return this.items;
    }
}

class Expenses implements IExpenses{


    expenses!: ArrayList<ExpenseItem>;
    finalCurrency!: Currency;
    
    constructor(currency:Currency){
        this.finalCurrency = currency;
        this.expenses = new ArrayList<ExpenseItem>();
    }

    add(item: ExpenseItem): boolean {
        throw new Error("Method not implemented.");
    }
    get(): ExpenseItem | null {
        throw new Error("Method not implemented.");
    }
    getTotal(): string {
        throw new Error("Method not implemented.");
    }
    remove(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}