import Item from "./item";

export default function Page(){
    return(
        <main className="bg-black min-h-screen text-white text-bold ">
            <h1 className="text-3xl font-bold p-2">Shopping List</h1>
            <Item />
        </main>
    );
}