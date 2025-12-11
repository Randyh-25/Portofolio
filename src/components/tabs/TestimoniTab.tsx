import { useState, useEffect } from 'react';
import { Star, AlertCircle } from 'lucide-react';
import { db } from '../../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { TestimoniForm } from '../TestimoniForm';

interface Testimoni {
  id: string;
  nama: string;
  email?: string;
  perusahaan?: string;
  rating: number;
  komentar: string;
  createdAt: any;
  status: string;
  hideName?: boolean;
}

export const TestimoniTab = () => {
  const [testimoni, setTestimoni] = useState<Testimoni[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<number | null>(null);

  // Censor name: Randy Hendriyawan -> R***y H*********n
  const censorName = (name: string): string => {
    return name.split(' ').map(word => {
      if (word.length <= 2) return word;
      return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1];
    }).join(' ');
  };

  // Censor email: randy@example.com -> r***y@e****e.com
  const censorEmail = (email: string): string => {
    if (!email) return '';
    const [localPart, domain] = email.split('@');
    if (!domain) return email;
    
    const censoredLocal = localPart.length <= 2 
      ? localPart 
      : localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1];
    
    const [domainName, ...domainExt] = domain.split('.');
    const censoredDomain = domainName.length <= 2
      ? domainName
      : domainName[0] + '*'.repeat(domainName.length - 2) + domainName[domainName.length - 1];
    
    return `${censoredLocal}@${censoredDomain}.${domainExt.join('.')}`;
  };

  useEffect(() => {
    // Simplified query - fetch all first, then filter in code
    const testimoniRef = collection(db, 'testimoni');

    const unsubscribe = onSnapshot(
      testimoniRef,
      snapshot => {
        console.log('Total documents:', snapshot.docs.length);
        
        const allData = snapshot.docs.map(doc => {
          const data = doc.data();
          console.log('Document:', doc.id, 'Status:', data.status);
          return {
            id: doc.id,
            ...data,
          };
        }) as Testimoni[];

        // Filter approved in code
        const approvedData = allData.filter(item => item.status === 'approved');
        console.log('Approved testimoni:', approvedData.length);
        
        // Sort by createdAt descending
        approvedData.sort((a, b) => {
          const dateA = a.createdAt?.seconds || 0;
          const dateB = b.createdAt?.seconds || 0;
          return dateB - dateA;
        });
        
        setTestimoni(approvedData);
        setLoading(false);
      },
      error => {
        console.error('Error fetching testimoni:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const filteredTestimoni = filter 
    ? testimoni.filter(t => t.rating === filter)
    : testimoni;

  const averageRating = testimoni.length > 0
    ? (testimoni.reduce((sum, t) => sum + t.rating, 0) / testimoni.length).toFixed(1)
    : 0;

  return (
    <div
      id="panel-testimoni"
      role="tabpanel"
      aria-labelledby="tab-testimoni"
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-secondary to-white bg-clip-text text-transparent mb-4 sm:mb-6">
            Client Testimonials
          </h2>
          
          {/* Stats */}
          {testimoni.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-white/70">Total Testimonials</p>
                <p className="font-heading font-bold text-lg sm:text-2xl text-accent">{testimoni.length}</p>
              </div>
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-white/70">Average Rating</p>
                <div className="flex items-center gap-2">
                  <Star size={16} className="fill-secondary text-secondary" />
                  <p className="font-heading font-bold text-lg sm:text-2xl text-secondary">{averageRating}</p>
                </div>
              </div>
            </div>
          )}

          {/* Filter */}
          {testimoni.length > 0 && (
            <div className="flex gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-2">
              <button
                onClick={() => setFilter(null)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-body text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  filter === null
                    ? 'bg-accent text-gray-900'
                    : 'bg-white/10 border border-white/20 text-white hover:bg-white/15'
                }`}
              >
                All
              </button>
              {[5, 4, 3, 2, 1].map(rating => (
                <button
                  key={rating}
                  onClick={() => setFilter(rating)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-body text-xs sm:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                    filter === rating
                      ? 'bg-secondary text-gray-900'
                      : 'bg-white/10 border border-white/20 text-white hover:bg-white/15'
                  }`}
                >
                  {rating}
                  <Star size={14} className="fill-current" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Form & Testimoni Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Form */}
          <div className="lg:col-span-1">
            <TestimoniForm />
          </div>

          {/* Testimoni List */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin">
                  <div className="border-4 border-white/20 border-t-accent rounded-full w-8 h-8"></div>
                </div>
                <p className="mt-4 text-white/60 text-sm">Loading testimoni...</p>
              </div>
            ) : filteredTestimoni.length > 0 ? (
              <div className="space-y-4 sm:space-y-5">
                {filteredTestimoni.map(item => (
                  <div
                    key={item.id}
                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:bg-white/15 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                          {item.hideName ? censorName(item.nama) : item.nama}
                        </h3>
                        {item.perusahaan && (
                          <p className="text-xs sm:text-sm text-secondary font-body">
                            {item.perusahaan}
                          </p>
                        )}
                        {item.email && (
                          <p className="text-[10px] sm:text-xs text-white/50 font-body truncate">
                            {censorEmail(item.email)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`transition-colors ${
                            i < item.rating
                              ? 'fill-accent text-accent'
                              : 'text-white/20'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Komentar */}
                    <p className="font-body text-xs sm:text-sm text-white/80 leading-relaxed mb-3">
                      "{item.komentar}"
                    </p>

                    {/* Date */}
                    <p className="text-[10px] sm:text-xs text-white/50 font-body">
                      {item.createdAt?.toDate?.()?.toLocaleDateString?.('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }) || 'Date not available'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center">
                <AlertCircle size={32} className="mx-auto text-white/40 mb-3" />
                <p className="text-white/60 text-sm font-body">
                  {filter 
                    ? `No testimonials with ${filter} stars rating`
                    : 'No testimonials to display yet'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
