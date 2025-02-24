

export default function EventName({name,tagLine}){

    return (

        <div className='w-full flex flex-col items-center justify-center gap-1'>
            <h1 className='font-shippori text-3xl font-semibold text-center underline'>{name}</h1>
            <p className='text-[#787878] text-lg font-poppins'>{tagLine}</p>
        </div>
    )
}