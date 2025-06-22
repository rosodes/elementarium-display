import React, { memo, useMemo } from 'react';
import { elements } from '../../data/elements';
import { useValidatedTranslation } from '../../hooks/useValidatedTranslation';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';
import { 
  Atom, 
  Zap, 
  Globe, 
  Beaker, 
  Flame, 
  Snowflake,
  Activity,
  Shield,
  Layers,
  Clock,
  BarChart3,
  TrendingUp,
  Sparkles,
  FlaskConical
} from 'lucide-react';

interface QuickStatsProps {
  searchQuery?: string;
  filteredCount?: number;
}

const QuickStats = memo(({ searchQuery, filteredCount }: QuickStatsProps) => {
  const { t } = useValidatedTranslation('quickStats');
  
  const stats = useMemo(() => {
    const validElements = elements.filter(el => el !== null);
    
    // Основная статистика
    const natural = validElements.filter(el => !el.radioactive).length;
    const synthetic = validElements.filter(el => el.radioactive).length;
    
    // Категории элементов
    const alkaliMetals = validElements.filter(el => el.category === 'alkali metal').length;
    const alkalineEarthMetals = validElements.filter(el => el.category === 'alkaline earth metal').length;
    const transitionMetals = validElements.filter(el => el.category === 'transition metal').length;
    const postTransitionMetals = validElements.filter(el => el.category === 'post-transition metal').length;
    const metalloids = validElements.filter(el => el.category === 'metalloid').length;
    const nonmetals = validElements.filter(el => el.category === 'nonmetal').length;
    const halogens = validElements.filter(el => el.category === 'halogen').length;
    const nobleGases = validElements.filter(el => el.category === 'noble gas').length;
    const lanthanides = validElements.filter(el => el.category === 'lanthanide').length;
    const actinides = validElements.filter(el => el.category === 'actinide').length;
    const unknownProperties = validElements.filter(el => el.category === 'unknown').length;
    
    // Блоки элементов
    const sBlock = alkaliMetals + alkalineEarthMetals + 2; // +H, He
    const pBlock = postTransitionMetals + metalloids + nonmetals + halogens + nobleGases;
    const dBlock = transitionMetals;
    const fBlock = lanthanides + actinides;
    
    // Агрегатные состояния (примерные данные)
    const solids = validElements.filter(el => {
      const atomic = parseInt(el.atomic);
      return ![1, 2, 7, 8, 9, 10, 17, 18, 36, 54, 86, 118].includes(atomic); // исключаем газы при комнатной температуре
    }).length;
    const liquids = 2; // Hg, Br
    const gases = validElements.length - solids - liquids;
    
    // Временные периоды открытий
    const ancient = validElements.filter(el => {
      const atomic = parseInt(el.atomic);
      return [6, 16, 26, 29, 47, 50, 79, 82].includes(atomic); // C, S, Fe, Cu, Ag, Sn, Au, Pb
    }).length;
    const modern = validElements.filter(el => {
      const atomic = parseInt(el.atomic);
      return atomic >= 93; // Трансурановые элементы
    }).length;
    const classical = validElements.length - ancient - modern;
    
    return {
      total: validElements.length,
      natural,
      synthetic,
      
      // Категории
      alkaliMetals,
      alkalineEarthMetals,
      transitionMetals,
      postTransitionMetals,
      metalloids,
      nonmetals,
      halogens,
      nobleGases,
      lanthanides,
      actinides,
      unknownProperties,
      
      // Блоки
      sBlock,
      pBlock,
      dBlock,
      fBlock,
      
      // Агрегатные состояния
      solids,
      liquids,
      gases,
      
      // Временные периоды
      ancient,
      classical,
      modern,
      
      // Структура таблицы
      periods: 7,
      groups: 18
    };
  }, []);

  const currentCount = filteredCount !== undefined ? filteredCount : stats.total;
  const isFiltered = searchQuery && searchQuery.trim().length > 0;

  // WCAG AAA совместимый компонент с высокой контрастностью
  const StatCard = ({ 
    icon: Icon, 
    title, 
    value, 
    total, 
    variant = 'default',
    description 
  }: {
    icon: React.ElementType;
    title: string;
    value: number;
    total?: number;
    variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'destructive';
    description?: string;
  }) => {
    const percentage = total ? Math.round((value / total) * 100) : 100;
    
    // WCAG AAA цветовая схема с контрастностью 7:1+
    const variantStyles = {
      default: 'bg-white dark:bg-gray-900 border-gray-800 dark:border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-900 dark:hover:border-gray-100',
      primary: 'bg-blue-50 dark:bg-blue-950 border-blue-800 dark:border-blue-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:border-blue-900 dark:hover:border-blue-100',
      secondary: 'bg-purple-50 dark:bg-purple-950 border-purple-800 dark:border-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900 hover:border-purple-900 dark:hover:border-purple-100',
      accent: 'bg-indigo-50 dark:bg-indigo-950 border-indigo-800 dark:border-indigo-200 hover:bg-indigo-100 dark:hover:bg-indigo-900 hover:border-indigo-900 dark:hover:border-indigo-100',
      success: 'bg-green-50 dark:bg-green-950 border-green-800 dark:border-green-200 hover:bg-green-100 dark:hover:bg-green-900 hover:border-green-900 dark:hover:border-green-100',
      warning: 'bg-orange-50 dark:bg-orange-950 border-orange-800 dark:border-orange-200 hover:bg-orange-100 dark:hover:bg-orange-900 hover:border-orange-900 dark:hover:border-orange-100',
      destructive: 'bg-red-50 dark:bg-red-950 border-red-800 dark:border-red-200 hover:bg-red-100 dark:hover:bg-red-900 hover:border-red-900 dark:hover:border-red-100'
    };

    const iconStyles = {
      default: 'text-gray-900 dark:text-gray-100',
      primary: 'text-blue-900 dark:text-blue-100',
      secondary: 'text-purple-900 dark:text-purple-100',
      accent: 'text-indigo-900 dark:text-indigo-100',
      success: 'text-green-900 dark:text-green-100',
      warning: 'text-orange-900 dark:text-orange-100',
      destructive: 'text-red-900 dark:text-red-100'
    };

    const textStyles = {
      default: 'text-gray-900 dark:text-gray-100',
      primary: 'text-blue-900 dark:text-blue-100',
      secondary: 'text-purple-900 dark:text-purple-100',
      accent: 'text-indigo-900 dark:text-indigo-100',
      success: 'text-green-900 dark:text-green-100',
      warning: 'text-orange-900 dark:text-orange-100',
      destructive: 'text-red-900 dark:text-red-100'
    };
    
    const cardId = `stat-${title.replace(/\s+/g, '-').toLowerCase()}`;
    
    return (
      <Card 
        className={`
          transition-all duration-300 hover:shadow-xl hover:-translate-y-1
          border-4 focus-within:ring-4 focus-within:ring-blue-600 focus-within:ring-offset-2
          ${variantStyles[variant]}
        `}
        role="region"
        aria-labelledby={`${cardId}-title`}
        aria-describedby={`${cardId}-desc`}
        tabIndex={0}
      >
        <CardContent className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-xl border-2 border-current ${iconStyles[variant]} bg-white dark:bg-gray-900`}>
                <Icon className="w-8 h-8" aria-hidden="true" />
              </div>
              <div>
                <h4 
                  id={`${cardId}-title`}
                  className={`text-lg font-bold mb-2 ${textStyles[variant]}`}
                >
                  {title}
                </h4>
                <div className="flex items-baseline space-x-3">
                  <span className={`text-4xl font-black ${textStyles[variant]}`}>
                    {value.toLocaleString()}
                  </span>
                  {total && (
                    <span className={`text-2xl font-bold opacity-70 ${textStyles[variant]}`}>
                      /{total.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
            {total && (
              <Badge 
                variant="outline" 
                className={`text-lg px-4 py-2 font-bold border-2 ${textStyles[variant]} border-current`}
              >
                {percentage}%
              </Badge>
            )}
          </div>
          
          {description && (
            <p 
              id={`${cardId}-desc`}
              className={`text-base font-medium mb-4 ${textStyles[variant]} opacity-90`}
            >
              {description}
            </p>
          )}
          
          {total && (
            <div className="space-y-4">
              <Progress 
                value={percentage} 
                className="h-4 border-2 border-current"
                aria-label={`${title}: ${percentage}% ${t('labels.ofTotal')}`}
              />
              <div className={`flex justify-between text-base font-bold ${textStyles[variant]}`}>
                <span>{percentage}{t('labels.ofTotal')}</span>
                <span>{value} {t('labels.outOf')} {total} {t('labels.elements')}</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full">
      {/* Четкий разделитель от таблицы */}
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <Separator className="mb-20 h-1 bg-gray-900 dark:bg-gray-100" />
        
        {/* Заголовок секции с высокой контрастностью */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 dark:bg-blue-100 rounded-full mb-8 border-4 border-blue-900 dark:border-blue-100">
            <BarChart3 className="w-10 h-10 text-blue-100 dark:text-blue-900" />
          </div>
          <h2 className="text-5xl font-black text-gray-900 dark:text-gray-100 mb-6">
            {t('title')}
          </h2>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* Основная статистика */}
          <section aria-labelledby="main-stats-heading">
            <h3 id="main-stats-heading" className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-10 flex items-center">
              <BarChart3 className="w-8 h-8 mr-4" />
              {t('sections.mainStats.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                icon={Atom}
                title={isFiltered ? t('sections.mainStats.foundElements') : t('sections.mainStats.totalElements')}
                value={currentCount}
                total={isFiltered ? stats.total : undefined}
                variant="primary"
                description={t('sections.mainStats.descriptions.total')}
              />
              <StatCard
                icon={Globe}
                title={t('sections.mainStats.naturalElements')}
                value={stats.natural}
                total={stats.total}
                variant="success"
                description={t('sections.mainStats.descriptions.natural')}
              />
              <StatCard
                icon={Zap}
                title={t('sections.mainStats.syntheticElements')}
                value={stats.synthetic}
                total={stats.total}
                variant="warning"
                description={t('sections.mainStats.descriptions.synthetic')}
              />
              <StatCard
                icon={Beaker}
                title={t('sections.mainStats.tableStructure')}
                value={stats.periods}
                variant="accent"
                description={`${stats.periods} ${t('labels.periods')} × ${stats.groups} ${t('labels.groups')}`}
              />
            </div>
          </section>

          <Separator className="h-1 bg-gray-900 dark:bg-gray-100" />

          {/* Блоки элементов */}
          <section aria-labelledby="blocks-heading">
            <h3 id="blocks-heading" className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-10 flex items-center">
              <Layers className="w-8 h-8 mr-4" />
              {t('sections.blocks.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard
                icon={Activity}
                title={t('sections.blocks.sBlock')}
                value={stats.sBlock}
                total={stats.total}
                variant="destructive"
                description={t('sections.blocks.descriptions.sBlock')}
              />
              <StatCard
                icon={TrendingUp}
                title={t('sections.blocks.pBlock')}
                value={stats.pBlock}
                total={stats.total}
                variant="primary"
                description={t('sections.blocks.descriptions.pBlock')}
              />
              <StatCard
                icon={Shield}
                title={t('sections.blocks.dBlock')}
                value={stats.dBlock}
                total={stats.total}
                variant="warning"
                description={t('sections.blocks.descriptions.dBlock')}
              />
              <StatCard
                icon={Sparkles}
                title={t('sections.blocks.fBlock')}
                value={stats.fBlock}
                total={stats.total}
                variant="accent"
                description={t('sections.blocks.descriptions.fBlock')}
              />
            </div>
          </section>

          <Separator className="h-1 bg-gray-900 dark:bg-gray-100" />

          {/* Агрегатные состояния */}
          <section aria-labelledby="states-heading">
            <h3 id="states-heading" className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-10 flex items-center">
              <FlaskConical className="w-8 h-8 mr-4" />
              {t('sections.states.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={Flame}
                title={t('sections.states.solids')}
                value={stats.solids}
                total={stats.total}
                variant="default"
                description={t('sections.states.descriptions.solids')}
              />
              <StatCard
                icon={Activity}
                title={t('sections.states.liquids')}
                value={stats.liquids}
                total={stats.total}
                variant="primary"
                description={t('sections.states.descriptions.liquids')}
              />
              <StatCard
                icon={Snowflake}
                title={t('sections.states.gases')}
                value={stats.gases}
                total={stats.total}
                variant="secondary"
                description={t('sections.states.descriptions.gases')}
              />
            </div>
          </section>

          <Separator className="h-1 bg-gray-900 dark:bg-gray-100" />

          {/* Временные периоды открытий */}
          <section aria-labelledby="history-heading">
            <h3 id="history-heading" className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-10 flex items-center">
              <Clock className="w-8 h-8 mr-4" />
              {t('sections.history.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard
                icon={Globe}
                title={t('sections.history.ancient')}
                value={stats.ancient}
                total={stats.total}
                variant="warning"
                description={t('sections.history.descriptions.ancient')}
              />
              <StatCard
                icon={Beaker}
                title={t('sections.history.classical')}
                value={stats.classical}
                total={stats.total}
                variant="success"
                description={t('sections.history.descriptions.classical')}
              />
              <StatCard
                icon={Atom}
                title={t('sections.history.modern')}
                value={stats.modern}
                total={stats.total}
                variant="destructive"
                description={t('sections.history.descriptions.modern')}
              />
            </div>
          </section>

          <Separator className="h-1 bg-gray-900 dark:bg-gray-100" />

          {/* Детальная разбивка по категориям */}
          <section aria-labelledby="categories-heading">
            <h3 id="categories-heading" className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-10 flex items-center">
              <Activity className="w-8 h-8 mr-4" />
              {t('sections.categories.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <StatCard
                icon={Flame}
                title={t('sections.categories.alkaliMetals')}
                value={stats.alkaliMetals}
                total={stats.total}
                variant="destructive"
              />
              <StatCard
                icon={Activity}
                title={t('sections.categories.alkalineEarthMetals')}
                value={stats.alkalineEarthMetals}
                total={stats.total}
                variant="warning"
              />
              <StatCard
                icon={Shield}
                title={t('sections.categories.transitionMetals')}
                value={stats.transitionMetals}
                total={stats.total}
                variant="warning"
              />
              <StatCard
                icon={TrendingUp}
                title={t('sections.categories.postTransitionMetals')}
                value={stats.postTransitionMetals}
                total={stats.total}
                variant="success"
              />
              <StatCard
                icon={Activity}
                title={t('sections.categories.metalloids')}
                value={stats.metalloids}
                total={stats.total}
                variant="accent"
              />
              <StatCard
                icon={Snowflake}
                title={t('sections.categories.nonmetals')}
                value={stats.nonmetals}
                total={stats.total}
                variant="primary"
              />
              <StatCard
                icon={Zap}
                title={t('sections.categories.halogens')}
                value={stats.halogens}
                total={stats.total}
                variant="destructive"
              />
              <StatCard
                icon={Globe}
                title={t('sections.categories.nobleGases')}
                value={stats.nobleGases}
                total={stats.total}
                variant="secondary"
              />
              <StatCard
                icon={Sparkles}
                title={t('sections.categories.lanthanides')}
                value={stats.lanthanides}
                total={stats.total}
                variant="accent"
              />
              <StatCard
                icon={Atom}
                title={t('sections.categories.actinides')}
                value={stats.actinides}
                total={stats.total}
                variant="destructive"
              />
              <StatCard
                icon={Activity}
                title={t('sections.categories.unknown')}
                value={stats.unknownProperties}
                total={stats.total}
                variant="default"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
});

QuickStats.displayName = 'QuickStats';

export default QuickStats;

