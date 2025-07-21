import AccordionItem from './AccordionItem';
import textItems from './text.json';

const Accordion = () => {
  return (
    <>
      {textItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} body={item.body} />
      ))}
    </>
  );
};

export default Accordion;
