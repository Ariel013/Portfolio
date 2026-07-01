import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaDocker, FaCode, FaTimes,
  FaPython, FaSpider, FaLanguage, FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress,
  SiMongodb, SiPostgresql, SiJavascript,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras,
  SiFastapi, SiApachekafka, SiPlotly, SiZapier, SiOpenai,
} from 'react-icons/si';
import { skills } from '../data/portfolioData';
import { useProfile } from '../context/ProfileContext';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  FaReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  FaJs: SiJavascript, FaHtml5, FaNodeJs, SiExpress,
  SiMongodb, SiPostgresql, FaCode, FaGitAlt, FaDocker,
  FaPython, FaSpider, FaLanguage, FaDatabase,
  SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras,
  SiFastapi, SiApachekafka, SiPlotly, SiZapier, SiOpenai,
};

const brandColor = {
  FaReact: '#61DAFB', SiNextdotjs: null, SiTypescript: '#3178C6',
  SiTailwindcss: '#06B6D4', FaJs: '#F7DF1E', FaHtml5: '#E34F26',
  FaNodeJs: '#339933', SiExpress: null, SiMongodb: '#47A248',
  SiPostgresql: '#4169E1', FaCode: null, FaGitAlt: '#F05032',
  FaDocker: '#2496ED',
  FaPython: '#3776AB', FaSpider: null, FaLanguage: null, FaDatabase: '#4169E1',
  SiPandas: '#150458', SiNumpy: '#4DABCF', SiScikitlearn: '#F7931E',
  SiTensorflow: '#FF6F00', SiKeras: '#D00000',
  SiFastapi: '#009688', SiApachekafka: '#231F20',
  SiPlotly: '#3F4F75', SiZapier: '#FF4A00', SiOpenai: '#412991',
};

const devCategoryTheme = {
  Frontend: {
    gradient: 'from-cyan-500/10 to-blue-500/10 dark:from-cyan-900/20 dark:to-blue-900/20',
    border: 'border-cyan-200 dark:border-cyan-800/40 hover:border-cyan-400 dark:hover:border-cyan-600',
    accent: 'text-cyan-600 dark:text-cyan-400',
    dot: 'bg-cyan-500',
    glow: 'shadow-cyan-500/10',
  },
  Backend: {
    gradient: 'from-green-500/10 to-emerald-500/10 dark:from-green-900/20 dark:to-emerald-900/20',
    border: 'border-green-200 dark:border-green-800/40 hover:border-green-400 dark:hover:border-green-600',
    accent: 'text-green-600 dark:text-green-400',
    dot: 'bg-green-500',
    glow: 'shadow-green-500/10',
  },
  Outils: {
    gradient: 'from-orange-500/10 to-amber-500/10 dark:from-orange-900/20 dark:to-amber-900/20',
    border: 'border-orange-200 dark:border-orange-800/40 hover:border-orange-400 dark:hover:border-orange-600',
    accent: 'text-orange-600 dark:text-orange-400',
    dot: 'bg-orange-500',
    glow: 'shadow-orange-500/10',
  },
};

const dataCategoryTheme = {
  'Python & Data': {
    gradient: 'from-blue-500/10 to-yellow-500/10 dark:from-blue-900/20 dark:to-yellow-900/20',
    border: 'border-blue-200 dark:border-blue-800/40 hover:border-blue-400 dark:hover:border-blue-600',
    accent: 'text-blue-600 dark:text-blue-400',
    dot: 'bg-blue-500',
    glow: 'shadow-blue-500/10',
  },
  'ML & IA': {
    gradient: 'from-violet-500/10 to-purple-500/10 dark:from-violet-900/20 dark:to-purple-900/20',
    border: 'border-violet-200 dark:border-violet-800/40 hover:border-violet-400 dark:hover:border-violet-600',
    accent: 'text-violet-600 dark:text-violet-400',
    dot: 'bg-violet-500',
    glow: 'shadow-violet-500/10',
  },
  'Pipelines & Viz': {
    gradient: 'from-teal-500/10 to-cyan-500/10 dark:from-teal-900/20 dark:to-cyan-900/20',
    border: 'border-teal-200 dark:border-teal-800/40 hover:border-teal-400 dark:hover:border-teal-600',
    accent: 'text-teal-600 dark:text-teal-400',
    dot: 'bg-teal-500',
    glow: 'shadow-teal-500/10',
  },
};

