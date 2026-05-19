import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FAQ_CATEGORIES } from '~/lib/faqs';

export default function FAQFull() {
  const [activeCategory, setActiveCategory] = useState('allgemein');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  const currentCategory = FAQ_CATEGORIES.find(c => c.id === activeCategory)!;

  function handleCategoryChange(id: string) {
    setActiveCategory(id);
    setOpenIndex(0);
  }

  return (
    <div>
      {/* Category tabs */}
      <div className="mb-10 -mx-4 px-4 overflow-x-auto">
        <div className="flex gap-2 min-w-max pb-1">
          {FAQ_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeCategory === cat.id
                  ? 'bg-green text-ink'
                  : 'text-mute hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {currentCategory.faqs.map((faq, i) => (
            <div key={i} className="border-b border-line">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-xl text-ink">{faq.q}</span>
                <span
                  className="text-green shrink-0 transition-transform duration-500"
                  style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-mute leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
