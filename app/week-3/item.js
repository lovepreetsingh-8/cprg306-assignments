import item from "./item-list";

export default function Item(name,quantity,category) {
    return (
        <>
        {item.map(function(item){
            return(
                <ul className="p-2 m-4 bg-slate-900 max-w-sm">
                    <li className= "text-xl font-bold">{item.name}</li>
                    <li class="text-sm"><p>Buy {item.quantity} in {item.category}</p></li>
                </ul>
               )
        })}</>
    );
}