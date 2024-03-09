export const CardComponent = ({ span, children }) => {
  return (
    <article
      className={`rounded-xl flex flex-col  px-5 py-3 shadow-xl border-[thin] border-textColor border-opacity-[.1]  gap-4 ${span}`}
    >
      {children}
    </article>
  );
};
