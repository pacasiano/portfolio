import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ContactView() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState({
    open: false,
    type: 'success',
    title: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const closeModal = () => {
    setModal((current) => ({ ...current, open: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (sending) return;

    setSending(true);

    try {
      const res = await fetch('https://n8n.pacasiano.space/webhook/v1/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: '', email: '', message: '' });
        setModal({
          open: true,
          type: 'success',
          title: 'Message sent',
          message: 'Thanks for reaching out. I’ll get back to you as soon as I can.',
        });
        return;
      }

      setModal({
        open: true,
        type: 'error',
        title: 'Message not sent',
        message: 'Something went wrong while sending your message. Please try again.',
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setModal({
        open: true,
        type: 'error',
        title: 'Message not sent',
        message: 'I couldn’t reach the message service. Please try again in a moment.',
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative w-full overflow-hidden bg-[#0B0C10] px-5 py-28 text-white sm:px-10 lg:py-36"
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[18%] top-[18%] h-[520px] w-[520px] rounded-full bg-[#7779FF]/[0.04] blur-[160px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-white/[0.035]" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#829187]">
              Get in touch
            </span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Send me a
              <span className="block text-[#B1B2FF]">message.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-[#7f8982] sm:text-base">
              Have a project, opportunity, question, or just want to say hello? Feel free to reach out.
            </p>

            <a
              href="mailto:pacasiano@icloud.com"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-[#B4B5BE] transition hover:text-[#9B9DFF]"
            >
              <i className="fa fa-envelope" />
              pacasiano@icloud.com
              <span className="text-[#626473]">↗</span>
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="border-t border-white/[0.07] pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  placeholder="Your name"
                  className="w-full border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-[#4F505A] focus:border-[#9B9DFF]/60 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </Field>

              <Field label="Email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  placeholder="you@example.com"
                  className="w-full border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-[#4F505A] focus:border-[#9B9DFF]/60 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </Field>
            </div>

            <div className="mt-6">
              <Field label="Message">
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={sending}
                  rows={7}
                  placeholder="Tell me what's on your mind..."
                  className="w-full resize-none border-b border-white/[0.1] bg-transparent px-0 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-[#4F505A] focus:border-[#9B9DFF]/60 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </Field>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[#626473]">I&apos;ll get back to you as soon as I can.</p>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={sending ? {} : { scale: 1.02 }}
                whileTap={sending ? {} : { scale: 0.98 }}
                className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full bg-[#9B9DFF] px-6 py-3 text-sm font-semibold text-[#0B0C10] transition hover:bg-[#B6B7FF] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0B0C10]/30 border-t-[#0B0C10]" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send message <span>↗</span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      <AnimatePresence>
        {modal.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-[400px] border border-white/[0.08] bg-[#111216] p-7 text-center shadow-2xl"
            >
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-xl ${
                  modal.type === 'success'
                    ? 'border-[#9B9DFF]/30 text-[#B1B2FF]'
                    : 'border-red-400/20 text-red-400'
                }`}
              >
                {modal.type === 'success' ? '✓' : '!'}
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">{modal.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#7f8982]">{modal.message}</p>

              <button
                type="button"
                onClick={closeModal}
                className="mt-7 text-sm font-semibold text-[#B4B5BE] transition hover:text-[#9B9DFF]"
              >
                {modal.type === 'success' ? 'Done' : 'Try again'}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const Field = ({ label, children }) => (
  <label className="block">
    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#829187]">{label}</span>
    {children}
  </label>
);

Field.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
