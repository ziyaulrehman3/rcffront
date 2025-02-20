import MainImgComp from './subCompOurWork/MainImgComp'
import Thoughts from './subCompOurWork/Thoughts'

export default function OurWork(){

    return(
        <div>
           <MainImgComp/>

           <div className='flex flex-col lg:flex-row font-sans'>
              <Thoughts heading='Women & Child Welfare' img='images/img1.png' filter='bg-[#093C48]' text='Promoting gender equality, women empowerment, and child welfare through support programs and awareness drives.'/>
              <Thoughts heading='Women & Child Welfare' img='images/img2.png' filter='bg-[#61A047]' text='Promoting gender equality, women empowerment, and child welfare through support programs and awareness drives.'/>
              <Thoughts heading='Women & Child Welfare' img='images/img3.png' filter='bg-[#F29E22]' text='Promoting gender equality, women empowerment, and child welfare through support programs and awareness drives.'/>              
           </div>

        </div>
    )
}