const devCategoryOrder = ['Frontend', 'Backend', 'Outils'];
const dataCategoryOrder = ['Python & Data', 'ML & IA', 'Pipelines & Viz'];

const IconPreview = ({ catSkills }) => (
  <div className="flex items-center gap-2">
    {catSkills.slice(0, 5).map((skill) => {
      const Icon = iconMap[skill.icon] || FaCode;
      const color = brandColor[skill.icon];
      return (
        <div key={skill.name} className="p-1.5 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
          <Icon className="w-4 h-4" style={color ? { color } : { color: '#6B7280' }} />
        </div>
      );
    })}
    {catSkills.length > 5 && (
      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
        +{catSkills.length - 5}
      </span>
    )}
  </div>
);

const SkillChip = ({ skill }) => {
  const Icon = iconMap[skill.icon] || FaCode;
  const color = brandColor[skill.icon];
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-center gap-2.5 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-100 dark:border-gray-600 hover:border-primary-light/40 dark:hover:border-primary-light/40 hover:shadow-md transition-all duration-250 cursor-default"
    >
      <div
        className="p-2.5 rounded-lg transition-colors duration-200"
        style={hovered && color ? { backgroundColor: `${color}18` } : { backgroundColor: 'transparent' }}
      >
        <Icon
          className="w-7 h-7"
          style={color ? { color: hovered ? color : `${color}99` } : { color: '#9CA3AF' }}
        />
      </div>
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const { profile } = useProfile();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryOrder = profile === 'data' ? dataCategoryOrder : devCategoryOrder;
  const categoryTheme = profile === 'data' ? dataCategoryTheme : devCategoryTheme;

  const filteredSkills = skills.filter((s) => s.profile === profile);

  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = filteredSkills.filter((s) => s.category === cat);
    return acc;
  }, {});

  const selectedSkills = selectedCategory ? grouped[selectedCategory] : [];
  const selectedTheme = selectedCategory ? categoryTheme[selectedCategory] : null;

  const getCategoryMeta = (cat) => {
    return t.skills.categories[cat] || { label: cat, description: '' };
  };

  return (
    <>
      <section
        id="skills"
        ref={ref}
        className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="text-sm font-semibold text-primary-light uppercase tracking-widest mb-3">
              {t.skills.tag}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {t.skills.title}
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl">
              {t.skills.subtitle}
            </p>
          </motion.div>

          {/* Category cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {categoryOrder.map((cat, i) => {
              const meta = getCategoryMeta(cat);
              const theme = categoryTheme[cat];
              const catSkills = grouped[cat] || [];

              return (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-left p-6 rounded-2xl bg-gradient-to-br ${theme.gradient} border ${theme.border} shadow-sm hover:shadow-lg ${theme.glow} transition-all duration-300 group`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${theme.dot}`} />
                      <span className={`text-xs font-bold uppercase tracking-widest ${theme.accent}`}>
                        {meta.label}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1.5">
                    {meta.label}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {meta.description}
                  </p>

                  <IconPreview catSkills={catSkills} />

                  <div className={`mt-5 flex items-center gap-1.5 text-xs font-semibold ${theme.accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    <span>Voir les détails</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedCategory(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-br ${selectedTheme.gradient} border-b border-gray-100 dark:border-gray-700`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-2 h-2 rounded-full ${selectedTheme.dot}`} />
                      <span className={`text-xs font-bold uppercase tracking-widest ${selectedTheme.accent}`}>
                        {getCategoryMeta(selectedCategory)?.label}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {getCategoryMeta(selectedCategory)?.label}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {getCategoryMeta(selectedCategory)?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="p-2 rounded-xl text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-white/60 dark:hover:bg-gray-700 transition-colors flex-shrink-0"
                  >
                    <FaTimes className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {selectedSkills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.04 }}
                    >
                      <SkillChip skill={skill} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Skills;
