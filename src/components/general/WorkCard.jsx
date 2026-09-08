/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const WorkCard = ({
  title,
  description,
  link,
  role,
  stack = [],
  imageUrls = [],
  featured = false,
  projectNumber,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [transform, setTransform] = useState(
    'perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)'
  );

  const images = Array.isArray(imageUrls) ? imageUrls.filter(Boolean) : [];
  const coverImage = images[0];

  const handlePointerMove = (event) => {
    if (event.pointerType !== 'mouse') return;

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;

    const rotateX = (y / height - 0.5) * -4;
    const rotateY = (x / width - 0.5) * 4;

    setTransform(
      `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.006)`
    );
  };

  const resetTransform = () => {
    setTransform('perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)');
  };

  const openModal = () => {
    setSelectedImage(0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const previousImage = useCallback(() => {
    setSelectedImage((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setSelectedImage((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'ArrowLeft' && images.length > 1) previousImage();
      if (event.key === 'ArrowRight' && images.length > 1) nextImage();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, images.length, previousImage, nextImage]);

  const modal = (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModal}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050609]/90 p-2 backdrop-blur-md sm:p-5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 18 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex h-[95vh] w-[96vw] max-w-[1500px] flex-col overflow-hidden border border-white/[0.08] bg-[#0B0C10] shadow-2xl lg:h-[92vh] lg:flex-row"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close project"
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl text-white backdrop-blur transition hover:border-[#9B9DFF]/40 hover:text-[#B1B2FF]"
            >
              ×
            </button>

            <div className="flex min-h-0 flex-[1.7] flex-col bg-[#07080B]">
              <div className="relative min-h-[45vh] flex-1 overflow-hidden lg:min-h-0">
                {images[selectedImage] ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={images[selectedImage]}
                      src={images[selectedImage]}
                      alt={`${title} screenshot ${selectedImage + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  </AnimatePresence>
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-[#626473]">
                    No image available
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={previousImage}
                      aria-label="Previous image"
                      className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl text-white backdrop-blur transition hover:text-[#B1B2FF]"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label="Next image"
                      className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl text-white backdrop-blur transition hover:text-[#B1B2FF]"
                    >
                      ›
                    </button>

                    <div className="absolute bottom-4 left-1/2 z-20 -translate-x-1/2 text-xs text-white/60">
                      {selectedImage + 1} / {images.length}
                    </div>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex flex-none gap-2 overflow-x-auto border-t border-white/[0.06] bg-[#090A0D] p-3">
                  {images.map((imageUrl, index) => (
                    <button
                      key={`${imageUrl}-${index}`}
                      type="button"
                      onClick={() => setSelectedImage(index)}
                      className={`h-16 w-24 flex-none overflow-hidden border-b-2 transition ${
                        selectedImage === index
                          ? 'border-[#9B9DFF] opacity-100'
                          : 'border-transparent opacity-45 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imageUrl}
                        alt={`${title} thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <aside className="w-full flex-none overflow-y-auto border-t border-white/[0.06] p-6 lg:w-[420px] lg:border-l lg:border-t-0 lg:p-9">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#829187]">
                  Project
                </span>
                {projectNumber && (
                  <span className="font-mono text-xs text-[#626473]">
                    {String(projectNumber).padStart(2, '0')}
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-white lg:text-5xl">
                {title}
              </h2>

              {role && <p className="mt-3 text-sm font-medium text-[#B1B2FF]">{role}</p>}

              <p className="mt-7 text-sm leading-7 text-[#B4B5BE] sm:text-base">{description}</p>

              {stack.length > 0 && (
                <div className="mt-8">
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#626473]">
                    Tech Stack
                  </h3>
                  <p className="text-sm leading-7 text-[#7f8982]">{stack.join(' · ')}</p>
                </div>
              )}

              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 flex w-full items-center justify-between border-t border-white/[0.08] pt-5 text-sm font-semibold text-[#B4B5BE] transition hover:text-[#9B9DFF]"
                >
                  View Project
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </a>
              )}
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTransform}
        className="h-full w-full"
      >
        <button type="button" onClick={openModal} className="group block w-full text-left">
          <div
            className="w-full transition-transform duration-200 ease-out"
            style={{ transform, transformStyle: 'preserve-3d', willChange: 'transform' }}
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="font-mono text-xs text-[#626473]">
                {String(projectNumber ?? '').padStart(2, '0')}
              </span>
              {role && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#829187]">
                  {role}
                </span>
              )}
            </div>

            <div
              className={`relative w-full overflow-hidden bg-[#15161A] ${
                featured ? 'h-[420px] sm:h-[500px]' : 'h-[360px] sm:h-[430px]'
              }`}
            >
              {coverImage ? (
                <img
                  src={coverImage}
                  alt={title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-[#626473]">
                  No image available
                </div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="pt-5">
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-2xl font-bold tracking-[-0.025em] text-[#E8E8EB] transition group-hover:text-[#B1B2FF] sm:text-3xl">
                  {title}
                </h3>

                <span className="mt-1 text-lg text-[#626473] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#9B9DFF]">
                  ↗
                </span>
              </div>

              <p className="mt-3 max-w-xl line-clamp-2 text-sm leading-6 text-[#7f8982]">
                {description}
              </p>

              {stack.length > 0 && (
                <p className="mt-4 text-xs leading-6 text-[#626473]">{stack.join(' · ')}</p>
              )}
            </div>
          </div>
        </button>
      </div>

      {typeof document !== 'undefined' && createPortal(modal, document.body)}
    </>
  );
};

export default WorkCard;
