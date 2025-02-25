import MainImgComp from './subCompGallery/MainImgComp'
import CompMsg from './subCompGallery/CompMsg'
import GalleryFrame from './subCompGallery/GalleryFrame'
import DonationMsg from './subCompOurWork/DonationMsg'




export default function Gallery(){


    return (
        <div className='w-full flex flex-col gap-10'>

             <MainImgComp image='./images/img1.png'/>
             <CompMsg />

            <GalleryFrame/>
            <DonationMsg/>
            
          
        </div>
    )
}