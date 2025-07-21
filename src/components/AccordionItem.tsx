import { useState, useEffect } from 'react';
import { useAnimate } from 'motion/react';
import AccordionBtn from './AccordionBtn';

interface AccordionItemProps {
  title: string;
  body: string;
}

const AccordionItem = ({ title, body }: AccordionItemProps) => {
  const [toggle, setToggle] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (toggle) {
      animate('.text-item', { y: 5, opacity: 1, display: 'block' }, { duration: 0.3, ease: 'easeInOut' });
    } else {
      animate('.text-item', { y: 0, opacity: 0, display: 'none' }, { duration: 0.3, ease: 'easeInOut' });
    }
  }, [animate, scope, toggle]);

  const onToggle = () => setToggle(!toggle);

  return (
    <div ref={scope}>
      <div className="flex flex-row space-x-5">
        <h2>{title}</h2>
        <AccordionBtn toggle={toggle} onToggle={onToggle} />
      </div>
      <p className="text-item">{body}</p>
    </div>
  );
};

export default AccordionItem;
