'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import { ImageModal } from '@/components/ui/ImageModal';

export function PresentationImage() {
  const t = useTranslations('presentation');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* Animated Glow Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 animate-pulse rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl md:h-80 md:w-80" />
      </div>

      {/* Image Container with Effects */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative z-10 cursor-pointer transition-transform duration-500 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
        aria-label="View profile image"
      >
        {/* Gradient Border */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />

        {/* Image */}
        <div className="relative h-56 w-56 overflow-hidden rounded-full bg-gray-900 ring-4 ring-gray-900/50 md:h-72 md:w-72">
          <Image
            src="/adams.png"
            alt="Adams - Full Stack Developer"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            priority
            quality={95}
          />
        </div>

        {/* Floating Badges */}
        <div className="absolute -right-2 top-8 animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg md:-right-4 md:top-12">
          💻 {t('badgeDev')}
        </div>
        <div
          className="absolute -left-2 bottom-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg md:-left-4 md:bottom-12"
          style={{ animationDelay: '0.5s' }}
        >
          🚀 {t('badgeCreative')}
        </div>
      </button>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc="/adams.png"
        imageAlt="Adams J. Contreras R. - Full Stack Developer"
      />
    </div>
  );
}
