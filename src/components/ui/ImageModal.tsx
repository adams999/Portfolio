'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageModalProps) {
  const t = useTranslations('presentation');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative mx-4 w-full max-w-xl overflow-hidden rounded-2xl bg-gray-900 shadow-2xl ring-1 ring-gray-800 md:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-gray-800/80 p-3 text-gray-400 backdrop-blur-sm transition-all duration-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 md:right-6 md:top-6"
          aria-label="Close modal"
        >
          <X className="h-7 w-7 md:h-8 md:w-8" />
        </button>

        {/* Image Container */}
        <div className="relative h-[50vh] w-full bg-gray-950">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            quality={100}
            priority
          />
        </div>

        {/* Name Display */}
        <div className="border-t border-gray-800 bg-gradient-to-r from-gray-900 to-gray-950 px-8 py-8 md:px-12 md:py-10">
          <h2
            id="modal-title"
            className="text-center text-3xl font-bold text-white md:text-5xl"
          >
            {t('fullName')}
          </h2>
          <p className="mt-3 text-center text-base text-gray-400 md:text-lg">
            {t('modalRole')}
          </p>
        </div>
      </div>
    </div>
  );
}
