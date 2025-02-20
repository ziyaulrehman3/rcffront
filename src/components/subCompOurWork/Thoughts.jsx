import JoinButtonComp from './JoinButtonComp'

export default function Thoughts({heading,text,img,filter}){

    return(

           <div className='w-full lg:w-1/3 h-52 relative' >

              <div className='w-full h-full bg-cover bg-center' style={{ backgroundImage: `url(${img})`}}></div>

              <div className={`${filter} w-full h-full absolute top-0 opacity-65`}></div>

              <div className='absolute top-0 p-4 text-white flex flex-col gap-2'>
                  <h1 className='z-20 text-xl font-bold'>{heading}</h1>
                  <p>{text}</p>
                  <JoinButtonComp/>
              </div>

           </div>

        // <div className='w-11/12 lg:w-1/3 h-48 bg-red-900 text-white bg-cover relative' style={{ backgroundImage: `url(${img})` }}>
        //     <div className={`w-full h-48 absolute bg-yellow-800 top-0 z-10 opacity-65`}></div>

        // </div>
    )
}