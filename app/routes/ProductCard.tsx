import { Card, CardContent } from '~/components/ui/card'
import Chair from '../src/Chair.png'

const products = [
    { id: 1, name: "Wooden Chair", material: "Wood", quantity: 10, image: Chair },
    { id: 2, name: "Wooden Chair", material: "Wood", quantity: 10, image: Chair },
    { id: 3, name: "Wooden Chair", material: "Wood", quantity: 10, image: Chair },
    { id: 4, name: "Wooden Chair", material: "Wood", quantity: 10, image: Chair },
];

const ProductCard = ({ product }: { product: any }) => (
    <CardContent className="w-full bg-[#E0E0E157] h-24 rounded-lg flex items-center">
        <div className="w-full flex items-center justify-between">
            <div className="flex gap-6 ml-10 items-center">
                <div className="w-13 rounded-lg overflow-hidden">
                    <img src={Chair} alt="Product" />
                </div>
                <div className="flex flex-col gap-1">
                    <h1 className="text-sm font-semibold tracking-wide">{product.name}</h1>
                    <p className="text-xs font-normal tracking-wide">{product.material}</p>
                </div>
            </div>
            <div className="flex flex-col mr-15 gap-1">
                <h1 className="text-lg font-semibold tracking-wider">{product.quantity}</h1>
                <p className="text-xs font-normal tracking-wider">Quantity</p>
            </div>
        </div>
    </CardContent>
);


export default function Productlist() {
    return (
        <div className="w-[952px] flex flex-col gap-3 mx-auto mt-20">
            <h1 className="text-lg font-semibold">Product</h1>
            <Card className="w-6xl p-5 mx-auto flex flex-col gap-3 shadow-none">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </Card>
        </div>
    );
};
     









