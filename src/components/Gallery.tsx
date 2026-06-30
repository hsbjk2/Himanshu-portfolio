import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, X, Maximize2, Calendar, FileText } from 'lucide-react';
import { galleryData } from '../data';
import { GalleryItem } from '../types';

interface GalleryProps {
  isDarkMode: boolean;
}

export default function Gallery({ isDarkMode }: GalleryProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'profile' | 'workspace' | 'activities'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filters the items based on the active tab
  const filteredItems = activeTab === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-24 relative overflow-hidden px-6">
      {/* Background ambient radial flare */}
      <div className="absolute bottom-1/3 left-1/4 w-[32rem] h-[32rem] rounded-full radial-glow-cyan opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs font-bold uppercase tracking-widest text-brand-cyan"
          >
            VISUAL GALLERY
          </motion.h4>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-display text-3xl md:text-4xl font-extrabold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Studio Artifacts & Memories
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full"
          />
        </div>

        {/* Filters Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2.5 justify-center mx-auto">
            {(['all', 'profile', 'workspace', 'activities'] as const).map((tab) => {
              // Count items in category
              const count = tab === 'all' ? galleryData.length : galleryData.filter(i => i.category === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold tracking-wider uppercase transition-all duration-300 relative flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === tab
                      ? 'text-white shadow-md'
                      : isDarkMode
                        ? 'text-slate-400 hover:text-white bg-slate-900/50 border border-white/5'
                        : 'text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200'
                  }`}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeGalleryTabBg"
                      className="absolute inset-0 rounded-xl -z-10 bg-brand-cyan"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{tab}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full leading-none font-bold ${
                    activeTab === tab 
                      ? 'bg-white/20 text-white' 
                      : isDarkMode 
                        ? 'bg-white/5 text-slate-500' 
                        : 'bg-slate-200 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`rounded-[2rem] overflow-hidden border group relative aspect-[4/3] flex flex-col justify-end cursor-pointer transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-white/5 bg-slate-950/60 hover:border-brand-cyan/20' 
                    : 'border-slate-200 bg-white shadow-sm hover:shadow-md'
                }`}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image layer */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback image in case link breaks
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                  {/* Glass overlay background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />
                </div>

                {/* Top overlay pills */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider font-semibold bg-slate-950/80 border border-white/10 text-brand-cyan backdrop-blur-md">
                    {item.category === 'profile' ? 'Official' : item.category === 'workspace' ? 'Workspace' : 'Activities'}
                  </span>
                  
                  <div className="flex items-center space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 rounded-lg bg-slate-950/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content Footer overlay */}
                <div className="p-6 relative z-10 text-left space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[9px] font-mono text-slate-400 block leading-none">
                    {item.createdAt.toUpperCase()}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 max-w-md mx-auto">
            <ImageIcon className="w-12 h-12 text-slate-500 mx-auto mb-4 opacity-45" />
            <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              No images available in this category yet.
            </p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`max-w-4xl w-full rounded-[2.5rem] border overflow-hidden relative shadow-2xl ${
                isDarkMode ? 'border-white/5 bg-slate-950' : 'border-slate-200 bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center bg-slate-950/70 hover:bg-slate-900 border border-white/10 text-white z-20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch h-full">
                {/* Left side: Image viewport */}
                <div className="md:col-span-8 bg-black/60 relative aspect-video md:aspect-auto flex items-center justify-center overflow-hidden min-h-[300px]">
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain max-h-[80vh]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Right side: Meta details */}
                <div className={`md:col-span-4 p-8 flex flex-col justify-between text-left ${
                  isDarkMode ? 'bg-slate-950' : 'bg-slate-50/50'
                }`}>
                  <div className="space-y-6">
                    <div className="space-y-1.5">
                      <span className="px-2.5 py-1 rounded-full font-mono text-[9px] uppercase tracking-wider font-semibold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 w-fit block">
                        {selectedItem.category.toUpperCase()}
                      </span>
                      <h3 className={`font-display font-extrabold text-2xl tracking-tight leading-tight pt-2 ${
                        isDarkMode ? 'text-white' : 'text-slate-950'
                      }`}>
                        {selectedItem.title}
                      </h3>
                    </div>

                    <p className={`text-sm leading-relaxed font-sans ${
                      isDarkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {selectedItem.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-slate-800/10 text-xs font-mono text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-brand-cyan" />
                      <span>Logged: {selectedItem.createdAt}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-brand-purple" />
                      <span>ID: {selectedItem.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
