import { useMemo, useState } from 'react';
import { Star, Send } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import portfolioData from '../data/portfolioData.json';

export const TestimoniForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    perusahaan: '',
    rating: 5,
    komentar: '',
    hideName: false,
    collaborationType: 'client' as 'client' | 'team',
    projectSlug: '',
    projectCustomName: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);

  const projectOptions = useMemo(() => {
    return Array.isArray(portfolioData.projects)
      ? portfolioData.projects.map(project => ({ slug: project.slug, title: project.title }))
      : [];
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleCollaborationChange = (value: 'client' | 'team') => {
    setFormData(prev => ({
      ...prev,
      collaborationType: value,
      perusahaan: value === 'team' ? '' : prev.perusahaan,
      projectSlug: value === 'client' ? '' : prev.projectSlug,
      projectCustomName: value === 'client' ? '' : prev.projectCustomName,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Validation / Validasi
      if (!formData.nama.trim()) {
        throw new Error('Name is required / Nama wajib diisi');
      }
      if (!formData.komentar.trim()) {
        throw new Error('Testimonial is required / Testimoni wajib diisi');
      }
      if (formData.komentar.length < 10) {
        throw new Error('Testimonial must be at least 10 characters / Minimal 10 karakter');
      }
      if (formData.collaborationType === 'team' && !formData.projectSlug) {
        throw new Error('Please select the project we worked on / Pilih project yang kita kerjakan');
      }
      if (formData.collaborationType === 'team' && formData.projectSlug === 'other' && !formData.projectCustomName.trim()) {
        throw new Error('Please enter the project name / Masukkan nama project');
      }

      const selectedProject = projectOptions.find(project => project.slug === formData.projectSlug);

      const testimoniRef = collection(db, 'testimoni');
      
      const dataToSubmit = {
        nama: formData.nama.trim(),
        perusahaan: formData.collaborationType === 'client' ? formData.perusahaan.trim() : '',
        collaborationType: formData.collaborationType,
        projectSlug: formData.collaborationType === 'team' ? formData.projectSlug : '',
        projectName: formData.collaborationType === 'team'
          ? (formData.projectSlug === 'other'
            ? formData.projectCustomName.trim()
            : (selectedProject?.title || ''))
          : '',
        rating: parseInt(formData.rating.toString()),
        komentar: formData.komentar.trim(),
        hideName: formData.hideName,
        createdAt: new Date(),
        status: 'pending',
      };

      console.log('Submitting testimoni:', dataToSubmit);
      
      await addDoc(testimoniRef, dataToSubmit);

      setMessage({ type: 'success', text: '✅ Testimonial sent successfully! Thank you! / Testimoni terkirim! Terima kasih!' });
      setFormData({
        nama: '',
        perusahaan: '',
        rating: 5,
        komentar: '',
        hideName: false,
        collaborationType: 'client',
        projectSlug: '',
        projectCustomName: '',
      });
      
      // Hilangkan pesan setelah 5 detik
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send testimonial';
      console.error('Error submitting testimoni:', error);
      setMessage({ type: 'error', text: `❌ ${errorMessage}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">Share Your Testimonial / Bagikan Testimoni</h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Collaboration Type */}
        <div>
          <p className="block text-xs sm:text-sm font-body text-white/80 mb-2">How did we work together? / Bagaimana kita bekerja sama?</p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleCollaborationChange('client')}
              disabled={loading}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border backdrop-blur ${
                formData.collaborationType === 'client'
                  ? 'bg-accent text-gray-900 border-accent'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/15'
              }`}
            >
              Client / Klien
            </button>
            <button
              type="button"
              onClick={() => handleCollaborationChange('team')}
              disabled={loading}
              className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all border backdrop-blur ${
                formData.collaborationType === 'team'
                  ? 'bg-secondary text-gray-900 border-secondary'
                  : 'bg-white/10 border-white/20 text-white hover:bg-white/15'
              }`}
            >
              Team collaboration / Bekerja sama dalam tim
            </button>
          </div>
        </div>

        {/* Nama */}
        <div>
          <label htmlFor="nama" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
            Name / Nama <span className="text-red-400">*</span>
          </label>
          <input
            id="nama"
            type="text"
            name="nama"
            placeholder="Your Name / Nama Anda"
            value={formData.nama}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
          />
        </div>

        {/* Perusahaan */}
        <div>
          {formData.collaborationType === 'team' ? (
            <>
              <label htmlFor="projectSlug" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
                Project we worked on / Project yang kita kerjakan <span className="text-red-400">*</span>
              </label>
              <select
                id="projectSlug"
                name="projectSlug"
                value={formData.projectSlug}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
              >
                <option value="other" className="bg-gray-900">Other / Lainnya</option>
                <option value="" className="bg-gray-900">Select a project / Pilih project</option>
                {projectOptions.map(project => (
                  <option key={project.slug} value={project.slug} className="bg-gray-900">
                    {project.title}
                  </option>
                ))}
              </select>
              {formData.projectSlug === 'other' && (
                <div className="mt-3">
                  <label htmlFor="projectCustomName" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
                    Project name (manual) / Nama project (manual) <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="projectCustomName"
                    type="text"
                    name="projectCustomName"
                    placeholder="Type the project name / Ketik nama project"
                    value={formData.projectCustomName}
                    onChange={handleChange}
                    disabled={loading}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              <label htmlFor="perusahaan" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
                Company / Organization (Optional) / Perusahaan (Opsional)
              </label>
              <input
                id="perusahaan"
                type="text"
                name="perusahaan"
                placeholder="Company Name"
                value={formData.perusahaan}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
              />
            </>
          )}
        </div>

        {/* Rating */}
        <div>
              <label className="block text-xs sm:text-sm font-body text-white/80 mb-2">
                Rating / Penilaian <span className="text-red-400">*</span>
          </label>
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="flex gap-1"
              onMouseLeave={() => setHoveredRating(null)}
            >
              {[1, 2, 3, 4, 5].map(star => {
                const isActive = hoveredRating !== null ? star <= hoveredRating : star <= formData.rating;
                return (
                  <button
                    key={star}
                    type="button"
                    onClick={() => !loading && setFormData(prev => ({ ...prev, rating: star }))}
                    onMouseEnter={() => setHoveredRating(star)}
                    disabled={loading}
                    className="transition-all duration-200 hover:scale-125 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star
                      size={28}
                      className={`transition-all duration-200 ${
                        isActive
                          ? 'fill-accent text-accent drop-shadow-lg' 
                          : 'fill-none text-white/30 hover:text-white/50'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <span className="text-sm sm:text-base font-bold text-accent">
              {hoveredRating || formData.rating} / 5
            </span>
          </div>
          <p className="text-[10px] sm:text-xs text-white/50">
            {hoveredRating 
              ? `Click to give ${hoveredRating} stars / Klik untuk memberi ${hoveredRating} bintang`
              : `You rated ${formData.rating} stars / Anda memberi ${formData.rating} bintang`
            }
          </p>
        </div>

        {/* Komentar */}
        <div>
          <label htmlFor="komentar" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
            Testimonial / Testimoni <span className="text-red-400">*</span>
          </label>
          <textarea
            id="komentar"
            name="komentar"
            placeholder="Share your experience working with me... / Ceritakan pengalamanmu bekerja dengan saya..."
            value={formData.komentar}
            onChange={handleChange}
            disabled={loading}
            rows={5}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm disabled:opacity-50"
          />
          <p className="text-[10px] sm:text-xs text-white/50 mt-1">
            Minimum 10 characters / Minimal 10 karakter
          </p>
        </div>

        {/* Privacy Option */}
        <div className="flex items-center gap-2">
          <input
            id="hideName"
            type="checkbox"
            name="hideName"
            checked={formData.hideName}
            onChange={handleChange}
            disabled={loading}
            className="w-4 h-4 rounded border border-white/30 bg-white/10 text-accent focus:ring-2 focus:ring-accent cursor-pointer disabled:opacity-50"
          />
          <label htmlFor="hideName" className="text-xs sm:text-sm text-white/80 font-body cursor-pointer select-none">
            Don't share my name (your name will be hidden) / Jangan tampilkan nama saya (nama akan disembunyikan)
          </label>
        </div>

        {/* Status Message */}
        {message && (
          <div
            className={`p-3 rounded-lg text-xs sm:text-sm font-body transition-all ${
              message.type === 'success'
                ? 'bg-accent/20 border border-accent/30 text-accent'
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-accent to-secondary text-gray-900 font-body font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-accent/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm"
        >
          <Send size={16} className="sm:w-5 sm:h-5" />
          {loading ? 'Sending... / Mengirim...' : 'Send Testimonial / Kirim Testimoni'}
        </button>
      </form>
    </div>
  );
};
