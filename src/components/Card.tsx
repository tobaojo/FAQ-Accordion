import star from '../assets/icon-star.svg';
import Accordion from './Accordion';

const Card = () => {
  return (
    <div className="absolute top-3/12 mx-auto bg-white text-black w-7/8 md:w-5/8 rounded-lg h-[50vh] p-4 shadow-2xl">
      <div className="flex items-center">
        <img src={star} alt="" />
        <h1>FAQs</h1>
      </div>
      <Accordion />
    </div>
  );
};

export default Card;
