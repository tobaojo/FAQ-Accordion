import Plus from '../assets/icon-plus.svg';
import Minus from '../assets/icon-minus.svg';

interface AccordionBtnProps {
  toggle: boolean;
  onToggle: () => void;
}
const AccordionBtn = ({ toggle, onToggle }: AccordionBtnProps) => {
  return (
    <button onClick={onToggle} className="w-1/8 md:w-[2.5rem] justify-self-end flex-none hover:cursor-pointer">
      <img src={toggle ? Minus : Plus} alt="plus-icon" className="w-full" />
    </button>
  );
};

export default AccordionBtn;
