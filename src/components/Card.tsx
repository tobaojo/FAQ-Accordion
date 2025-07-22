import star from '../assets/icon-star.svg';
import Accordion from './Accordion';

const Card = () => {
  return (
    <div
      className="absolute top-2/12 mx-auto bg-white text-purple-950 w-7/8 md:w-[37.5rem] 
    rounded-2xl h-[70vh] p-[1.5rem] md:p-[2.5rem] shadow-2xl antialiased overflow-auto space-y-7 
    flex flex-col items-center"
    >
      <div className=" align-middle content-center items-center">
        <div className="flex items-center space-x-5 mx-2 mb-5">
          <img src={star} alt="star icon" className="max-w-[10%]" />
          <h1 className="font-bold text-[2rem] md:text-[3.5rem]">FAQs</h1>
        </div>
        <Accordion />
      </div>
    </div>
  );
};

export default Card;
