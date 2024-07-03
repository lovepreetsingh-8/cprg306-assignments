export default function Item({name,quantity,category,onSelect}) {
    return (
        <div className='mb-5 bg-slate-900 hover:bg-orange-900 cursor-pointer p-2 max-w-sm' onClick={onSelect}>
        <li className="text-sm">
          <p className="text-xl font-bold">{name}</p>
          <p>Buy {quantity} in {category}</p>
        </li>
      </div>
            
    );
}