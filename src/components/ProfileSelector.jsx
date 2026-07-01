import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaArrowRight } from 'react-icons/fa';
import { useProfile } from '../context/ProfileContext';
import { personalInfo } from '../data/portfolioData';

const profiles = [
  {
    key: 'dev',
    icon: FaCode,
    label: 'Développeur Fullstack',
    sub: 'Backend first · Node.js · APIs REST',
    desc: 'Applications web, APIs robustes, architecture backend, intégration de services.',
    pills: ['Node.js', 'React', 'MongoDB', 'Next.js'],
    gradient: 'from-indigo-600 to-cyan-500',
    gradientSoft: 'from-indigo-500/10 to-cyan-500/10 dark:from-indigo-900/30 dark:to-cyan-900/20',
    border: 'border-indigo-200 dark:border-indigo-800/40 hover:border-indigo-400 dark:hover:border-indigo-500',
    accent: 'text-indigo-600 dark:text-indigo-400',
    pillColor: 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/40',
    glow: 'hover:shadow-indigo-500/10',
  },
  {
    key: 'data',
    icon: FaDatabase,
    label: 'Data Scientist',
    sub: 'Python · Scikit-learn · Pandas · FastAPI',
    desc: 'Pipelines ML, NLP, systèmes RAG, analyse de données et mise en production de modèles.',
    pills: ['Python', 'Pandas', 'Scikit-learn', 'ChromaDB'],
    gradient: 'from-violet-600 to-purple-500',
    gradientSoft: 'from-violet-500/10 to-purple-500/10 dark:from-violet-900/30 dark:to-purple-900/20',
    border: 'border-violet-200 dark:border-violet-800/40 hover:border-violet-400 dark:hover:border-violet-500',
    accent: 'text-violet-600 dark:text-violet-400',
    pillColor: 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-800/40',
    glow: 'hover:shadow-violet-500/10',
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const ProfileSelector = () => {
  const { setProfile } = useProfile();

  return (
    <motion.div
      key="selector"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-15"
        style={{
          backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-500/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Avatar */}
          <motion.div variants={item} className="mb-8">
            <div className="w-20 h-20 rounded-full p-0.5 bg-gradient-to-br from-indigo-500 to-violet-500 shadow-xl mx-auto">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 variants={item} className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {personalInfo.name}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-2"
          >
            Je construis des systèmes, des applications web aux pipelines de données et modèles de machine learning.
          </motion.p>

          {/* Question */}
          <motion.p
            variants={item}
            className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-10"
          >
            Quel angle voulez-vous explorer ?
          </motion.p>

          {/* Profile cards */}
          <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
            {profiles.map((p) => {
              const Icon = p.icon;
              return (
                <motion.button
                  key={p.key}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setProfile(p.key)}
                  className={`group text-left p-7 rounded-2xl bg-gradient-to-br ${p.gradientSoft} border ${p.border} shadow-sm hover:shadow-xl ${p.glow} transition-all duration-300`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg mb-5`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {p.label}
                  </h2>
                  <p className={`text-sm font-medium mb-3 ${p.accent}`}>
                    {p.sub}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.pills.map((pill) => (
                      <span
                        key={pill}
                        className={`px-2.5 py-1 text-xs font-medium rounded-md border ${p.pillColor}`}
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center gap-2 text-sm font-semibold ${p.accent} group-hover:gap-3 transition-all duration-200`}>
                    <span>Explorer ce profil</span>
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileSelector;
