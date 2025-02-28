import Chair from '../src/Chair.png'

export default function ProductCard() {
    return (
        <div className="w-5xl bg-white rounded-lg border border-[#ACACAE] p-4 mx-auto mt-50 flex flex-col gap-2">
            <div className="w-[100%] bg-[#E0E0E157] h-24 rounded-lg flex items-center">
                <div className='w-full flex items-center justify-between'>
                    <div className='flex gap-6 ml-10 items-center'>
                        <div className='w-13 rounded-lg overflow-hidden'>
                            <img src={Chair} alt=""not-found />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-xl font-semibold tracking-wide'>Wooden Chair</h1>
                            <p className='text-md font-light tracking-wide'>Wood</p>
                        </div>
                    </div>    
                    <div className='flex flex-col mr-15 gap-1'>
                        <h1 className='text-xl font-semibold tracking-wider'>10</h1>
                        <p className='text-md font-light tracking-wider'>Quantity</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


