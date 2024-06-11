export default function Item({name,quantity,category}) {
    return (
                <>
                    <ul className="p-2 m-4 bg-slate-900 max-w-sm">
                        <li className= "text-xl font-bold">{name}</li>
                        <li className="text-sm"><p>Buy {quantity} in {category}</p></li>
                    </ul>
                </>
            
    );
}