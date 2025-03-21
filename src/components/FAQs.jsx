import { useState } from "react";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "What are Lab Grown Diamonds?",
    answer:
      "Lab Grown Diamonds are diamonds that are created in a laboratory setting rather than being mined from the Earth’s crust. These laboratories mimic the conditions under which diamonds naturally develop under the earth over millions of years. They are physically, chemically and optically the same as natural diamonds. Even jewellers and gemologists cannot tell the difference between lab grown and natural diamonds.",
  },
  {
    question: "Are Lab Grown Diamonds real?",
    answer:
      "Yes, Lab Grown Diamonds are real diamonds. Despite being grown in reactors in labs, these diamonds possess the same physical and optical characteristics as natural diamonds. Any diamond is a diamond not because it is mined from the earth but because of its chemical composition. Both Lab Grown Diamonds and natural diamonds possess the same crystalline structure of carbon atoms. Hence Lab Grown Diamonds are real diamonds.",
  },
  {
    question:
      "Can you tell the difference between Lab Grown Diamonds and natural diamonds?",
    answer:
      "There is no way of differentiating between a lab diamond and a natural diamond by looking at them. Even a trained jeweller or expert cannot tell the difference between natural and Lab Grown Diamonds with their naked eyes or with normal microscopes. Only advanced equipment in gemological labs can identify Lab Grown Diamonds.",
  },
  {
    question: "Are Lab Grown Diamonds worth buying?",
    answer:
      "Lab Grown Diamonds are worth buying because they are diamonds and they last forever. Just as jewellers offer buyback on natural diamonds, Jewelbox offers buyback on Lab Grown Diamonds too. Jewelbox offers 80% buyback on Lab Grown Diamonds.",
  },
  {
    question: "Do Lab Grown Diamonds cost less than mined diamonds?",
    answer:
      "Yes. Lab Grown Diamonds tend to retail at a 60-90% discount on equivalent quality of natural diamonds. Lab Grown Diamonds are priced based on cut, colour, clarity and carat – just like natural diamonds.",
  },
];

export default function App() {
  return (
    <section className="tp-banner-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-7">
            <div className={styles.accordion}>
              <h2 className="text-center">FAQs</h2>
              <Accordion data={faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className={styles.accordion}>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.question}
          num={i}
          key={el.title}
        >
          {el.answer}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <>
      <div
        className={`${styles.item} ${isOpen ? styles.open : ""}`}
        onClick={handleToggle}
      >
        <p className={styles.number}>{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.icon}>{isOpen ? "-" : "+"}</p>

        {isOpen && <div className={styles.contentBox}>{children}</div>}
      </div>
    </>
  );
}
