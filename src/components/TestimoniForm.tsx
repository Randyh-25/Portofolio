import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const TestimoniForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    perusahaan: '',
    rating: 5,
    komentar: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      // Validasi
      if (!formData.nama.trim()) {
        throw new Error('Nama harus diisi');
      }
      if (!formData.komentar.trim()) {
        throw new Error('Komentar harus diisi');
      }
      if (formData.komentar.length < 10) {
        throw new Error('Komentar minimal 10 karakter');
      }

      const testimoniRef = collection(db, 'testimoni');
      
      const dataToSubmit = {
        nama: formData.nama.trim(),
        email: formData.email.trim() || '',
        perusahaan: formData.perusahaan.trim() || '',
        rating: parseInt(formData.rating.toString()),
        komentar: formData.komentar.trim(),
        createdAt: new Date(),
        status: 'pending',
      };

      console.log('Submitting testimoni:', dataToSubmit);
      
      await addDoc(testimoniRef, dataToSubmit);

      setMessage({ type: 'success', text: '✅ Testimoni berhasil dikirim! Terima kasih!' });
      setFormData({ nama: '', email: '', perusahaan: '', rating: 5, komentar: '' });
      
      // Hilangkan pesan setelah 5 detik
      setTimeout(() => setMessage(null), 5000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Gagal mengirim testimoni';
      console.error('Error submitting testimoni:', error);
      setMessage({ type: 'error', text: `❌ ${errorMessage}` });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">Bagikan Testimoni Anda</h3>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Nama */}
        <div>
          <label htmlFor="nama" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
            Nama <span className="text-red-400">*</span>
          </label>
          <input
            id="nama"
            type="text"
            name="nama"
            placeholder="Nama Anda"
            value={formData.nama}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
            Email <span className="text-white/50">(Opsional)</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@example.com"
            value={formData.email}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
          />
        </div>

        {/* Perusahaan */}
        <div>
          <label htmlFor="perusahaan" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
            Perusahaan <span className="text-white/50">(Opsional)</span>
          </label>
          <input
            id="perusahaan"
            type="text"
            name="perusahaan"
            placeholder="Nama Perusahaan"
            value={formData.perusahaan}
            onChange={handleChange}
            disabled={loading}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 text-xs sm:text-sm disabled:opacity-50"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-xs sm:text-sm font-body text-white/80 mb-3">
            Rating <span className="text-red-400">*</span>
          </label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => !loading && setFormData(prev => ({ ...prev, rating: star }))}
                disabled={loading}
                className="transition-transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Star
                  size={24}
                  className={`transition-all ${
                    formData.rating >= star 
                      ? 'fill-accent text-accent' 
                      : 'text-white/30 hover:text-white/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Komentar */}
        <div>
          <label htmlFor="komentar" className="block text-xs sm:text-sm font-body text-white/80 mb-2">
            Testimoni <span className="text-red-400">*</span>
          </label>
          <textarea
            id="komentar"
            name="komentar"
            placeholder="Bagikan pengalaman Anda bekerja dengan saya..."
            value={formData.komentar}
            onChange={handleChange}
            disabled={loading}
            rows={5}
            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none text-xs sm:text-sm disabled:opacity-50"
          />
          <p className="text-[10px] sm:text-xs text-white/50 mt-1">
            Minimal 10 karakter
          </p>
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
          {loading ? 'Mengirim...' : 'Kirim Testimoni'}
        </button>
      </form>
    </div>
  );
};
